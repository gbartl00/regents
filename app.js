const boardDescription = 'The Board of Regents for the Oklahoma Agricultural and Mechanical Colleges was created in 1944 by Section 31a, Article 6, of the Oklahoma Constitution. It consists of nine members; eight members are appointed by the Governor by and with the advice of the senate, and the ninth member is the President of the State Board of Agriculture. The Board has the supervision, management, and control of five institutions including Oklahoma State University, Connors State College, Langston University, Northeastern Oklahoma Agricultural and Mechanical College, and Oklahoma Panhandle State University.';
const members = [
 {id:'cary-baetz',name:'Mr. Cary Baetz',image:'p2-13',position:'Position 1: Vice Chair, At-Large Appointment',term:'May 12, 2022 to April 4, 2030'},
 {id:'billy-taylor',name:'Mr. Billy G. Taylor',image:'p2-6',position:'Position 2: Second Congressional District',term:'May 19, 2021 to May 25, 2023\nMay 26, 2023 to Apr 4, 2031'},
 {id:'jennifer-callahan',name:'Ms. Jennifer Callahan',image:'p2-2',position:'Position 3: At-Large Appointment',term:'July 15, 2024 to April 4, 2032'},
 {id:'tracy-poole',name:'Mr. Tracy Poole',image:'p2-10',position:'Position 4: First Congressional District',term:'May 27, 2025 to April 4, 2033'},
 {id:'chris-franklin',name:'Mr. Chris Franklin',image:'p2-14',position:'Position 5: Fifth Congressional District',term:'May 29, 2024 to Apr 4, 2026'},
 {id:'joe-hall',name:'Mr. Joe D. Hall',image:'p2-11',position:'Position 6: At-Large Appointment',term:'Apr 16, 2003 to Apr 4, 2011\nApr 5, 2011 to Apr 4, 2019\nApr 5, 2019 to Apr 4, 2027'},
 {id:'jimmy-harrel',name:'Mr. Jimmy Harrel',image:'p2-9',position:'Position 7: Third Congressional District',term:'May 6, 2020 to Apr 4, 2028'},
 {id:'rick-walker',name:'Mr. Rick Walker',image:'p2-5',position:'Position 8: Chair, Fourth Congressional District',term:'May 19, 2021 to Apr 4, 2029'},
 {id:'blayne-arthur',name:'Mrs. Blayne Arthur',image:'p2-12',position:'Position 9: President of the State Board of Agriculture',term:'Jan 14, 2019 - Coterminous with the Governor'}
];
const meetings=[
 {day:'22',month:'April',date:'2026-04-22',title:'Special Board Meeting',time:'1:30 PM',place:'Hamm Institute for American Energy at OSU'},
 {day:'24',month:'April',date:'2026-04-24',title:'Regular Board Meeting',time:'10:00 AM',place:'Northeastern Oklahoma A&M College'},
 {day:'12',month:'June',date:'2026-06-12',title:'Regular Board Meeting',time:'10:00 AM',place:'Hamm Institute for American Energy at OSU'},
 {day:'11',month:'Sept',date:'2026-09-11',title:'Regular Board Meeting',time:'10:00 AM',place:'Hamm Institute for American Energy at OSU'}
];
const institutions=[['Connors State College','logos/connors-state-black.svg','https://connorsstate.edu/'],['Langston University','logos/langston-black.png','https://langston.edu/'],['NEO A&M College','logos/neo-black.svg','https://neo.edu/'],['Oklahoma Panhandle State University','logos/opsu-black.svg','https://opsu.edu/'],['Oklahoma State University','logos/osu-black.svg','https://okstate.edu/']];
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const params=new URLSearchParams(location.search), page=params.get('page')||'home';
const footerOptions = [
  { id: '1', name: 'Blue frame', description: 'A white logo band enclosed by a blue border.' },
  { id: '2', name: 'Light-gray frame', description: 'The same white logo band with a softer gray border.' },
  { id: '3', name: 'Individual logo tiles', description: 'Separate white logo tiles on a light-gray background.' }
];
const colorInstitutionLogos = ['connors-state-color.svg','langston-color.png','neo-color.svg','opsu-color.svg','osu-color.svg'];
const institutionLockup = (option, id = 'institutions-title', heading = 'h2') => `<section class="footer-lockup footer-lockup--${option}" aria-labelledby="${heading === 'h3' ? `option-${option} ${id}` : id}"><div class="footer-lockup__inner"><${heading} id="${id}" class="footer-lockup__heading">Oklahoma A&amp;M Institutions</${heading}><div class="footer-lockup__logos">${institutions.map(([name,,url],index)=>`<a href="${url}" aria-label="${name}"><img src="assets/logos/${colorInstitutionLogos[index]}" alt="${name}" loading="lazy"></a>`).join('')}</div></div></section>`;
const selectedFooter = footerOptions.find(option => option.id === params.get('footer')) || footerOptions.find(option => option.id === '3');

