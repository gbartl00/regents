# Regents website

Bootstrap 5.3.3 recreation of the supplied three-page PDF, with a responsive homepage, member directory, member profiles, local search, and meeting details.

Run `npm start` (or `node server.cjs`) and open http://localhost:3000.

## Cloudflare deployment

Live site: https://regents-website.greg-0a9.workers.dev

The `regents-website` Worker serves static assets. Deployment settings are in
`cloudflare-deployment.json`. With the Cloudflare `cf` CLI installed and signed in,
run `npm run deploy` from this folder to check, package, and publish the site.
The setup was verified with `cf` 1.0.0-beta.14.

`npm run build:cloudflare` prepares Cloudflare's prebuilt output under
`.cloudflare/output/v0/`. Only the root HTML pages, `app.js`, `styles.css`, and
`assets/` are included. Local servers, audit files, temporary files, and deployment
configuration stay out of the published assets. The prebuilt deployment path
does not require a framework build or Wrangler configuration.

All Bootstrap files, fonts, photos, and logos are stored locally. No install step is needed.

The design reference supplies the member details and 2026 meeting dates. Those details are reproduced as supplied and are not verified as current. Missing minutes, policy documents, staff details, article details, and the Ethics Point destination are clearly marked in the preview. No forms send data and no backend is connected.

Source: C:\Users\gbart\Downloads\Regents Reface+.pdf

## Accessibility review (October 27, 2026)

Target: [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/). This is an implementation review, not a conformance certification or university approval. The university's own publishing policy has not been supplied.

### Changes made

- Replaced the gold focus outline with a black outline and white surrounding ring, visible against light and blue backgrounds. The skip link now stays visible at the top of the viewport when focused and explicitly moves focus to main content.
- Added a visible search-field boundary and a darker search icon. Removed the unannounced required-field constraint; an empty search gives guidance.
- Increased body copy to a scalable 1rem, enlarged small footer copy, and increased footer link heights. Main controls and call-to-action links use at least 44px heights; footer links use at least 28px heights.
- Allowed the masthead and navigation to wrap, moved the mobile-navigation breakpoint to 992px, and made meeting cards stack on narrow screens.
- Matched the mobile menu's accessible name to its visible Menu label. Escape closes the menu and restores focus to its button. Crossing into the collapsed layout also moves focus out of hidden navigation when needed.
- Added a labeled breadcrumb navigation landmark, current-page semantics, sequential meeting heading levels, and complete machine-readable meeting dates.
- Combined each member's photograph and name into one accessible link, removing hidden duplicate links. The name supplies the link's text alternative; the adjacent portrait is redundant and uses empty alt text.
- Gave meeting search results distinct date-based names and search-result pages query-specific titles.
- Added an Accessibility and Help page with navigation instructions and a contact route for barriers and alternative-format requests. It explicitly avoids claiming verified conformance.
- Added Windows forced-colors styles and retained reduced-motion support. These code paths still require testing with actual user settings.

### Verification completed

73 axe-core 4.10.3 scans, using WCAG 2 A/AA, WCAG 2.1 A/AA, WCAG 2.2 AA, and best-practice tags: **zero automated violations**. All scanned pages had one h1, image alt attributes, and no horizontal document overflow.

- 28 page states at 1280px: home, directory, all nine profiles, schedule, all four meeting details, minutes, policy, staff, contact, ethics, accessibility, both news articles, search with a result, search without results, empty search, and the unknown-page fallback.
- The same 28 page states at 320px to check reflow. This tests the effective viewport width used for a 1280px screen at 400% zoom; it does not constitute testing browser zoom itself.
- Eight representative page layouts with WCAG text-spacing overrides at 320px: line height 1.5, paragraph spacing 2em, letter spacing .12em, and word spacing .16em.
- Eight representative page layouts with the root font enlarged to 200% at 1280px. This is a text-resize simulation, not a browser/assistive-technology compatibility test.
- Expanded mobile menu at 320px.
- Keyboard checks: Tab reaches a visible skip link; Enter moves focus to main content; Space expands the mobile menu; Tab enters its links; Escape closes it and returns focus to the menu button.
- Inspected the updated homepage and focus appearance. Computed styles confirm the final dark outline and white ring.

