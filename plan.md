# Blog Cleanup Plan

## Goal
Stabilize the static blog so it is easier to maintain, renders more reliably on desktop/mobile, and avoids obvious HTML/CSS quality issues.

## Phase 1: Structure And Assets
- Fix broken favicon references.
- Remove empty or useless markup.
- Repair malformed HTML wrappers and broken tags.
- Add small metadata and safer external link attributes.

## Phase 2: Content Cleanup
- Correct obvious text glitches and broken labels.
- Normalize a few mixed-language sections without changing the overall tone of the page.

## Phase 3: Layout Stabilization
- Replace large negative offsets with normal flow spacing where possible.
- Reposition decorative fixed elements so they do not depend on page height.
- Make the main sections stack consistently.

## Phase 4: Responsive Fixes
- Adjust mobile rules that currently break timeline/profile/card layouts.
- Improve widths, spacing, and overflow behavior for narrow screens.

## Phase 5: Light Script Hardening
- Add null-safe guards to existing JS so decorative interactions do not break the page if markup changes.

## Deliverables
- Updated `index.html`
- Updated core CSS for layout and responsiveness
- Small JS hardening pass
