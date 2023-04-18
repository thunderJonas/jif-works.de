


const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");


// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
    // if the nav is closed, open it:
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false"){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        console.log("truuuuuu");
    }else {   // if the nav is open, close it:
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        console.log("faaaaaaaaaaaaaaaaaaaltch");
    }

});


/*window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
});*/





