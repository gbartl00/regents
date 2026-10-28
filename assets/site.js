const members = [["baetz", "Mr. Cary Baetz", "Position 1: Vice Chair, At-Large Appointment", "May 12, 2022 to April 4, 2030"], ["taylor", "Mr. Billy G. Taylor", "Position 2: Second Congressional District", "May 19, 2021 to May 25, 2023<br>May 26, 2023 to Apr 4, 2031"], ["callahan", "Ms. Jennifer Callahan", "Position 3: At-Large Appointment", "July 15, 2024 to April 4, 2032"], ["poole", "Mr. Tracy Poole", "Position 4: First Congressional District", "May 27, 2025 to April 4, 2033"], ["franklin", "Mr. Chris Franklin", "Position 5: Fifth Congressional District", "May 29, 2024 to Apr 4, 2026"], ["hall", "Mr. Joe D. Hall", "Position 6: At-Large Appointment", "Apr 16, 2003 to Apr 4, 2011<br>Apr 5, 2011 to Apr 4, 2019<br>Apr 5, 2019 to Apr 4, 2027"], ["harrel", "Mr. Jimmy Harrel", "Position 7: Third Congressional District", "May 6, 2020 to Apr 4, 2028"], ["walker", "Mr. Rick Walker", "Position 8: Chair, Fourth Congressional District", "May 19, 2021 to Apr 4, 2029"], ["arthur", "Mrs. Blayne Arthur", "Position 9: President of the State Board of Agriculture", "Jan 14, 2019 - Coterminous with the Governor"]];
const params = new URLSearchParams(location.search);
if (document.querySelector('#member-name')) {
  const member = members.find(m => m[0] === params.get('id')) || members[8];
  document.querySelector('#member-name').textContent = member[1];
  document.querySelector('#member-position').textContent = member[2].replace(/^Position \d: /, '');
  document.querySelector('#member-term').textContent = 'Current term: ' + member[3].split('<br>').at(-1);
  const photo = document.querySelector('#member-photo');
  photo.src = 'assets/images/' + member[0] + '.png'; photo.alt = member[1];
  document.title = member[1] + ' | OSU/A&M Regents';
}
if (document.querySelector('#search-results')) {
  const q = (params.get('q') || '').trim();
  document.querySelector('#search').value = q;
  const pages = [['Home — News and Information', 'index.html', 'meetings news presidential search compliance'], ['Meet the Regents', 'members.html', 'about board members'], ...members.map(m => [m[1], 'member.html?id=' + m[0], m[2]])];
  const results = q ? pages.filter(p => (p[0] + ' ' + p[2]).toLowerCase().includes(q.toLowerCase())) : [];
  document.querySelector('#search-summary').textContent = q ? results.length + ' result(s) for “' + q + '”' : 'Enter a search term above.';
  for (const [title, href] of results) { const li = document.createElement('li'); const a = document.createElement('a'); a.href = href; a.textContent = title; li.append(a); document.querySelector('#search-results').append(li); }
}