Measured contrast ratios: primary blue/white 11.53:1; body text/white 18.88:1; input border and placeholder/white 6.10:1; search icon/button background 9.39:1; dark focus ring/white 19.03:1. The white part of the focus treatment contrasts with blue at 11.53:1.

Axe left date-badge contrast and one meeting-page link-distinction check for manual review. Date badges use white on primary blue (11.53:1); meeting links have persistent underlines. No rule was disabled to obtain the results. Other applicability and human-judgment checks remain outside automated coverage.

Raw scan output is in `audit/results.json`. The audit library and harness are development-only: `node audit/server.cjs`, then open `http://localhost:3001/?audit=1`. Add `page=members`, `spacing=1`, `text=1`, or `menu=1` as needed. A JSON report appears in the `#axe-report` script element after each scan. The normal server on port 3000 does not serve the audit files or inject audit scripts.

### Before a university conformance sign-off

- Have the university accessibility team test representative complete workflows with NVDA and a supported Windows browser, plus VoiceOver/Safari if required by its testing policy. Screen-reader usability and announcement quality have not been verified here.
- Verify actual browser zoom at 200% and 400%, Windows High Contrast/forced-colors settings, reduced motion, and supported browser/device combinations. Review enlarged-text and spacing layouts visually across the entire site; absence of document overflow alone is not proof of no content loss.
- Review every downloadable policy, agenda, minutes document, and any future media for accessible structure, reading order, links, tables, captions, and alternative formats. No such downloads or media were supplied for this preview.
- Replace preview-only resource notices with approved content and verify the institution's accessibility/contact statement and procedures before publication.
- Re-test after substantive content, stylesheet, navigation, or third-party integration changes. External university sites and future services have not been assessed by this review.

## About Us and Staff dropdown mockups

The dropdown labels and destinations follow the live navigation at https://regents.okstate.edu/ (reviewed October 27, 2026). About Us contains Board Members, Mission Statement, Committees, and Councils. Staff contains Executive/Administrative, Office of Internal Audit, Office of Legal Counsel, and Employment Opportunities. Board Members opens the existing local directory; the other seven items open their verified live pages in the same tab.

The dropdowns use Bootstrap's native-button disclosure behavior with ordinary lists of links, accurate expanded states, linked controls, and no application-menu roles. Enter/Space toggles them; Tab follows the links; Arrow Up/Down moves between entries; Escape closes a submenu and returns focus to its button. On mobile, a second Escape closes the main navigation. Leaving the dropdown by Tab dismisses it. Submenus are reset when the main mobile navigation closes.

The visual treatment uses white panels, blue top borders, underlined links, visible keyboard focus, and 44px minimum link heights. The Staff panel aligns to its trigger's right edge to fit the viewport. Mobile submenus expand in the normal document flow.

Follow-up validation: 14 axe-core scans of collapsed/open states at 1280px and 320px, including both dropdowns with doubled root text and WCAG text spacing, found zero automated violations and zero horizontal document overflows. Keyboard checks verified Enter, Space, Arrow Down, Tab dismissal, and nested Escape/focus behavior. Fixed minimum submenu widths and news-link text wrapping for combined narrow-width/large-text stress. Raw results: `audit/dropdown-results.json`. Screenshot previews: `audit/about-dropdown.jpg` and `audit/staff-dropdown.jpg`.

The earlier 73-scan report remains a historical snapshot of the prior version. These 14 follow-up scans cover the navigation change; full university conformance sign-off still requires the manual checks listed above.

## Static HTML reference for the Squiz build

Open `http://localhost:3000/index-static.html` after running `npm start`. This second homepage includes the complete header, menus, main sections, institution strip, and footer directly in its HTML source. It does not load `app.js`. Source comments label the shared sections and the homepage-specific content so they can be separated into Squiz templates and editable areas.

It shares the existing CSS, fonts, images, and Bootstrap files. The small script at the end of the HTML handles menu accessibility only. Links and search point to `index.html` for the existing prototype's other pages; replace those destinations with Squiz asset URLs during integration.

Static-page checks: four axe scans across 1280px and 320px, with the About Us dropdown closed/open, found zero automated violations and no horizontal document overflow. Verified the nested Escape/focus behavior and that the server response itself contains all page content without a content-rendering script. These targeted checks are not a new full-site conformance review. Results are in `audit/static-results.json`.

