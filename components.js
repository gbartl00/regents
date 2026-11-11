/* Reusable accordion, modal dialog, and modal drawer behavior.
   Pair with the data attributes and IDs in components.html. */
(() => {
  // Adapt the supplied Squiz examples to the local behavior layer.
  document.querySelectorAll('[data-component="collapsible"]').forEach(accordion => {
    accordion.setAttribute('data-accordion', '');
    accordion.querySelectorAll('.accordion__body').forEach(panel => {
      panel.removeAttribute('aria-hidden');
      panel.removeAttribute('inert');
    });
  });
  document.querySelectorAll('[data-component] dialog').forEach((modal, index) => {
    modal.id ||= `component-modal-${index}`;
    modal.setAttribute('data-component-modal', '');
    const section = modal.closest('[data-component]');
    section.querySelectorAll('.dialog__button:not([data-dismiss]),.drawer__trigger-button,[data-click="toggleModal"],[data-click="openGalleryDialog"]').forEach(button => {
      button.setAttribute('data-modal-open', modal.id);
      button.setAttribute('aria-controls', modal.id);
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-expanded', 'false');
    });
    modal.querySelectorAll('[data-dismiss]').forEach(button => {
      button.setAttribute('data-modal-close', '');
      if (!button.textContent.trim()) button.textContent = '×';
      if (button.hasAttribute('aria-label')) button.classList.add('component-close');
    });
    modal.addEventListener('close', () => {
      modal.querySelectorAll('iframe').forEach(frame => { frame.src = frame.src; });
    });
  });
  document.querySelectorAll('[data-component="tabs"]').forEach(tabs => {
    const buttons = [...tabs.querySelectorAll('[role="tab"]')];
    tabs.querySelector('.tabs__list').removeAttribute('role');
    tabs.querySelector('.tabs__nav').setAttribute('role', 'tablist');
    tabs.querySelector('.overflowButton')?.setAttribute('hidden', '');
    const activate = selected => buttons.forEach(button => {
      const active = button === selected;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
      button.parentElement.classList.toggle('tabs__navItem--active', active);
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      panel.hidden = !active;
      panel.classList.toggle('tabs__content--active', active);
    });
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => activate(button));
      button.addEventListener('keydown', event => {
        const next = {ArrowRight: (index + 1) % buttons.length, ArrowLeft: (index + buttons.length - 1) % buttons.length, Home: 0, End: buttons.length - 1}[event.key];
        if (next === undefined) return;
        event.preventDefault();
        activate(buttons[next]);
        buttons[next].focus();
      });
    });
    activate(buttons.find(button => button.getAttribute('aria-selected') === 'true') || buttons[0]);
  });
  document.querySelectorAll('[data-component="image-gallery"]').forEach(gallery => {
    const slides = [...gallery.querySelectorAll('.swiper-slide')];
    let current = 0;
    const pagination = gallery.querySelector('.swiper-pagination');
    pagination.setAttribute('aria-live', 'polite');
    const show = index => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.hidden = i !== current; });
      pagination.textContent = `Image ${current + 1} of ${slides.length}`;
    };
    gallery.querySelectorAll('[data-click="openGalleryDialog"]').forEach((button, index) => button.addEventListener('click', () => show(index)));
    for (const [selector, label, step] of [['.swiper-button-prev','Previous image',-1],['.swiper-button-next','Next image',1]]) {
      const placeholder = gallery.querySelector(selector);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = placeholder.className;
      button.textContent = label;
      button.addEventListener('click', () => show(current + step));
      placeholder.replaceWith(button);
    }
    show(0);
  });
  document.querySelectorAll('[data-click="togglePlayer"]').forEach(button => button.addEventListener('click', () => {
    const section = button.closest('.video-player');
    section.querySelector('.video-player__img-wrapper').hidden = true;
    const player = section.querySelector('.video-player__player-wrapper');
    player.style.display = 'block';
    const frame = player.querySelector('iframe');
    frame.src += `${frame.src.includes('?') ? '&' : '?'}autoplay=1`;
    frame.focus();
  }));
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

  document.querySelectorAll('dialog[data-component-modal]').forEach(modal => {
    let opener;
    let backdropPress = false;
    const finishClosing = () => {
      backdropPress = false;
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
        modal.showModal();
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
