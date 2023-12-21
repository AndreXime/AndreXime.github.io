function Scroll(sectionId) {
    var section = document.getElementById(sectionId);
    if (section){      
      window.scrollTo({
        top: (section.offsetTop - 100),
        behavior: 'smooth'
      });
    }
}