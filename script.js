const toggleSwitch = document.querySelector('.toggle-checkbox');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const logo = document.querySelector('.logo iframe');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        // Change logo source
        logo.src = "https://giphy.com/embed/kOvPo6vScx3cM1xu81";
    } else {
        document.body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        // Change logo source back to light mode
        logo.src = "https://giphy.com/embed/9J3zCEDkHaifAOgJlO";
    }
}
