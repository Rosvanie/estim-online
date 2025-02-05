document.addEventListener("DOMContentLoaded", () => {
    const animateNumber = (id, target, suffix = "") => {
      const element = document.getElementById(id);
      let count = 0;
      const increment = Math.ceil(target / 100);
  
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        element.textContent = count + suffix;
      }, 30);
    };
  
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const statsSection = document.querySelector(".stats-section");
    let hasAnimated = false;
  
    window.addEventListener("scroll", () => {
      if (isInViewport(statsSection) && !hasAnimated) {
        animateNumber("graduates-count", 150, "+");
        animateNumber("external-percent", 30, "%");
        animateNumber("recruitment-percent", 70, "%");
        hasAnimated = true;
      }
    });
  });

  





  //faq
    
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      // Ferme les autres
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
        }
      });
  
      // Active l'élément courant
      item.classList.toggle('active');
    });
  });
  