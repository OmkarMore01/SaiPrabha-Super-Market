document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarMenu = document.getElementById('navbarMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
  
    navbarToggler.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');
    });
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        if (target !== 'options') {
          hideSections();
        }
        toggleSections(target);
      });
    });
  
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        toggleSections(target);
      });
    });
  
    function toggleSections(target) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        if (section.id === target) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  
    function hideSections() {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.style.display = 'none';
      });
    }
  });
  