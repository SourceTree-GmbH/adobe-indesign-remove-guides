//GLOBALS
var app;

var page, pageIndex, guides, guide, guideIndex;

for (pageIndex = 0; pageIndex < app.activeDocument.pages.length; pageIndex += 1) {
    page = app.activeDocument.pages[pageIndex];

    guides = [];
    for (guideIndex = 0; guideIndex < page.guides.length; guideIndex += 1) {
        guides.push(page.guides[guideIndex]);
    }

    // check why we did that, probably to work on a copy of the indesign object :-)
    for (guideIndex = 0; guideIndex < guides; guideIndex += 1) {
        guide = guides[guideIndex];
        guide.select();
        guide.remove();
    }
}
