function hide(id) {
    const el = document.getElementById(id)
    el.style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

function hideAllPages() {
    const pages = Array.from(document.querySelectorAll(".page"));
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
    const link = e.target;
    if (link.matches("#top-menu-bar a")) {  
        const id = link.getAttribute("data-id");
        showPage(id);
        }
    });
};

listenMenuClicks();

showPage("skills");

let allSkills = [];

function showSkills(skills) {
    const allSkillsHtml = skills.map(function(skill){
        const cls = skill.favorite ? "favorite-skill" : "";
        return `<li class="${cls}">
            ${skill.name} <span>(${skill.endorsements})</span>
        </li>`
    });
    
    const skillsEl = document.querySelector("#skills ul");
    skillsEl.innerHTML = allSkillsHtml.join("");
}

fetch("skills.json")
    .then(function(r) {
        return r.json();
    })
    .then(function(skills) {
        skills.sort(function(s1, s2) {
            return s2.endorsements - s1.endorsements;
        })
        showSkills(skills);
    });

// showSkills(allSkills);
