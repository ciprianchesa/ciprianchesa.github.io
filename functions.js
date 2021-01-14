function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    var pagesIds = ["home", "skills", "languages", "projects"];
    console.debug(pagesIds);

    //initial ; condition   ; post execution
    for(var i = 0; i < pagesIds.length; i++) {
        console.info('i = ', i);
        hide(pagesIds[i]);
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