function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    var pages = Array.from(document.querySelectorAll(".page"));
    var pageIds = pages.map(function(page) {
        return page.id;
    });
    pageIds.forEach(function(pageId) {
        hide(pageId);
    })
}

function showPage(pageId) {
    hideAllPages();
    show(pageId);
}

function listenMenuClicks() {
    document.addEventListener("click", function(e){
    var link = e.target;
    if (link.matches("#top-menu-bar a")) {
        var id = link.innerHTML.toLowerCase();
        showPage(id);
        }
    });
};

listenMenuClicks();