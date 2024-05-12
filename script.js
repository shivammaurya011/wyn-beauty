function scrollLeft() {
    console.log("Scrolling left");
    const container = document.querySelector('.pro-all');
    container.scrollBy({
      left: -350,
      behavior: 'smooth',
    });
  }

  function scrollRight() {
    console.log("Scrolling right");
    const container = document.querySelector('.pro-all');
    container.scrollBy({
      left: 350, 
      behavior: 'smooth',
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const navDropdown = document.querySelector('nav');
    navDropdown.addEventListener('click', function() {
      this.querySelector('.dropdown-content').classList.toggle('show');
    });
  });

  function toggleMenu() {
    var nav = document.querySelector("nav");
    if (window.innerWidth <= 768) {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    }
}
