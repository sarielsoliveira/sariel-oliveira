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















document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".logo-uiux");
  const title = document.querySelector(".logo-title");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          container.classList.add("animate"); 
          title.classList.add("animate");     // título com delay
          observer.unobserve(container);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(container);
});










document.addEventListener("DOMContentLoaded", () => {
  const doa = document.querySelector(".project-doa");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        doa.classList.add("animate");
        observer.unobserve(doa); // só revela uma vez
      }
    });
  }, { threshold: 0.3 }); // dispara quando ~30% visível

  observer.observe(doa);
});













document.addEventListener("DOMContentLoaded", () => {
  const artOrbit = document.querySelector(".project-ArtOrbit");

  if (!artOrbit) return; // segurança: só roda se o elemento existir

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        artOrbit.classList.add("animate");
        observer.unobserve(artOrbit); // só revela uma vez
      }
    });
  }, { threshold: 0.3 }); // dispara quando ~30% visível

  observer.observe(artOrbit);
});














document.addEventListener("DOMContentLoaded", () => {
  const pawme = document.querySelector(".project-pawme");
  if (!pawme) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pawme.classList.add("animate");
        observer.unobserve(pawme);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(pawme);
});







document.addEventListener("DOMContentLoaded", () => {
  const audiovisual = document.querySelector(".logo-audiovisual");
  const title = audiovisual.querySelector(".logo-title");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        audiovisual.classList.add("animate");
        title.classList.add("animate");
        observer.unobserve(audiovisual);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(audiovisual);
});



document.addEventListener("DOMContentLoaded", () => {
  const description = document.querySelector(".logo-description");
  if (!description) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        description.classList.add("animate");
        observer.unobserve(description);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(description);
});




document.addEventListener("DOMContentLoaded", () => {
  const logoVideo = document.querySelector(".logo-video");
  if (!logoVideo) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        logoVideo.classList.add("animate");
        observer.unobserve(logoVideo);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(logoVideo);
});













document.addEventListener("DOMContentLoaded", () => {
  const fineartLogo = document.querySelector(".logo-fineart");
  if (!fineartLogo) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fineartLogo.classList.add("animate");
        observer.unobserve(fineartLogo);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(fineartLogo);
});










document.addEventListener("DOMContentLoaded", () => {
  const lightContainer = document.querySelector(".light-container");
  const title = lightContainer.querySelector(".light-title");
  const description = lightContainer.querySelector(".light-description");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lightContainer.classList.add("animate");
        title.classList.add("animate");
        description.classList.add("animate");
        observer.unobserve(lightContainer);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(lightContainer);
});












document.addEventListener("DOMContentLoaded", () => {
  const seaContainer = document.querySelector(".sea-container");
  const title = seaContainer.querySelector(".sea-title");
  const description = seaContainer.querySelector(".sea-description");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        seaContainer.classList.add("animate");
        title.classList.add("animate");
        description.classList.add("animate");
        observer.unobserve(seaContainer);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(seaContainer);
});




















document.addEventListener("DOMContentLoaded", () => {
  const timeContainer = document.querySelector(".time-container");
  const title = timeContainer.querySelector(".time-title");
  const description = timeContainer.querySelector(".time-description");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeContainer.classList.add("animate");
        title.classList.add("animate");
        description.classList.add("animate");
        observer.unobserve(timeContainer);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(timeContainer);
});
