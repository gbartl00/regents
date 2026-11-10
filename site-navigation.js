// Keep the keyboard path predictable when a mobile menu is dismissed.
const menuButton=document.querySelector('.navbar-toggler');
const menuPanel=document.querySelector('#main-nav');
document.querySelector('.navbar').addEventListener('keydown',event=>{
 const dropdown=event.target.closest('.dropdown');
 const dropdownButton=dropdown?.querySelector('[data-bs-toggle="dropdown"]');
 if(event.key==='Escape'&&dropdownButton?.getAttribute('aria-expanded')==='true'){
  event.preventDefault();event.stopPropagation();
  bootstrap.Dropdown.getOrCreateInstance(dropdownButton).hide();
  dropdownButton.focus();
  return;
 }
 if(event.key==='Escape'&&menuPanel.classList.contains('show')){
  event.preventDefault();
  bootstrap.Collapse.getOrCreateInstance(menuPanel,{toggle:false}).hide();
  menuButton.focus();
 }
});
window.matchMedia('(min-width: 992px)').addEventListener('change',event=>{
 if(!event.matches&&menuPanel.contains(document.activeElement)&&!menuPanel.classList.contains('show')) menuButton.focus();
});
// Native fragment navigation also moves keyboard focus to the bypass destination.
document.querySelector('.skip-link').addEventListener('click',()=>document.querySelector('#main-content').focus());

// Reset nested disclosures when the surrounding mobile navigation is closed.
menuPanel.addEventListener('hide.bs.collapse',()=>{
 document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(button=>{
  bootstrap.Dropdown.getInstance(button)?.hide();
 });
});
