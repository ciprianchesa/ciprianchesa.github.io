function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    var pages = Array.from(document.querySelectorAll(".page"));
    pages.forEach(function(page) {
        hide(page.id);
    });
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

showPage("skills");

var allSkills = [
    `HTML`,
    `CSS`,
    `JS`
];

//TODO class = "favorite-skill"

var allSkillsHtml = allSkills.map(function(skill) {
    console.info(skill);
    return `<li>${skill}</li>`
});

var skillsEl = document.querySelector("#skills ul");
skillsEl.innerHTML = allSkillsHtml.join("");