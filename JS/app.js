const toggle= document.getElementById("toggle");
const navLink= document.getElementById("navLink");
const allNavLink= document.querySelectorAll(".nav-link a");
// toggle for mobile version
toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active");
    navLink.classList.toggle("active");
});

//close click time
allNavLink.forEach((link)=>{
    link.addEventListener("click",()=>{
        
        toggle.classList.remove("active");
        navLink.classList.remove("active");
    });
});
