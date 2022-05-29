const fadeNavLinksAnimation = function(){
    const navbarLinks = document.querySelectorAll(".navLinks ul li a")
    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener("mouseover", function(){
            navbarLinks[i].classList.add('add-opacity')
            navbarLinks.forEach((element) =>{
                if (!element.classList.contains("add-opacity")){
                    element.style.opacity ="0.2"
                    
                }
            }) 
        })
    
        navbarLinks[i].addEventListener("mouseleave", function(){
            navbarLinks[i].classList.remove('add-opacity')
            navbarLinks.forEach((element) =>{
            element.style.opacity = "" 
            })          
        })
        
    }
}()

const switchLogo = function (){
    const logoText =  document.querySelector(".logo h3")
    const logoImg =  document.querySelector(".logo .logo-img")
    window.addEventListener('scroll', function(){
        const scrolled = this.window.scrollY
        if (scrolled > 120) {
            logoText.style.display = "none"
            logoImg.style.display = "block"
        }else{
            logoText.style.display = ""
            logoImg.style.display = ""
        }
    })
}()

const navBar = function () {
    const burger = document.querySelector(".burger")
    const navbar = document.querySelector(".navLinks")
    const body = document.querySelector("body")
    const navlinks = document.querySelectorAll(".navLinks a")

    burger.addEventListener("click", function (){
        navbar.classList.toggle("nav-active")
        body.classList.toggle("overflow")
        burger.classList.toggle("toggle")

        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
    })
}()
























//   navbarLinks.addEventListener("mouseenter", function( event ) {
//     // highlight the mouseenter target
//     event.target.style.opacity = "0.6";
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.opacity = "";
//     }, 500);
//   }, false);

//   navbarLinks.addEventListener("mouseover", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "pink";
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 500);
//   }, false);