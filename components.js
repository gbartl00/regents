/* Reusable accordion, tabs, gallery, video, modal dialog, and modal drawer behavior.
   Pair with the data attributes and IDs in components.html. */
(() => {
  document.querySelectorAll('[data-accordion]').forEach(accordion => {
    accordion.querySelectorAll('.accordion__heading-button[aria-controls]').forEach(button => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      if (!panel) return;
      const setExpanded = expanded => {
        button.setAttribute('aria-expanded', String(expanded));
        panel.hidden = !expanded;
      };
      setExpanded(button.hasAttribute('data-start-open'));
      button.addEventListener('click', () => setExpanded(button.getAttribute('aria-expanded') !== 'true'));
    });
  });

  document.querySelectorAll('[data-tabs]').forEach(group => {
    const tabs = [...group.querySelectorAll('[role="tab"]')];
    const selectTab = tab => {
      tabs.forEach(item => {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
        const panel = document.getElementById(item.getAttribute('aria-controls'));
        panel.hidden = !active;
        panel.classList.toggle('tabs__content--active', active);
      });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(tab));
      tab.addEventListener('keydown', event => {
        const next = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
        if (next === undefined) return;
        event.preventDefault();
        selectTab(tabs[next]);
        tabs[next].focus();
      });
    });
  });

  document.querySelectorAll('[data-inline-video]').forEach(group => {
    const teaser = group.querySelector('.video-player__img-wrapper');
    const player = group.querySelector('.kitchen-inline-player');
    const frame = group.querySelector('iframe');
    group.querySelector('[data-video-play]').addEventListener('click', () => {
      teaser.hidden = true;
      player.hidden = false;
      frame.src = frame.dataset.videoSrc;
      group.querySelector('[data-video-stop]').focus();
    });
    group.querySelector('[data-video-stop]').addEventListener('click', () => {
      frame.removeAttribute('src');
      player.hidden = true;
      teaser.hidden = false;
      group.querySelector('[data-video-play]').focus();
    });
  });

  document.querySelectorAll('dialog[data-component-modal]').forEach(modal => {
    let opener;
    let backdropPress = false;
    let galleryIndex = 0;
    const galleryButtons = [...document.querySelectorAll('[data-gallery-index]')]
      .filter(button => button.dataset.modalOpen === modal.id);
    const showImage = index => {
      if (!galleryButtons.length) return;
      galleryIndex = (index + galleryButtons.length) % galleryButtons.length;
      const source = galleryButtons[galleryIndex].querySelector('img');
      const image = modal.querySelector('.kitchen-gallery-image');
      image.src = source.src;
      image.alt = source.alt;
      modal.querySelector('[data-gallery-caption]').textContent = `Image ${galleryIndex + 1} of ${galleryButtons.length}: ${source.alt}`;
    };
    modal.querySelector('[data-gallery-prev]')?.addEventListener('click', () => showImage(galleryIndex - 1));
    modal.querySelector('[data-gallery-next]')?.addEventListener('click', () => showImage(galleryIndex + 1));
    modal.addEventListener('keydown', event => {
      if (!galleryButtons.length || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      showImage(galleryIndex + (event.key === 'ArrowLeft' ? -1 : 1));
    });
    const finishClosing = () => {
      backdropPress = false;
      modal.querySelectorAll('iframe[data-video-src]').forEach(frame => frame.removeAttribute('src'));
      if (!document.querySelector('dialog[data-component-modal][open]')) {
        document.documentElement.classList.remove('component-modal-open');
      }
      const previousOpener = opener;
      opener = undefined;
      if (previousOpener?.isConnected) {
        previousOpener.setAttribute('aria-expanded', 'false');
        previousOpener.focus({ preventScroll: true });
      }
    };
    const dismiss = () => {
      modal.close();
      finishClosing();
    };
    const isOutside = event => {
      const rect = modal.getBoundingClientRect();
      return event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom;
    };
    document.querySelectorAll('[data-modal-open]').forEach(button => {
      if (button.getAttribute('data-modal-open') !== modal.id) return;
      button.addEventListener('click', () => {
        if (modal.open || document.querySelector('dialog[data-component-modal][open]')) return;
        opener = button;
        if (button.hasAttribute('data-gallery-index')) showImage(Number(button.dataset.galleryIndex));
        modal.showModal();
        modal.querySelectorAll('iframe[data-video-src]').forEach(frame => { frame.src = frame.dataset.videoSrc; });
        button.setAttribute('aria-expanded', 'true');
        document.documentElement.classList.add('component-modal-open');
      });
    });
    modal.querySelectorAll('[data-modal-close]').forEach(button => {
      button.addEventListener('click', dismiss);
    });
    // Require both press and release on the backdrop; dragging content never dismisses it.
    modal.addEventListener('pointerdown', event => {
      backdropPress = event.target === modal && isOutside(event);
    });
    modal.addEventListener('click', event => {
      if (backdropPress && event.target === modal && isOutside(event)) dismiss();
      backdropPress = false;
    });
    // Keep the Tab sequence inside the modal, including its first and last controls.
    modal.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const controls = [...modal.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])')]
        .filter(element => element.tabIndex >= 0 && element.getClientRects().length && !element.closest('[hidden],[inert]'));
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    // Native <dialog> makes the background inert; cleanup also handles external close().
    modal.addEventListener('cancel', event => { event.preventDefault(); dismiss(); });
    modal.addEventListener('close', finishClosing);
  });
})();