## Complete static page set

The three PDF layouts are available as editable HTML references:

- `index-static.html`: homepage.
- `members-static.html`: nine-member directory.
- `member-static.html`: Blayne Arthur's profile, matching the PDF's individual-profile example.

The other eight directory entries also have complete static pages named `member-<member-id>-static.html`. Static home, directory, profile, and breadcrumb links connect this set. Search and the other prototype sections still open `index.html`.

Every static page includes its own header, content, institution strip, footer, and accessibility interaction script. Shared section comments identify the parts to move into Squiz templates. The existing styles, fonts, images, and Bootstrap files are shared; no page loads `app.js` to render content.

Validation of the complete set: 26 axe scans across all 11 pages at 1280px and 320px, plus open About Us dropdown states on directory/profile pages, found no automated violations and no horizontal document overflow. Confirmed directory-to-profile navigation and that every local asset/link target exists. Raw results: `audit/static-suite-results.json`. As with earlier reviews, automated checks do not establish full WCAG conformance.

## Component theme authority (November 9, 2026)

`regents-components.css` is an unchanged copy of the supplied component stylesheet
and is the authority for palette, typography, and component styling. Load it after
Bootstrap and font definitions, and before `styles.css`. The latter supplies only
site-shell, page-specific, and accessibility integration styles. Update the source
theme in `regents-components.css`; do not reintroduce the previous palette or heading
sizes in `styles.css`.

The content landmark is `#main-content`. The homepage uses `banner__*`, `news__*`,
`events__*`, and `features__*` conventions; the member directory uses `cards__*`.
All supplied styles, including unused accordion, tab, gallery, video, dialog, and
drawer styles, are available without adding empty components to the website.
Actual section headings replace the stylesheet's decorative generated labels.

Run `npm run build:static` to regenerate the static reference pages from the same
markup as the interactive site. `npm run deploy` includes this step automatically.
`site-navigation.js` is generated alongside those pages for their menu and skip-link
behavior. The theme retains its supplied Google Fonts imports; existing local font
files are also retained as fallback. The previous implementation is backed up under
`tmp/before-component-theme/`, which is excluded from deployment.
## Interactive component examples

Open `components.html` (or `index.html?page=components`) for working accordion,
modal dialog, and bottom modal drawer examples using the supplied component
class names. `components.js` is the reusable behavior layer; `styles.css` adds
only modal positioning, close controls, and drawer motion to the supplied theme.

For an accordion, wrap heading buttons and their panels in `[data-accordion]`.
Each `.accordion__heading-button` needs `aria-controls` pointing to its panel ID;
its panel needs `aria-labelledby` pointing to the button ID. The script synchronizes
`aria-expanded` and `hidden`. Add `data-start-open` to start a panel expanded.
Answers remain readable if JavaScript is unavailable.

For a dialog or drawer, use a native `<dialog data-component-modal>` with an ID
and `aria-labelledby` referencing its visible title. An opener uses
`data-modal-open="dialog-id"`, `aria-controls="dialog-id"`, `aria-haspopup="dialog"`,
and `aria-expanded="false"`. Close buttons use `data-modal-close`. Keep the modal
inside `#main-content` so the supplied component styles apply. Load `components.js`
with `defer` after the markup or after the script that renders it.

The script contains Tab and Shift+Tab focus cycling, Escape and backdrop dismissal,
background scroll locking, and focus restoration. The drawer slides up from the bottom, uses the viewport width, and scrolls internally on smaller screens. Drawer links are ordinary links.
Reduced-motion preferences disable the slide-in animation. No additional JavaScript
library is needed for these three components. The page retains the existing shared
Bootstrap navigation separately.
## Footer options for review

`footer-options.html` compares three alternatives based on the supplied
`alt options-bottom logo lockup.pdf`: blue frame, light-gray frame, and individual
white logo tiles on gray. Each uses the supplied full-color school marks.
The existing black-logo band remains the default.

Preview alternatives in the full homepage using `index.html?footer=1`,
`index.html?footer=2`, or `index.html?footer=3` (optionally add `#institutions-title`).
The comparison page links to these previews. Options are URL-specific and do not
save or change the selected default. The main page generator shares the same
lockup renderer with the comparison page so the previews stay consistent.