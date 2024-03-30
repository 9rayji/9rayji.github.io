// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Fix the header at the top when scrolling
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// Navbar

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.style.display = 'flex';
  hamburger.style.display = 'none';
  close.style.display = 'flex';
});

close.addEventListener('click', function() {
  menu.style.display = 'none';
  hamburger.style.display = 'flex';
  close.style.display = 'none';
});


// Radio

document.addEventListener('DOMContentLoaded', function () {
  const levelRadioButtons = document.querySelectorAll('input[type="radio"][name="level"]');
  const subjects = document.querySelectorAll('.subject');

  levelRadioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
      const selectedLevel = this.value;

      subjects.forEach(function (subject) {
        const subjectLevel = subject.getAttribute('data-level');

        if (selectedLevel === 'all' || subjectLevel === selectedLevel) {
          subject.classList.add('active');
        } else {
          subject.classList.remove('active');
        }
      });
    });
  });

  // Trigger the change event on the default "All Levels" radio button
  const defaultRadioButton = document.querySelector('input[type="radio"][name="level"][value="all"]');
  defaultRadioButton.checked = true;
  defaultRadioButton.dispatchEvent(new Event('change'));
});

// JavaScript for Accordion
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
});
