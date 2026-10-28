(async()=>{
 await document.fonts.ready;
 if (new URLSearchParams(location.search).has('menu')) {
  document.querySelector('.navbar-toggler').click();
  await new Promise(resolve=>document.querySelector('#main-nav').addEventListener('shown.bs.collapse',resolve,{once:true}));
 }
 const dropdown=new URLSearchParams(location.search).get('dropdown');
 if(['members','staff'].includes(dropdown)) document.querySelector('#'+dropdown+'-toggle').click();
 if (new URLSearchParams(location.search).has('text')) { document.documentElement.style.fontSize='200%'; }
 if (new URLSearchParams(location.search).has('spacing')) {
  const style=document.createElement('style');
  style.textContent='*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}';
  document.head.append(style);
 }
 const result=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}});
 const report={url:location.href,version:result.testEngine.version,viewport:{width:innerWidth,height:innerHeight},violations:result.violations.map(({id,impact,help,nodes})=>({id,impact,help,nodes:nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:result.incomplete.map(({id,nodes})=>({id,targets:nodes.map(n=>n.target)})),passes:result.passes.map(r=>r.id),overflow:document.documentElement.scrollWidth>innerWidth,headingCount:document.querySelectorAll('h1').length,imagesWithoutAlt:[...document.images].filter(i=>!i.hasAttribute('alt')).length};
 const output=document.createElement('script');output.type='application/json';output.id='axe-report';output.textContent=JSON.stringify(report);document.body.append(output);
})();
