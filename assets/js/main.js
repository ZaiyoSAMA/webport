/**
 * PORTFOLIO WEBSITE - PATTHAMARAT BURANAWIN (ต้า)
 * Main JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Element Selectors ---
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCategoryBlocks = document.querySelectorAll('.skill-category-block');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const resumeModal = document.getElementById('resumeModal');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const contactForm = document.getElementById('contactForm');

  let toastTimer = null;

  // --- 2. Navbar Scroll Styling ---
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
      } else {
        backToTopBtn.style.opacity = '0.7';
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 3. Mobile Hamburger Menu ---
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 4. Smooth Scroll With Navbar Offset & Active Scrollspy ---
  const sections = document.querySelectorAll('section[id]');

  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;
    const navHeight = navbar.offsetHeight;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - navHeight - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // Smooth scroll handler for all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 5. Back to Top Action ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 6. Skills Tab Filter ---
  if (filterBtns.length > 0 && skillCategoryBlocks.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        skillCategoryBlocks.forEach(block => {
          const category = block.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            block.style.display = 'block';
            setTimeout(() => {
              block.style.opacity = '1';
              block.style.transform = 'translateY(0)';
            }, 50);
          } else {
            block.style.opacity = '0';
            block.style.transform = 'translateY(15px)';
            setTimeout(() => {
              block.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // --- 7. Toast Notification Utility ---
  const showToast = (message) => {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // --- 8. Copy to Clipboard Functionality ---
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = button.getAttribute('data-copy');
      const label = button.getAttribute('data-copy-label') || 'ข้อมูล';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for non-https/older browsers
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        showToast(`คัดลอก ${label} สำเร็จ: ${textToCopy}`);
      } catch (err) {
        showToast(`คัดลอก: ${textToCopy}`);
      }
    });
  });

  // --- 9. Resume Preview Modal ---
  const openModalBtns = document.querySelectorAll('[data-modal-target="resumeModal"]');
  const closeModalBtns = document.querySelectorAll('.modal-close-trigger');

  const openResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeResumeModal();
    });
  });

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resumeModal.classList.contains('open')) {
        closeResumeModal();
      }
    });
  }

  // --- 10. Contact Form Interaction ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !message) {
        showToast('กรุณากรอกชื่อและข้อความที่ต้องการติดต่อ');
        return;
      }

      // Simulate sending and trigger mailto option
      showToast(`ขอบคุณครับคุณ ${name}! ระบบกำลังเปิดช่องทางส่งข้อความ`);
      
      const mailtoSubject = encodeURIComponent(`ติดต่อจากเว็บไซต์ Portfolio โดยคุณ ${name}`);
      const mailtoBody = encodeURIComponent(`สวัสดีคุณปัทมราช,\n\n${message}\n\nจาก: ${name} (${email})`);
      
      setTimeout(() => {
        window.location.href = `mailto:patthamarat.ta@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      }, 1000);

      contactForm.reset();
    });
  }

  // --- 11. Intersection Observer for Scroll Animations ---
  const fadeElements = document.querySelectorAll('.fade-in-element');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    fadeElements.forEach(el => el.classList.add('is-visible'));
  }

  // Initialize Lucide icons if available on window
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});
