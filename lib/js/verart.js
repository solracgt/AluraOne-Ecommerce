const Url = new URL(window.location);
const Fam = Url.searchParams.get('fam');
const Art = Url.searchParams.get('art');
var txt02 = "";
// -------------------------------------------------------
// Obtener nombre de la familia seleccionada de fam.json
// -------------------------------------------------------

fetch("http://localhost/ecommerce/dbs/fam.json")
   .then(respuesta => {return respuesta.json()})
   .then(data => {
      var familia = data.familia;
      for (var i = 0; i < familia.length; i++) {
         if(familia[i].famcod === Fam) {
            const txt01 = familia[i].famnom;
            document.getElementById("fam_tit").innerHTML = `<h1>${txt01}</h1>`
         }   
      }
   })

// -------------------------------------------------------
// Obtener articulo seleccionado en cat.json
// -------------------------------------------------------
fetch("http://localhost/ecommerce/dbs/cat.json")
   .then(respuesta => {return respuesta.json()})
   .then(data => {
      var familia = data.catalogo;
      for (var i = 0; i < familia.length; i++) {
         if(familia[i].familia === Fam) {
            var articulo = familia[i].articulo
            for(var j = 0; j < articulo.length; j++) {
               if(articulo[j].codigo == Art) {
                  document.getElementById("cnt_tit").innerHTML = articulo[j].nombre

                  let imagen = "<img class='artImg' ";
                  imagen = imagen + "src='../cat/" + articulo[j].imagen + ".jpg' ";
                  imagen = imagen + "alt= '" + articulo[j].imagen + "'> "
                  document.getElementById("cnt_pic").innerHTML = imagen
                  
                  txt02 = txt02 + "<p class='artDes'>" + articulo[j].descri + "</p>" + " " ;
                  txt02 = txt02 + "<p class='artPre'>" + articulo[j].precio + "</p>" + " " ;
                  txt02 = txt02 + "<p class='artCod'>" + "Cod.: " + articulo[j].codigo + "</p>";
                  document.getElementById("cnt_des").innerHTML = txt02;
               }
            }
         }   
      }
   })
 
 // -----------------------------------------------------------------
// Obtener articulos similares de la familia seleccionada de cat.json
// ------------------------------------------------------------------
fetch("http://localhost/ecommerce/dbs/cat.json")
   .then(respuesta => {return respuesta.json()})
   .then(data => {
      var familia = data.catalogo;
      for (var i = 0; i < familia.length; i++) {
         if(familia[i].familia === Fam) {
            // selecciono los articulos de la familia
            var articulo = familia[i].articulo
            let lst_fam = document.querySelector("#hermanos");
            for(var j = 0; j < articulo.length; j++) {
               if(articulo[j].codigo != Art) {
                  let div1 = document.createElement("div");
                  div1.className = "card_art";
                  div1.id = articulo[j].codigo;
                  let imagen = "<img class='card_img' ";
                  imagen = imagen + "src='../cat/" + articulo[j].imagen + ".jpg' ";
                  imagen = imagen + "alt= '" + articulo[j].imagen + "'> "
                  let hijos = "" ;
                  hijos = hijos = "<a class='card_lnk' href = '../pag/verart.html?fam="
                  hijos = hijos + Fam + "&" + "art=" + articulo[j].codigo + "'> "
                  hijos = hijos + imagen ;
                  hijos = hijos + "</a>" + " "
                  hijos = hijos + "<h2>"  + articulo[j].nombre + "</h2>" + " " ;
                  hijos = hijos + "<p class='iDescri'>" + articulo[j].descri + "</p>" + " " ;
                  hijos = hijos + "<p class='iPrecio'>" + articulo[j].precio + "</p>" + " " ;
                  hijos = hijos + "<p class='iCodigo'>" + "Cod.: " + articulo[j].codigo + "</p>";        
                  div1.innerHTML = hijos ;
                  lst_fam.appendChild(div1);
               }
            }
         }   
      }
   })
 