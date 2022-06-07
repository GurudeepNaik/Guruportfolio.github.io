$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    
});
const hamburger = document.querySelector(".hamburger");
    const navMenu =  document.querySelector(".menu");

    hamburger.addEventListener("click",() => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
    document.querySelectorAll(".menu-btn").forEach(n => n.
        addEventListener("click",() => {
              hamburger.classList.remove("active");
              navMenu.classList.remove("active");
            })
        
    );