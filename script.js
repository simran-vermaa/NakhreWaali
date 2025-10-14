document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let intersectingSections = new Map(); 

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -30% 0px', 
        threshold: 0.0 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');

            if (entry.isIntersecting) {
               
                intersectingSections.set(id, entry.intersectionRatio);
            } else {
                
                intersectingSections.delete(id);
            }
        });

        

       
        let activeId = null;
        for (const section of sections) {
            if (intersectingSections.has(section.id)) {
                activeId = section.id;
                break; 
            }
        }
        
        navLinks.forEach(link => {
            const linkId = link.getAttribute('href').substring(1); 
            
            if (linkId === activeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
grabCursor:true,
spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 3
    },
    1024: {
        slidesPerView: 4
    }
  }
});

function showSide(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSide(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}