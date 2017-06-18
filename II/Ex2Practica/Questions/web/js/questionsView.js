var controller;

function pageLoad() {
    controller = new QuestionController(this);
    addListener();
}

function addListener() {
    let search = document.getElementById('searchTopic');
    search.addEventListener('click', controller.search);
}

document.addEventListener("DOMContentLoaded", pageLoad);