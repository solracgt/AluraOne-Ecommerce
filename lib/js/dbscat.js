async function leerCat() {
	const dataCat = await fetch("http://localhost/ecommerce/dbs/cat.json");	
	const jsonCat = await dataCat.json();

	jsonCat.catalogo.forEach((elemento) => {
		let madre = "#" + elemento.familia;
		let padre = Object.values(elemento.articulo);

		let div1 = document.createElement("div");
		div1.className = "lst_art";
		div1.id = "lst_art";
		let lis_fam = document.querySelector(madre);
		lis_fam.appendChild(div1);

		for(i = 0; i < 5; i++) {
			let div2 = document.createElement("div");
			div2.className = "card_art";
			div2.id = "card_art";
			div1.appendChild(div2);
			let div3 = document.createElement("div");
			div3.className = "card_item" ;
			div3.id = padre[i].codigo;
			let hijos = "" ;
			let imagen = "<img class='card_img' ";
			imagen = imagen + "src='./lib/cat/" + padre[i].imagen + ".jpg' ";
			imagen = imagen + "alt= '" + padre[i].imagen + "'> "
			hijos = hijos = "<a class='card_lnk' href = './lib/pag/verart.html?fam="
			hijos = hijos + elemento.familia + "&" + "art=" + padre[i].codigo + "'> "
			hijos = hijos + imagen ;
			hijos = hijos + "</a>" + " "
			hijos = hijos + "<h2>"  + padre[i].nombre + "</h2>" + " " ;
			hijos = hijos + "<p class='iDescri'>" + padre[i].descri + "</p>" + " " ;
			hijos = hijos + "<p class='iPrecio'>" + padre[i].precio + "</p>" + " " ;
			hijos = hijos + "<p class='iCodigo'>" + "Cod.: " + padre[i].codigo + "</p>";			
			div3.innerHTML = hijos ;
			div2.appendChild(div3) ;
		}
	})
}

leerCat();
