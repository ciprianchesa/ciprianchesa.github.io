function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");

    for(var i = 0; i < pages.length; i++) {
        var page = pages[i];
        hide(page.id);
        // hide(pages[i].id);
    }
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