var imágenes = document.getElementsByClassName("animal");
var seleccionar = document.getElementById("select");


seleccionar.onchange = function(){
  if(select.value == "blanco-negro"){
    for( var i=0;i<imágenes.length;i++){
      imágenes[i].classList.add("blanco-negro");
      imágenes[i].classList.remove("original");
      imágenes[i].classList.remove("sepia");
      imágenes[i].classList.remove("colores-invertidos");
    }
  }
  if(select.value == "sepia"){
    for(var j=0;j<imágenes.length;j++){
      imágenes[j].classList.add("sepia");
      imágenes[j].classList.remove("original");
      imágenes[j].classList.remove("blanco-negro");
      imágenes[j].classList.remove("colores-invertidos");
    }
  }


    if(select.value == "original"){
      for(var l=0;l<imágenes.length;l++){
        imágenes[l].classList.add("original");
        imágenes[l].classList.remove("sepia");
        imágenes[l].classList.remove("blanco-negro");
        imágenes[l].classList.remove("colores-invertidos");
      }
    }

      if(select.value == "colores-invertidos"){
        for(var m=0;m<imágenes.length;m++){
          imágenes[m].classList.add("colores-invertidos");
            imágenes[m].classList.remove("sepia");
          imágenes[m].classList.remove("original");
          imágenes[m].classList.remove("blanco-negro");
        }
      }

}
