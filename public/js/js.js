// Animation Effect
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

// Active Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
// Tooltip

const content = `'<div class="card card-info"><div class="row"><div class="col py-0 m-0 pe-2"><img src="/public/images/info-1.png" alt="/public/images/info-1.png" class="img-fluid"></div><div class="col py-0 m-0 ps-2"><img src="/public/images/info-2.png" alt="/public/images/info-2.png" class="img-fluid"></div></div><div class="card-body p-0 text-start"><p>Building first data science project can be tricky, we will provide template for you ipsum.</p><a href="#" style=" color:#7443FF">Learn More</a></div></div>'`;
tippy('#rec, #liv, #qa', {
  content: content,
  placement: 'right',
  animation: 'fade',
  allowHTML: true,
  arrow: false,
  theme: 'all-bar',
});

tippy('#big', {
  content: content,
  placement: 'left',
  animation: 'fade',
  allowHTML: true,
  arrow: false,
  theme: 'bar-last',
});
