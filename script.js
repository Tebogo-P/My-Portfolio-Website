function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

document.addEventListener('click', function(event) {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menuLinks = document.querySelector('.menu-links');
  
  if (hamburgerMenu && menuLinks.classList.contains('open')) {
    if (!hamburgerMenu.contains(event.target)) {
      toggleMenu();
    }
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow on scroll
  if (currentScroll > 50) {
    nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
  
  lastScroll = currentScroll;
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in-up');
  
  fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
  });
});

function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  let current = '';
  const navHeight = document.querySelector('nav').offsetHeight;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop && 
        window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.style.color = '';
    const href = link.getAttribute('href').substring(1);
    if (href === current) {
      link.style.color = 'var(--primary-color)';
    }
  });
}

window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);

function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

document.addEventListener('DOMContentLoaded', function() {
  const skillCategories = document.querySelectorAll('.skill-category');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillItems = entry.target.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }, index * 50);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  skillCategories.forEach(category => {
    const skillItems = category.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    skillObserver.observe(category);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.01)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedHighlight = debounce(highlightActiveSection, 10);
window.removeEventListener('scroll', highlightActiveSection);
window.addEventListener('scroll', debouncedHighlight);

function preloadImages() {
  const images = document.querySelectorAll('img[src]');
  images.forEach(img => {
    const newImg = new Image();
    newImg.src = img.src;
  });
}

window.addEventListener('load', preloadImages);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const menuLinks = document.querySelector('.menu-links');
    if (menuLinks && menuLinks.classList.contains('open')) {
      toggleMenu();
    }
  }
});

console.log('%c👋 Welcome to my portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a developer? Let\'s connect!', 'color: #475569; font-size: 14px;');
console.log('%c📧 230226442@mycput.ac.za', 'color: #64748b; font-size: 12px;');

window.addEventListener('error', function(e) {
  console.error('An error occurred:', e.error);
});

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });
});

const style = document.createElement('style');
style.textContent = `
  body.keyboard-nav *:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;
document.head.appendChild(style);
