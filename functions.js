function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {

    var pages = document.querySelectorAll(".page");

    //initial ; condition   ; post execution
    for(var i = 0; i < pages.length; i++) {
        var page = pages[i];
        hide(page.id);
        // hide(pages[i].id);
       // hide(pagesIds[i]);
    }
}

function showHomePage() {
    hideAllPages();
    show('home');
}

function showSkillsPage() {
    hideAllPages();
    show('skills'); 
}

function showLanguagesPage() {
    hideAllPages();
    show('languages');
}

function showProjectsPage() {
    hideAllPages();
    show('projects');
}