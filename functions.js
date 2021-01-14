function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    hide('home');
    hide("skills");
    hide("languages");
    hide("projects");
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