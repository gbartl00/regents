# Regents website

Bootstrap 5.3.3 recreation of the supplied three-page PDF, with a responsive homepage, member directory, member profiles, local search, and meeting details.

Run `npm start` (or `node server.cjs`) and open http://localhost:3000.

All Bootstrap files, fonts, photos, and logos are stored locally. No install step is needed.

The design reference supplies the member details and 2026 meeting dates. Those details are reproduced as supplied and are not verified as current. Missing minutes, policy documents, staff details, article details, and the Ethics Point destination are clearly marked in the preview. No forms send data and no backend is connected.


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
