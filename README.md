# OSU/A&M Regents

A responsive Bootstrap 5.3.8 implementation of the supplied **Regents Reface+** PDF. Includes the homepage (`index.html`), nine-member directory (`members.html`), member profiles (`member.html?id=arthur`), and local site search (`search.html?q=Arthur`).

## Develop

From `/workspace/regents`:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Edit the HTML files, `assets/site.css`, or `assets/site.js` and refresh. There are no package installations, build steps, credentials, or external runtime requests. Bootstrap and the Oswald / Source Sans 3 fonts are bundled locally with their licenses. Photos and institution logos were extracted from the supplied PDF.

## Validation

Check all three layouts at desktop and mobile widths; check the mobile menu, directory-to-profile links, and search. All images must load and pages must have no horizontal overflow or JavaScript errors.

## Content notes

Meeting dates, member terms, and copy follow the PDF; they are reference content and have not been verified as current. The PDF specifies no destination URLs for Minutes, Policy Manual, Staff, news items, or All Upcoming. These links currently lead to the official Regents homepage and should receive their final URLs before launch. Other member profiles reuse the Board overview because the PDF supplies only one profile layout and no individual biographies. Local search covers the homepage and member directory; it does not index external sites. This is a static site, with no CMS or backend.
