function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
        for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
        }
}
  
window.addEventListener("scroll", reveal);

window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('nav');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
});