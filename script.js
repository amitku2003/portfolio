const home = () => {
    document.getElementById('home-page').classList="home";
    document.getElementById('about-page').classList="about hidden";
    document.getElementById('skills-page').classList="skills hidden";
    document.getElementById('projects-page').classList="projects hidden";
    document.getElementById('contact-page').classList="contact hidden";
    document.getElementById('nav-home').classList="nav active-nav";
    document.getElementById('nav-about').classList="nav";
    document.getElementById('nav-skills').classList="nav";
    document.getElementById('nav-project').classList="nav";
    document.getElementById('nav-contact').classList="nav";
}
const about = () => {
    document.getElementById('home-page').classList="home hidden";
    document.getElementById('about-page').classList="about";
    document.getElementById('skills-page').classList="skills hidden";
    document.getElementById('projects-page').classList="projects hidden";
    document.getElementById('contact-page').classList="contact hidden";
    document.getElementById('nav-home').classList="nav";
    document.getElementById('nav-about').classList="nav active-nav";
    document.getElementById('nav-skills').classList="nav";
    document.getElementById('nav-project').classList="nav";
    document.getElementById('nav-contact').classList="nav";
}
const skills = () => {
    document.getElementById('home-page').classList="home hidden";
    document.getElementById('about-page').classList="about hidden";
    document.getElementById('skills-page').classList="skills";
    document.getElementById('projects-page').classList="projects hidden";
    document.getElementById('contact-page').classList="contact hidden";
    document.getElementById('nav-home').classList="nav";
    document.getElementById('nav-about').classList="nav";
    document.getElementById('nav-skills').classList="nav active-nav";
    document.getElementById('nav-project').classList="nav";
    document.getElementById('nav-contact').classList="nav";
}
const projects = () => {
    document.getElementById('home-page').classList="home hidden";
    document.getElementById('about-page').classList="about hidden";
    document.getElementById('skills-page').classList="skills hidden";
    document.getElementById('projects-page').classList="projects";
    document.getElementById('contact-page').classList="contact hidden";
    document.getElementById('nav-home').classList="nav";
    document.getElementById('nav-about').classList="nav";
    document.getElementById('nav-skills').classList="nav";
    document.getElementById('nav-project').classList="nav active-nav";
    document.getElementById('nav-contact').classList="nav";
}
const contact = () => {
    document.getElementById('home-page').classList="home hidden";
    document.getElementById('about-page').classList="about hidden";
    document.getElementById('skills-page').classList="skills hidden";
    document.getElementById('projects-page').classList="projects hidden";
    document.getElementById('contact-page').classList="contact";
    document.getElementById('nav-home').classList="nav";
    document.getElementById('nav-about').classList="nav";
    document.getElementById('nav-skills').classList="nav";
    document.getElementById('nav-project').classList="nav";
    document.getElementById('nav-contact').classList="nav active-nav";
}

const dark = () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById('sun').classList.toggle("hidden");
    document.getElementById('moon').classList.toggle("hidden");
}