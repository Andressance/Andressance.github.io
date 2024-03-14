const cards = document.querySelectorAll('.card');
    const extraContent = document.querySelector('.extra-content');
    const defaultText = extraContent.innerHTML;
    
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const info = card.querySelector('.extra-info');
        const activeInfo = document.querySelector('.extra-info.active');
        const activeCard = document.querySelector('.card.active');
      
        if (info.classList.contains('active')) {
          info.classList.remove('active');
          card.classList.remove('active');
          extraContent.classList.remove('active');
          extraContent.style.opacity = '0';
          setTimeout(() => {
            extraContent.innerHTML = defaultText;
          }, 300); // tiempo de la animación
        } else {
          if (activeInfo) {
            activeInfo.classList.remove('active');
            activeCard.classList.remove('active');
          }
          info.classList.add('active');
          card.classList.add('active');
          extraContent.style.opacity = '0';
          setTimeout(() => {
            extraContent.innerHTML = info.querySelector('p').textContent;
            extraContent.classList.add('active');
            extraContent.style.opacity = '1';
          }, 300); // tiempo de la animación
        }
      });
    });
