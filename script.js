function toggleMenu() {
    //targets elements on our webpage to use
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //adds a classList to menu using JS toggle function
    menu.classList.toggle("open");  
    icon.classList.toggle("open");  
}