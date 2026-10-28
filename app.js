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
const institutions=[['Connors State College','p1-4','https://connorsstate.edu/'],['Langston University','p1-2','https://langston.edu/'],['NEO A&M College','p1-1','https://neo.edu/'],['Oklahoma Panhandle State University','p1-3','https://opsu.edu/'],['Oklahoma State University','p1-0','https://okstate.edu/']];
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const params=new URLSearchParams(location.search), page=params.get('page')||'home';
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

document.querySelector('#header').innerHTML=`<div class="masthead"><div class="container-wide"><div class="brand-row"><div class="brand"><a class="brand-logo" href="./" aria-label="Board of Regents home"><img src="assets/p1-6.png" alt="Oklahoma A&M Board of Regents seal"></a><span class="brand-title"><strong>Board of Regents</strong> for the<br>Oklahoma Agricultural &amp; Mechanical Colleges</span></div><form class="site-search" action="" role="search"><input type="hidden" name="page" value="search"><label class="visually-hidden" for="site-query">Search the website</label><input class="form-control" type="search" id="site-query" name="q" placeholder="Search..." value="${esc(params.get('q')||'')}"><button class="search-button" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="4"/><path d="m15 15 7 7" stroke="currentColor" stroke-width="4"/></svg></button></form></div><nav class="navbar navbar-expand-lg" aria-label="Main navigation"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Main menu">☰ &nbsp; Menu</button><div class="collapse navbar-collapse" id="main-nav"><ul class="navbar-nav">${nav.map(navItem).join('')}</ul></div></nav></div></div>`;
document.querySelector('#institutions').innerHTML=`<div class="institutions"><div class="container-wide"><h2 id="institutions-title">Oklahoma A&amp;M Institutions</h2><div class="institution-logos">${institutions.map(([name,img,url])=>`<a href="${url}" aria-label="${name}"><img src="assets/${img}.png" alt="${name}" loading="lazy"></a>`).join('')}</div></div></div>`;
document.querySelector('#footer').innerHTML=`<div class="footer"><div class="container-wide"><div class="row"><div class="col-md-4"><h2>OSU/ A&amp;M REGENTS</h2><address>900 N. PORTLAND AVENUE<br>OKLAHOMA CITY, OK 73107<br>PH: <a href="tel:+14059453263">405-945-3263</a><br>FAX: 405-945-3345<br>EMAIL: <a href="mailto:board@okstate.edu">BOARD@OKSTATE.EDU</a></address></div><div class="col-md-4"><h2>INSTITUTIONS</h2><ul class="footer-links"><li><a href="https://okstate.edu/">OSU - Stillwater</a></li><li><a href="https://osuokc.edu/">OSU - Oklahoma City</a></li><li><a href="https://tulsa.okstate.edu/">OSU - Tulsa</a></li><li><a href="https://medicine.okstate.edu/">OSU Center for Health Sciences</a></li><li><a href="https://osuit.edu/">OSU Institute of Technology</a></li></ul></div><div class="col-md-4"><h2 class="visually-hidden">More institutions</h2><ul class="footer-links pt-md-4">${institutions.slice(0,4).map(([name,,url])=>`<li><a href="${url}">${name}</a></li>`).join('')}</ul></div></div><div class="footer-bottom">© 2026 &nbsp; | &nbsp; ALL RIGHTS RESERVED<br>BOARD OF REGENTS FOR THE OKLAHOMA AGRICULTURAL AND MECHANICAL COLLEGES<br><a href="?page=ethics">ETHICS POINT</a><span class="footer-divider" aria-hidden="true"> · </span><a href="?page=accessibility">ACCESSIBILITY &amp; HELP</a></div></div></div>`;
const crumb=label=>`<nav class="breadcrumb-band" aria-label="Breadcrumb"><ol class="container-wide breadcrumb-list"><li><a href="./">Home</a></li>${page==='member'?'<li><a href="?page=members">Regents Members</a></li>':''}<li aria-current="page">${esc(page==='member'?(members.find(m=>m.id===params.get('id'))?.name||label):label)}</li></ol></nav>`;
const meetingCard=(m,i,detail=false)=>{
 const heading=page==='home'?'h3':'h2';
 return `<article class="meeting-card"><time class="date-badge" datetime="${m.date}"><span class="date-day">${m.day}</span><span class="date-month">${m.month}<br>2026</span></time><${heading}><a class="meeting-link" href="?page=meeting&amp;id=${i}">${m.title}<span class="visually-hidden"> on ${m.month} ${m.day}, 2026</span></a></${heading}><p>${m.time}<br>${m.place}</p>${detail?'<div class="meeting-detail"><p>Agenda and meeting materials were not included in the supplied reference.</p><a href="mailto:board@okstate.edu">Request meeting information →</a></div>':''}</article>`;
};
const news=[{id:'presidential-search',title:'Regents begin search for next president of Connors State College',body:'Guiding the future of the A&M system, the Board of Regents brings together leaders dedicated to advancing education, research and service across the state.',link:'Presidential search'},{id:'compliance',title:'74 O.S. § 3106.4 Website Posting Requirements for Public Entities',body:'In accordance with 74 O.S. § 3106.4, the Board of Regents provides required public information online to support transparency, accountability, and public access.',link:'Compliance details'}];
let content='';let title='Home';
if(page==='home'){
content=`<section class="hero container-wide"><div class="row align-items-center"><div class="col-md-7"><img class="hero-photo" src="assets/p1-5.png" alt="2025–2026 OSU/A&M Board of Regents members standing together"></div><div class="col-md-5 hero-copy"><h1>2025-2026 Members of the OSU/A&amp;M Board of Regents</h1><p>Guiding the future of the A&amp;M system, the Board of Regents brings together leaders dedicated to advancing education, research and service across the state.</p><p>From Left to Right: Billy G. Taylor, Member; Chris Franklin, Member; Jennifer Callahan, Member; Joe D. Hall, Member; Rick Walker, Chair; Cary Baetz, Vice Chair; Tracy Poole, Member; Blayne Arthur, Member; Jason Ramsey, Interim Chief Executive Officer</p><p>Not Pictured: Jimmy Harrel, Member</p><a class="arrow-link" href="?page=members">Meet the members</a></div></div></section><section class="news" aria-labelledby="news-title"><div class="container"><h2 id="news-title">News and Information</h2><div class="row g-4 g-md-5 news-grid">${news.map(n=>`<div class="col-md-6"><article class="news-card d-flex flex-column"><h3>${n.title}</h3><p>${n.body}</p><a class="arrow-link" href="?page=${n.id}">${n.link}</a></article></div>`).join('')}</div></div></section><section class="meetings-section container-wide" aria-labelledby="meetings-title"><h2 id="meetings-title">Upcoming Meetings</h2><div class="row g-4">${meetings.map((m,i)=>`<div class="col-sm-6 col-lg-3">${meetingCard(m,i)}</div>`).join('')}</div><div class="all-meetings"><a class="btn btn-primary" href="?page=meetings">ALL UPCOMING</a></div></section>`;
}else if(page==='members'){
title='Meet the Regents';content=crumb('Regents Members')+`<section class="directory container-wide"><div class="directory-intro"><h1>Meet the Regents</h1><p>${boardDescription}</p></div><div class="row member-grid">${members.map(m=>`<div class="col-12 col-sm-6 col-md-4"><article class="member-card"><a class="member-card-link" href="?page=member&amp;id=${m.id}"><img src="assets/${m.image}.png" alt="" loading="lazy"><h2>${m.name}</h2></a><p>${m.position}<br>${m.term.replaceAll('\n','<br>')}</p></article></div>`).join('')}</div></section>`;
}else if(page==='member'){
const m=members.find(m=>m.id===params.get('id'));
if(m){title=m.name;content=crumb('Regents Members')+`<article class="profile container-wide"><div class="row"><div class="col-md-8 profile-content"><h1>${m.name}</h1><h2>${m.position.replace(/^Position \d: /,'')}</h2><p class="term">Current term: ${m.term.split('\n').at(-1)}</p><p>${boardDescription}</p></div><div class="col-md-4"><img src="assets/${m.image}.png" alt="Portrait of ${m.name}"></div></div></article>`;}
}else if(page==='meetings'||page==='meeting'){
title=page==='meetings'?'Upcoming Meetings':'Meeting Details';const idx=Number(params.get('id'));const list=page==='meeting'?meetings.filter((_,i)=>i===idx):meetings;
content=crumb(title)+`<section class="content-page container-wide"><h1>${title}</h1><p class="reference-label">2026 schedule reproduced from the supplied design reference. These dates have passed; a current schedule has not been provided.</p><div class="row g-5">${list.map(m=>`<div class="col-md-6">${meetingCard(m,meetings.indexOf(m),true)}</div>`).join('')}</div>${page==='meeting'?'<p class="mt-5"><a href="?page=meetings">← All meetings</a></p>':''}</section>`;
}else if(page==='search'){
title='Search';const q=(params.get('q')||'').trim();const records=[...members.map(m=>({title:m.name,text:m.position+' '+m.term,url:'?page=member&id='+m.id})),...meetings.map((m,i)=>({title:`${m.title} — ${m.month} ${m.day}, 2026`,text:`${m.month} ${m.day}, 2026 · ${m.time} · ${m.place}`,url:'?page=meeting&id='+i})),...news.map(n=>({title:n.title,text:n.body,url:'?page='+n.id})),{title:'Contact Us',text:'OSU/A&M Regents · 900 N. Portland Avenue · Oklahoma City · 405-945-3263 · board@okstate.edu',url:'?page=contact'},{title:'Meet the Regents',text:boardDescription,url:'?page=members'}];const matches=q?records.filter(r=>(r.title+' '+r.text).toLowerCase().includes(q.toLowerCase())):[];title=q?`Search results for “${q}”`:'Search';
content=crumb(title)+`<section class="content-page container-wide"><h1>Search results</h1><p>${q?`${matches.length} result${matches.length===1?'':'s'} for “${esc(q)}”`:'Enter a search term in the search box above.'}</p>${q&&!matches.length?'<p>Try a member’s name, an institution, or “meeting”.</p>':''}<ul class="search-results">${matches.map(r=>`<li><h2><a href="${r.url}">${r.title}</a></h2><p>${r.text}</p></li>`).join('')}</ul></section>`;
}else{
const article=news.find(n=>n.id===page);title=article?.title||({minutes:'Minutes',policy:'Policy Manual',staff:'Staff',contact:'Contact Us',ethics:'Ethics Point',accessibility:'Accessibility and Help'}[page]);
if(title){let body='';if(page==='accessibility')body='<p>This website is being developed toward WCAG 2.2 Level AA. An accessibility review is in progress; full conformance has not been established.</p><h2>Help using this website</h2><ul><li>Use the Skip to content link at the beginning of each page to bypass the header.</li><li>Use Tab and Shift+Tab to move between links and controls, and Enter to follow a link. The menu button also supports Space; Escape closes an open mobile menu.</li><li>Use your browser’s zoom and text settings to enlarge the content.</li></ul><h2>Report an accessibility barrier</h2><p>If you have difficulty accessing information, contact the Board at <a href="mailto:board@okstate.edu?subject=Website%20accessibility%20assistance">board@okstate.edu</a> or <a href="tel:+14059453263">405-945-3263</a>. Include the page address, the information you need, and the issue you encountered. You can request an alternative format.</p><h2>Documents and external websites</h2><p>Some reference documents have not yet been supplied for this preview. Documents added later and websites reached through external links require their own accessibility reviews.</p>';else if(page==='contact')body='<h2>OSU/A&amp;M Regents</h2><address>900 N. Portland Avenue<br>Oklahoma City, OK 73107</address><p>Phone: <a href="tel:+14059453263">405-945-3263</a><br>Fax: 405-945-3345<br>Email: <a href="mailto:board@okstate.edu">board@okstate.edu</a></p>';else if(article)body=`<p>${article.body}</p><div class="resource-note">${page==='presidential-search'?'Search timelines, application details, and related documents':'Compliance documents and posting details'} were not included in the supplied reference. <a href="mailto:board@okstate.edu">Contact the Board</a> for more information.</div>`;else body=`<div class="resource-note">${{minutes:'Meeting minutes',policy:'The policy manual',staff:'A staff directory',ethics:'An Ethics Point reporting link'}[page]} was not included in the supplied reference.<p class="mb-0 mt-2"><a href="?page=contact">Contact the Board for information →</a></p></div>`;content=crumb(title)+`<section class="content-page container-wide"><h1>${title}</h1><div class="col-lg-8">${body}</div></section>`;}
}
if(!content){title='Page not found';content=crumb(title)+'<section class="content-page container-wide"><h1>Page not found</h1><p><a href="./">Return to the homepage</a></p></section>';}
document.querySelector('#main').innerHTML=content;document.title=`${title} | OSU/A&M Board of Regents`;

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
document.querySelector('.skip-link').addEventListener('click',()=>document.querySelector('#main').focus());

// Reset nested disclosures when the surrounding mobile navigation is closed.
menuPanel.addEventListener('hide.bs.collapse',()=>{
 document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(button=>{
  bootstrap.Dropdown.getInstance(button)?.hide();
 });
});
