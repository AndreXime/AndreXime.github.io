function Scroll(sectionId) {
    var section = document.getElementById(sectionId);
    if (section){      
      window.scrollTo({
        top: (section.offsetTop - 100),
        behavior: 'smooth'
      });
    }
}

document.getElementById('Dark').addEventListener('click', DarkTheme)
document.getElementById('Light').addEventListener('click', LightTheme)

function DarkTheme() {
  document.documentElement.style.setProperty('--cor-Pallet1', '#282828');
  document.documentElement.style.setProperty('--cor-Pallet2', '#191919');
  document.documentElement.style.setProperty('--cor-Pallet3', '#ffffff');
}
function LightTheme() {
  document.documentElement.style.setProperty('--cor-Pallet1', '#ffffff');
  document.documentElement.style.setProperty('--cor-Pallet2', '#72A0C1');
  document.documentElement.style.setProperty('--cor-Pallet3', '#000000');
}