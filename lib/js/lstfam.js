const Url = new URL(window.location);
const Fam = Url.searchParams.get('fam');
document.getElementById("titLstFam").innerHTML = Fam;

// -------------------------------------------------------
// Obtener nombre de la familia del archivo fam.json
// -------------------------------------------------------
fetch("http://localhost/ecommerce/dbs/fam.json")
   .then(respuesta => {return respuesta.json()})
   .then(data => {
      var familia = data.familia;
      for (var i = 0; i < familia.length; i++) {
         if(familia[i].famcod === Fam) {
            var txt01 = familia[i].famnom
            document.getElementById("titLstFam").innerHTML = `<h1>${txt01}</h1>`
         }   
      }
   })

// -------------------------------------------------------
// Obtener articulos de la familia del archivo cat.json
// -------------------------------------------------------
fetch("http://localhost/ecommerce/dbs/cat.json")
   .then(respuesta => {return respuesta.json()})
   .then(data => {
      var familia = data.catalogo;
      for (var i = 0; i < familia.length; i++) {
         if(familia[i].familia === Fam) {
            var articulo = familia[i].articulo
            let lst_fam = document.querySelector("#lstfam");
            for(var j = 0; j < articulo.length; j++) {
               let div1 = document.createElement("div");
               div1.className = "card_art";
               div1.id = articulo[j].codigo;
               let hijos = "" ;
               let imagen = "<img class='card_img' ";
               imagen = imagen + "src='../cat/" + articulo[j].imagen + ".jpg' ";
               imagen = imagen + "alt= '" + articulo[j].imagen + "'> "
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
   })
 