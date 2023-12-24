function Scroll(sectionId) {
    var section = document.getElementById(sectionId);
    if (section){      
      window.scrollTo({
        top: (section.offsetTop - 100),
        behavior: 'smooth'
      });
    }
}

document.getElementById('Tema').addEventListener('click', Theme)
let ThemeState = true
function Theme() {
  if(ThemeState){
    document.documentElement.style.setProperty('--cor-Pallet1', '#282828');
    document.documentElement.style.setProperty('--cor-Pallet2', '#191919');
    document.documentElement.style.setProperty('--cor-Pallet3', '#ffffff');
  }else{
    document.documentElement.style.setProperty('--cor-Pallet1', '#ffffff');
    document.documentElement.style.setProperty('--cor-Pallet2', '#72A0C1');
    document.documentElement.style.setProperty('--cor-Pallet3', '#000000');
  }
  ThemeState = !ThemeState
}

function expandirOuRecolherSidebar() {
  var sidebar = document.getElementById("sidebar");
  var larguraAtual = sidebar.offsetWidth;
  var novaLargura = larguraAtual === 60 ? 200 : 60;

  sidebar.style.width = novaLargura + "px";
}