function toggleDarkMode() {
    const body = document.body;
    const logo = document.querySelector('.logo iframe');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        logo.src = "https://giphy.com/embed/kOvPo6vScx3cM1xu81";
    } else {
        logo.src = "https://giphy.com/embed/9J3zCEDkHaifAOgJlO";
    }
}
