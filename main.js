function showSection(sectionId, tabElement) {
    var sections = document.querySelectorAll(".section-panel");
    var tabs = document.querySelectorAll(".box-tab");

    sections.forEach(function (section) {
        if (section.id === sectionId) {
            section.classList.remove("is-hidden");
            section.classList.add("is-visible");
        } else {
            section.classList.remove("is-visible");
            section.classList.add("is-hidden");
        }
    });

    tabs.forEach(function (tab) {
        tab.classList.toggle("active-tab", tab === tabElement);
    });

    var targetSection = document.getElementById(sectionId);

    if (targetSection) {
        requestAnimationFrame(function () {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var defaultTab = document.querySelector(".box-tab");
    var defaultSection = document.getElementById("myDIV1");

    if (defaultTab) {
        defaultTab.classList.add("active-tab");
    }

    if (defaultSection) {
        defaultSection.classList.remove("is-hidden");
        defaultSection.classList.add("is-visible");
    }
});