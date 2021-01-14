function hide(id) {
    var el = document.getElementById(id);
    el.style.display = 'none';
}

function show(id) {
    var el = document.getElementById(id);
    el.style.display = '';
}

function showHomePage() {
    hide("skills");
    hide("languages");
    hide("projects");

    show('home');
}

function showSkillsPage() {
    hide('home');
    hide('languages');
    hide('projects');
    
    show('skills'); 
}

function showLanguagesPage() {
    hide('home');
    hide('skills');
    hide('projects');

    show('languages');
}

function showProjectsPage() {
    hide('home');
    hide('skills');
    hide('languages');

    show('projects');
}