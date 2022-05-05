var Fam = "";
var txt01 = "";

/* funcion para probar la conexion
async function nomFam(Fam) {
   const data = await fetch("http://localhost/ecommerce/dbs/cat.json"); 
   const json = await data.json(); // recibe los datos tipo json, ** utilizar esta **
   console.log(json);
};
*/

// -------------------------------------------------------
// Obtener articulos de la familia del archivo cat.json
// -------------------------------------------------------

fetch("http://localhost/ecommerce/dbs/cat.json")
   .then(respuesta => {return respuesta.json()})
   .then(data1 => {
      //selecciono familias
      var fam01 = data1.catalogo;
      //console.log("01 Tomo catalogo familias");
      //console.log(fam01);
      for (var i = 0; i < fam01.length; i++) {
         Fam = fam01[i].familia
         //console.log("02 Tomo codigo de la familia del catalogo");
         //console.log(Fam);

         // Selecciono artìculos
         var articulo = fam01[i].articulo
         //console.log("03 Tomo arreglo de articulos de la familias");
         // console.log(articulo);

         let lst_ofe = document.querySelector("#lst_ofe");

         for(var j = 0; j < articulo.length; j++) {
            if(articulo[j].oferta) {
               //console.log("04 Entre a una oferta", articulo[j].codigo)
// ----------------------------------------------------------------------
               fetch("http://localhost/ecommerce/dbs/fam.json")
                  .then(respuesta => {return respuesta.json()})
                  .then(data2 => {
                     //console.log("05 Entre al segundo fetch")
                     let fam02 = data2.familia;
                     //console.log(fam02);
                     for (let k = 0; k < fam02.length; k++) {
                        if(fam02[k].famcod === Fam) {
                           //console.log(Fam);
                           txt01 = fam02[k].famnom
                           //console.log("06 Tomo nombre de la familia");
                           //console.log(txt01);
                        }
                     }
                  });
// -----------------------------------------------------------------------
                  // console.log("07 Inicio creacion de la card")
                  let div1 = document.createElement("div");
                  let div2 = document.createElement("div");
                  let div3 = document.createElement("div");
                  div1.className = "card_art";
                  div1.id        = "card_art"
                  lst_ofe.appendChild(div1);
                  div2.className = "card_art1";
                  div2.id        = articulo[j].codigo;
                  let hijo1 = "" ;
                  let imagen = "<img class='card_img' ";
                  imagen = imagen + "src='../cat/" + articulo[j].imagen + ".jpg' ";
                  imagen = imagen + "alt= '" + articulo[j].imagen + "'> "
                  hijo1 = hijo1 = "<a class='card_lnk' href = '../pag/verart.html?fam="
                  hijo1 = hijo1 + Fam + "&" + "art=" + articulo[j].codigo + "'> "
                  hijo1 = hijo1 + imagen ;
                  hijo1 = hijo1 + "</a>" + " "
                  div2.innerHTML = hijo1 ;
                  div1.appendChild(div2);
                  div3.className = "card_art2";
                  div3.id        = "card_des2";
                  let hijo2 = "" ;
                  hijo2 = hijo2 + "<h2>"  + articulo[j].nombre + "</h2>" + " " ;
                  hijo2 = hijo2 + "<p class='iDescri'>" + articulo[j].descri + "</p>" + " " ;
                  hijo2 = hijo2 + "<p class='iPrecio'> Precio normal:" + articulo[j].precio + "</p>" + " " ;
                  hijo2 = hijo2 + "<p class='iOferta'> Precio oferta:" + articulo[j].preofe + "</p>" + " " ;
                  hijo2 = hijo2 + "<p class='iCodigo'>" + "Cod.: " + articulo[j].codigo + "</p>";        
                  div3.innerHTML = hijo2 ;
                  div1.appendChild(div3);
            }
         }
      }
   });
