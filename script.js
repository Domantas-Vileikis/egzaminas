
document.getElementById('mobile-menu-trigger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
});

let tabNavigationBlocks = document.querySelectorAll('.tab-section nav ul li');
let tabContentBlocks = document.querySelectorAll('.tab-section .tab-content');

function removeActiveNavigation() {
  for (let tab of tabNavigationBlocks) {
    tab.classList.remove('active');
  }
}

function removeActiveTabs() {
  for (let tab of tabContentBlocks) {
    tab.classList.remove('active');
  }
}

for (let tab of tabNavigationBlocks) {
  tab.addEventListener('click', function() {
    removeActiveNavigation();
    removeActiveTabs();

    this.classList.add('active');

    let index = this.dataset.slide;

    document.querySelector('.tab-section .tab-content[data-slide="'+index+'"]').classList.add('active');
    
  })
}


const swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    autoHeight: true,

    breakpoints: {
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        }
      },


    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });