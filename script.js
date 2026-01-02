const bgColors = [ 

  "#D3E1F4", // UI/UX 

  "#EEC1C1", // Film production 

  "#938F66", // Photography direction 

  "#CAEBED", // Video direction 

  "#EAD8C6", // Art assistance 

  "#C2E6C6", // Fine Art photography 

  "#E8D5E1"  // Video Editing 

]; 

 

const slider = document.getElementById("title-slider"); 

const box = document.getElementById("title-box"); 

 

const normalHeight = 200; 

const reducedHeight = 139; 

 

const itemHeight = normalHeight; 

const holdTime = 1000;       // pausa de 2s na subida 

const moveTime = 190;        // subida normal 

const fastMoveTime = 100;    // descida rápida 

const bounceOffset = 5; 

const bounceUpTime = 100; 

const bounceDownTime = 100; 

 

let index = 0; 

let direction = 1; 

 

function updateBackground(i) { 

  box.style.backgroundColor = bgColors[i % bgColors.length]; 

} 

 

function bounceEffect() { 

  slider.style.transition = `transform ${bounceUpTime}ms ease-out`; 

  slider.style.transform = `translateY(-${itemHeight * index + bounceOffset}px)`; 

 

  setTimeout(() => { 

    slider.style.transition = `transform ${bounceDownTime}ms ease-in`; 

    slider.style.transform = `translateY(-${itemHeight * index}px)`; 

  }, bounceUpTime); 

} 

 

function animateTitle() { 

  index += direction; 

 

  const speed = direction === 1 ? moveTime : fastMoveTime; 

  slider.style.transition = `transform ${speed}ms ease-in-out`; 

  slider.style.transform = `translateY(-${itemHeight * index}px)`; 

  updateBackground(index); 

 

  // Último item (Video Editing) subindo 

  if (index === slider.children.length - 1 && direction === 1) { 

    box.classList.remove("expand"); 

    box.classList.add("shrink"); 

    box.style.height = `${reducedHeight}px`; 

 

    setTimeout(() => { 

      bounceEffect(); 

      setTimeout(() => { 

        direction = -1; 

        box.classList.remove("shrink"); 

        box.classList.add("expand"); 

        box.style.height = `${normalHeight}px`; 

        animateTitle(); 

      }, holdTime); 

    }, moveTime); 

    return; 

  } 

 

  // Primeiro item (UI/UX) descendo 

  if (index === 0 && direction === -1) { 

    setTimeout(() => { 

      bounceEffect(); 

      setTimeout(() => { 

        direction = 1; 

        animateTitle(); 

      }, holdTime); 

    }, fastMoveTime); 

    return; 

  } 

 

  if (direction === 1) { 

    setTimeout(() => { 

      bounceEffect(); 

      setTimeout(animateTitle, holdTime); 

    }, moveTime); 

  } else { 

    setTimeout(animateTitle, fastMoveTime); 

  } 

} 

 

// inicial 

updateBackground(index); 

box.style.height = `${normalHeight}px`; 

 

setTimeout(() => { 

  animateTitle(); 

}, holdTime); 




// substitua os observers antigos por este bloco
function observeOnce(selector, options = { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }) {
  const el = document.querySelector(selector);
  if (!el) return;

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');

        const childSelectors = [
          '.logo-title',
          '.light-title', '.light-description',
          '.sea-title', '.sea-description',
          '.time-title', '.time-description',
          '.logo-description', '.logo-video .video-box', '.logo-fineart .logo-image',
          '.project-doa .image-box', '.project-doa .video-box',
          '.project-ArtOrbit .image-box', '.project-ArtOrbit .video-box',
          '.project-pawme .image-box', '.project-pawme .video-box'
        ];

        childSelectors.forEach(sel => {
          const child = entry.target.querySelector(sel);
          if (child) child.classList.add('animate');
        });

        if (selector === '.logo-uiux') {
          const uiuxTitle = document.querySelector('.logo-uiux .logo-title');
          if (uiuxTitle) uiuxTitle.classList.add('animate');
        }
        if (selector === '.logo-audiovisual') {
          const avTitle = document.querySelector('.logo-audiovisual .logo-title');
          if (avTitle) avTitle.classList.add('animate');
        }

        observer.unobserve(entry.target);
      }
    });
  }, options);

  obs.observe(el);
}

document.addEventListener('DOMContentLoaded', () => {
  observeOnce('.logo-uiux', { threshold: 0.12, rootMargin: '0px 0px -15% 0px' });
  observeOnce('.project-doa');
  observeOnce('.project-ArtOrbit');
  observeOnce('.project-pawme');
  observeOnce('.logo-audiovisual');
  observeOnce('.logo-description');
  observeOnce('.logo-video');
  observeOnce('.logo-fineart');
  observeOnce('.light-container');
  observeOnce('.sea-container');
  observeOnce('.time-container');
});









































































