const href=(p,extra='')=>`?page=${p}${extra}`;
const nav=[['About Us','members'],['Upcoming Meetings','meetings'],['Minutes','minutes'],['Policy Manual','policy'],['Staff','staff'],['Contact Us','contact']];
// Match the live site's navigation; use the existing local member-directory mockup.
const submenus={
 members:[['Board Members','?page=members'],['Mission Statement','https://regents.okstate.edu/mission-statement'],['Committees','https://regents.okstate.edu/committees'],['Councils','https://regents.okstate.edu/councils']],
 staff:[['Executive/Administrative','https://regents.okstate.edu/staff/exec-office-staff'],['Office of Internal Audit','https://regents.okstate.edu/staff/internal-audit-staff'],['Office of Legal Counsel','https://regents.okstate.edu/staff/legal-counsel-staff'],['Employment Opportunities','https://regents.okstate.edu/employment-opportunities']]
};
const navItem=([label,p])=>{
 const active=page===p||(p==='members'&&page==='member')||(p==='meetings'&&page==='meeting');
 if(submenus[p])return `<li class="nav-item dropdown"><button class="nav-link dropdown-toggle ${active?'active':''}" id="${p}-toggle" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" aria-controls="${p}-submenu">${label}</button><ul class="dropdown-menu" id="${p}-submenu" aria-labelledby="${p}-toggle">${submenus[p].map(([text,url])=>`<li><a class="dropdown-item" href="${url}" ${url==='?page='+page?'aria-current="page"':''}>${text}</a></li>`).join('')}</ul></li>`;
 return `<li class="nav-item"><a class="nav-link ${active?'active':''}" ${page===p?'aria-current="page"':''} href="${href(p)}">${label}</a></li>`;
};

document.querySelector('#header').innerHTML=`<div class="masthead"><div class="regents-container"><div class="brand-row"><div class="brand"><a class="brand-logo" href="./" aria-label="Board of Regents home"><img src="assets/p1-6.png" alt="Oklahoma A&M Board of Regents seal"></a><span class="brand-title"><strong>Board of Regents</strong> for the<br>Oklahoma Agricultural &amp; Mechanical Colleges</span></div><form class="site-search" action="" role="search"><input type="hidden" name="page" value="search"><label class="visually-hidden" for="site-query">Search the website</label><input class="form-control" type="search" id="site-query" name="q" placeholder="Search..." value="${esc(params.get('q')||'')}"><button class="search-button" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="4"/><path d="m15 15 7 7" stroke="currentColor" stroke-width="4"/></svg></button></form></div><nav class="navbar navbar-expand-lg" aria-label="Main navigation"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Main menu">☰ &nbsp; Menu</button><div class="collapse navbar-collapse" id="main-nav"><ul class="navbar-nav">${nav.map(navItem).join('')}</ul></div></nav></div></div>`;
const institutionContent=institutionLockup(selectedFooter.id);
document.querySelector('#footer').innerHTML=`<div class="footer dashboard-footer"><div class="regents-container"><div class="row"><div class="col-md-4"><h2>OSU/ A&amp;M REGENTS</h2><address>900 N. PORTLAND AVENUE<br>OKLAHOMA CITY, OK 73107<br>PH: <a href="tel:+14059453263">405-945-3263</a><br>FAX: 405-945-3345<br>EMAIL: <a href="mailto:board@okstate.edu">BOARD@OKSTATE.EDU</a></address></div><div class="col-md-4"><h2>INSTITUTIONS</h2><ul class="footer-links"><li><a href="https://okstate.edu/">OSU - Stillwater</a></li><li><a href="https://osuokc.edu/">OSU - Oklahoma City</a></li><li><a href="https://tulsa.okstate.edu/">OSU - Tulsa</a></li><li><a href="https://medicine.okstate.edu/">OSU Center for Health Sciences</a></li><li><a href="https://osuit.edu/">OSU Institute of Technology</a></li></ul></div><div class="col-md-4"><h2 class="visually-hidden">More institutions</h2><ul class="footer-links pt-md-4">${institutions.slice(0,4).map(([name,,url])=>`<li><a href="${url}">${name}</a></li>`).join('')}</ul></div></div><div class="footer-bottom">© 2026 &nbsp; | &nbsp; ALL RIGHTS RESERVED<br>BOARD OF REGENTS FOR THE OKLAHOMA AGRICULTURAL AND MECHANICAL COLLEGES<br><a href="?page=ethics">ETHICS POINT</a><span class="footer-divider" aria-hidden="true"> · </span><a href="?page=accessibility">ACCESSIBILITY &amp; HELP</a></div></div></div>`;
const crumb=label=>`<nav class="breadcrumb-band" aria-label="Breadcrumb"><ol class="regents-container breadcrumb-list"><li><a href="./">Home</a></li>${page==='member'?'<li><a href="?page=members">Regents Members</a></li>':''}<li aria-current="page">${esc(page==='member'?(members.find(m=>m.id===params.get('id'))?.name||label):label)}</li></ol></nav>`;
const meetingCard=(m,i,detail=false)=>{
 const heading=page==='home'?'h3':'h2';
 return `<article class="events__item meeting-card"><div class="events__content-wrapper"><time class="events__date-wrapper date-badge" datetime="${m.date}"><span class="events__date date-day">${m.day}</span><span class="date-month">${m.month}<br>2026</span></time><${heading} class="events__heading"><a class="events__heading-link meeting-link" href="?page=meeting&amp;id=${i}">${m.title}<span class="visually-hidden"> on ${m.month} ${m.day}, 2026</span></a></${heading}><p class="events__body">${m.time}<br>${m.place}</p>${detail?'<div class="meeting-detail"><p>Agenda and meeting materials were not included in the supplied reference.</p><a href="mailto:board@okstate.edu">Request meeting information →</a></div>':''}</div></article>`;
};
const news=[{id:'presidential-search',title:'Regents begin search for next president of Connors State College',body:'Guiding the future of the A&M system, the Board of Regents brings together leaders dedicated to advancing education, research and service across the state.',link:'Presidential search'},{id:'compliance',title:'74 O.S. § 3106.4 Website Posting Requirements for Public Entities',body:'In accordance with 74 O.S. § 3106.4, the Board of Regents provides required public information online to support transparency, accountability, and public access.',link:'Compliance details'}];
let content='';let title='Home';
if(page==='home'){
content=`<section class="banner" aria-labelledby="home-title"><div class="banner__wrapper"><div class="banner__img-wrapper"><img class="banner__img" src="assets/p1-5.png" alt="2025–2026 OSU/A&M Board of Regents members standing together"></div><div class="banner__content-wrapper"><h1 id="home-title">2025-2026 Members of the OSU/A&amp;M Board of Regents</h1><p>Guiding the future of the A&amp;M system, the Board of Regents brings together leaders dedicated to advancing education, research and service across the state.</p><p>From Left to Right: Billy G. Taylor, Member; Chris Franklin, Member; Jennifer Callahan, Member; Joe D. Hall, Member; Rick Walker, Chair; Cary Baetz, Vice Chair; Tracy Poole, Member; Blayne Arthur, Member; Jason Ramsey, Interim Chief Executive Officer</p><p>Not Pictured: Jimmy Harrel, Member</p><div class="banner__button-wrapper"><a class="banner__button" href="?page=members">Meet the members</a></div></div></div></section><section class="news" aria-labelledby="news-title" style="--news-item-per-row:2"><h2 id="news-title" class="component-title">News and Information</h2><div class="news__wrapper">${news.map(n=>`<article class="news__item"><div class="news__content-wrapper"><div class="news__body-wrapper"><h3 class="news__heading"><a class="news__heading-link" href="?page=${n.id}">${n.title}</a></h3><p class="news__body">${n.body}</p></div><a class="news__button" href="?page=${n.id}">${n.link}</a></div></article>`).join('')}</div></section><section class="events" aria-labelledby="meetings-title" style="--events-item-per-row:4"><h2 id="meetings-title" class="component-title">Upcoming Meetings</h2><div class="events__wrapper">${meetings.map((m,i)=>meetingCard(m,i)).join('')}</div><div class="all-meetings banner__button-wrapper"><a class="banner__button" href="?page=meetings">All upcoming</a></div></section>`;
}else if(page==='footer-options'){
title='Footer options';
content=crumb('Footer options')+`<section class="content-page regents-container footer-options-intro"><p class="component-eyebrow">Design review</p><h1>Three footer options</h1><p>Compare the three school-logo treatments below. Each uses the same five full-color school logos, in the same order, so you can focus on the background and framing.</p><nav class="footer-options-jump" aria-label="Footer options">${footerOptions.map(option=>`<a href="#option-${option.id}">Option ${option.id}: ${option.name}</a>`).join('')}</nav></section>${footerOptions.map(option=>`<section class="footer-option-review" aria-labelledby="option-${option.id}"><div class="regents-container footer-option-label"><p class="component-eyebrow">Option ${option.id}</p><h2 id="option-${option.id}">${option.name}</h2><p>${option.description}</p><a class="footer-option-home" href="index.html?footer=${option.id}#institutions-title">View option ${option.id} on the homepage <span aria-hidden="true">→</span></a></div>${institutionLockup(option.id,`option-${option.id}-institutions`,'h3')}</section>`).join('')}`;

}else if(page==='components'){
title='Interactive components';content=crumb('Component examples')+`<section class="content-page regents-container component-demo-intro">
  <p class="component-eyebrow">Component examples</p>
  <h1>Interactive components</h1>
  <p>Explore three ways to reveal more information. Select an accordion heading, open a dialog, or slide out a drawer.</p>
</section>
<section class="accordion" aria-labelledby="accordion-title">
  <div class="component-inner">
    <p class="component-eyebrow">01 / Expand in place</p>
    <h2 id="accordion-title">Accordion</h2>
    <p>Reveal an answer without leaving the page. Each section opens independently.</p>
    <div data-accordion>
      <div class="accordion__item">
        <h3 class="accordion__heading"><button class="accordion__heading-button" id="accordion-purpose" aria-expanded="true" aria-controls="accordion-purpose-panel" type="button">When would I use an accordion?</button></h3>
        <div class="accordion__body" id="accordion-purpose-panel" role="region" aria-labelledby="accordion-purpose">
          <p>An accordion keeps related information together while letting visitors choose which details to read. It works well for frequently asked questions, meeting guidance, and supporting information.</p>
        </div>
      </div>
      <div class="accordion__item">
        <h3 class="accordion__heading"><button class="accordion__heading-button" id="accordion-keyboard" aria-expanded="true" aria-controls="accordion-keyboard-panel" type="button">Can I use the keyboard?</button></h3>
        <div class="accordion__body" id="accordion-keyboard-panel" role="region" aria-labelledby="accordion-keyboard">
          <p>Yes. Use Tab to reach a heading, then press Enter or Space to open or close its answer. Tab also reaches any links within an open section.</p>
          <p><a href="?page=accessibility">Read our accessibility information</a></p>
        </div>
      </div>
      <div class="accordion__item">
        <h3 class="accordion__heading"><button class="accordion__heading-button" id="accordion-multiple" aria-expanded="true" aria-controls="accordion-multiple-panel" type="button">Can more than one answer stay open?</button></h3>
        <div class="accordion__body" id="accordion-multiple-panel" role="region" aria-labelledby="accordion-multiple">
          <p>Yes. Open several sections to compare their contents, and close each one when you are finished.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="dialog regents-bg-gray" aria-labelledby="dialog-example-title">
  <div class="component-inner">
    <p class="component-eyebrow">02 / Open a focused window</p>
    <h2 id="dialog-example-title">Dialog</h2>
    <p>A dialog appears over the page when a short message needs your attention.</p>
    <button class="dialog__button" type="button" data-modal-open="example-dialog" aria-controls="example-dialog" aria-haspopup="dialog" aria-expanded="false">Open dialog</button>
    <dialog class="dialog__modal" id="example-dialog" data-component-modal aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <button class="component-close" type="button" data-modal-close aria-label="Close dialog" autofocus><span aria-hidden="true">×</span></button>
      <p class="component-eyebrow">Dialog example</p>
      <h2 id="dialog-title">A moment of focus</h2>
      <p id="dialog-description">This window keeps a short message in focus while the page waits in the background.</p>
      <p>Close it with either button, press Escape, or select the shaded background. You will return to the button that opened it.</p>
      <button class="dialog__button" type="button" data-modal-close>Back to examples</button>
    </dialog>
  </div>
</section>
<section class="drawer" aria-labelledby="drawer-example-title">
  <div class="component-inner">
    <p class="component-eyebrow">03 / Slide up for more</p>
    <h2 id="drawer-example-title">Drawer</h2>
    <p>A drawer slides up from the bottom to hold related information or useful links.</p>
    <button class="drawer__trigger-button" type="button" data-modal-open="example-drawer" aria-controls="example-drawer" aria-haspopup="dialog" aria-expanded="false">Open drawer</button>
    <dialog class="drawer-modal" id="example-drawer" data-component-modal aria-labelledby="drawer-title" aria-describedby="drawer-description">
      <button class="component-close" type="button" data-modal-close aria-label="Close drawer" autofocus><span aria-hidden="true">×</span></button>
      <p class="component-eyebrow">Drawer example</p>
      <h2 id="drawer-title">More to explore</h2>
      <p id="drawer-description">Keep supporting information close at hand in a panel that opens from the bottom of the page.</p>
      <h3>Explore the Regents site</h3>
      <ul class="component-drawer-links">
        <li><a href="?page=members">Meet the Regents</a></li>
        <li><a href="?page=meetings">View the meeting reference</a></li>
        <li><a href="?page=contact">Contact the Board</a></li>
      </ul>
      <p>Press Escape or use a close button to return to the examples.</p>
      <button class="dialog__button" type="button" data-modal-close>Close panel</button>
    </dialog>
  </div>
</section>
`;
}else if(page==='members'){
title='Meet the Regents';content=crumb('Regents Members')+`<section class="cards directory"><div class="directory-intro"><h1>Meet the Regents</h1><p>${boardDescription}</p></div><div class="cards__wrapper">${members.map(m=>`<article class="cards__item member-card"><a class="cards__heading-link member-card-link" href="?page=member&amp;id=${m.id}"><img class="member-portrait" src="assets/${m.image}.png" alt="" loading="lazy"><h2 class="cards__heading">${m.name}</h2></a><p>${m.position}<br>${m.term.replaceAll('\n','<br>')}</p></article>`).join('')}</div></section>`;
}else if(page==='member'){
const m=members.find(m=>m.id===params.get('id'));
if(m){title=m.name;content=crumb('Regents Members')+`<article class="profile regents-container"><div class="row"><div class="col-md-8 profile-content"><h1>${m.name}</h1><h2>${m.position.replace(/^Position \d: /,'')}</h2><p class="term">Current term: ${m.term.split('\n').at(-1)}</p><p>${boardDescription}</p></div><div class="col-md-4"><img src="assets/${m.image}.png" alt="Portrait of ${m.name}"></div></div></article>`;}
}else if(page==='meetings'||page==='meeting'){
title=page==='meetings'?'Upcoming Meetings':'Meeting Details';const idx=Number(params.get('id'));const list=page==='meeting'?meetings.filter((_,i)=>i===idx):meetings;
content=crumb(title)+`<section class="content-page regents-container"><h1>${title}</h1><p class="reference-label">2026 schedule reproduced from the supplied design reference. These dates have passed; a current schedule has not been provided.</p><div class="events__wrapper" style="--events-item-per-row:2">${list.map(m=>meetingCard(m,meetings.indexOf(m),true)).join('')}</div>${page==='meeting'?'<p class="mt-5"><a href="?page=meetings">← All meetings</a></p>':''}</section>`;
}else if(page==='search'){
title='Search';const q=(params.get('q')||'').trim();const records=[...members.map(m=>({title:m.name,text:m.position+' '+m.term,url:'?page=member&id='+m.id})),...meetings.map((m,i)=>({title:`${m.title} — ${m.month} ${m.day}, 2026`,text:`${m.month} ${m.day}, 2026 · ${m.time} · ${m.place}`,url:'?page=meeting&id='+i})),...news.map(n=>({title:n.title,text:n.body,url:'?page='+n.id})),{title:'Contact Us',text:'OSU/A&M Regents · 900 N. Portland Avenue · Oklahoma City · 405-945-3263 · board@okstate.edu',url:'?page=contact'},{title:'Meet the Regents',text:boardDescription,url:'?page=members'}];const matches=q?records.filter(r=>(r.title+' '+r.text).toLowerCase().includes(q.toLowerCase())):[];title=q?`Search results for “${q}”`:'Search';
content=crumb(title)+`<section class="content-page regents-container"><h1>Search results</h1><p>${q?`${matches.length} result${matches.length===1?'':'s'} for “${esc(q)}”`:'Enter a search term in the search box above.'}</p>${q&&!matches.length?'<p>Try a member’s name, an institution, or “meeting”.</p>':''}<ul class="search-results">${matches.map(r=>`<li><h2><a href="${r.url}">${r.title}</a></h2><p>${r.text}</p></li>`).join('')}</ul></section>`;
}else{
const article=news.find(n=>n.id===page);title=article?.title||({minutes:'Minutes',policy:'Policy Manual',staff:'Staff',contact:'Contact Us',ethics:'Ethics Point',accessibility:'Accessibility and Help'}[page]);
if(title){let body='';if(page==='accessibility')body='<p>This website is being developed toward WCAG 2.2 Level AA. An accessibility review is in progress; full conformance has not been established.</p><h2>Help using this website</h2><ul><li>Use the Skip to content link at the beginning of each page to bypass the header.</li><li>Use Tab and Shift+Tab to move between links and controls, and Enter to follow a link. The menu button also supports Space; Escape closes an open mobile menu.</li><li>Use your browser’s zoom and text settings to enlarge the content.</li></ul><h2>Report an accessibility barrier</h2><p>If you have difficulty accessing information, contact the Board at <a href="mailto:board@okstate.edu?subject=Website%20accessibility%20assistance">board@okstate.edu</a> or <a href="tel:+14059453263">405-945-3263</a>. Include the page address, the information you need, and the issue you encountered. You can request an alternative format.</p><h2>Documents and external websites</h2><p>Some reference documents have not yet been supplied for this preview. Documents added later and websites reached through external links require their own accessibility reviews.</p>';else if(page==='contact')body='<h2>OSU/A&amp;M Regents</h2><address>900 N. Portland Avenue<br>Oklahoma City, OK 73107</address><p>Phone: <a href="tel:+14059453263">405-945-3263</a><br>Fax: 405-945-3345<br>Email: <a href="mailto:board@okstate.edu">board@okstate.edu</a></p>';else if(article)body=`<p>${article.body}</p><div class="resource-note">${page==='presidential-search'?'Search timelines, application details, and related documents':'Compliance documents and posting details'} were not included in the supplied reference. <a href="mailto:board@okstate.edu">Contact the Board</a> for more information.</div>`;else body=`<div class="resource-note">${{minutes:'Meeting minutes',policy:'The policy manual',staff:'A staff directory',ethics:'An Ethics Point reporting link'}[page]} was not included in the supplied reference.<p class="mb-0 mt-2"><a href="?page=contact">Contact the Board for information →</a></p></div>`;content=crumb(title)+`<section class="content-page regents-container"><h1>${title}</h1><div class="col-lg-8">${body}</div></section>`;}
}
if(!content){title='Page not found';content=crumb(title)+'<section class="content-page regents-container"><h1>Page not found</h1><p><a href="./">Return to the homepage</a></p></section>';}
document.querySelector('#main-content').innerHTML=content+(page==='footer-options'?'':institutionContent);document.title=`${title} | OSU/A&M Board of Regents`;

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
