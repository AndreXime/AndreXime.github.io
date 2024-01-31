function Action(sectionId) {
    if(sectionId == 'Abrir')
      window.location.href = 'areas.html';
    if(sectionId == 'Voltar')
      window.location.href = 'index.html';
    
    var section = document.getElementById(sectionId);
    if (section){      
      window.scrollTo({
        top: (section.offsetTop - 18),
        behavior: 'smooth'
      });
    }
}

let ThemeState = true
function Theme() {
  if(!ThemeState){
    document.documentElement.style.setProperty('--cor-Pallet1', '#282828');
    document.documentElement.style.setProperty('--cor-Pallet2', '#191919');
    document.documentElement.style.setProperty('--cor-Pallet3', '#ffffff');
  }else{
    document.documentElement.style.setProperty('--cor-Pallet1', '#ffffff');
    document.documentElement.style.setProperty('--cor-Pallet2', '#191919');
    document.documentElement.style.setProperty('--cor-Pallet3', '#000000');
  }
  ThemeState = !ThemeState
}
