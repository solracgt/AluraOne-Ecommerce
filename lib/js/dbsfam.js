// Investigar async y await

async function leerFam() {
	const dataFam = await fetch("http://localhost/ecommerce/dbs/fam.json");	
	const jsonFam = await dataFam.json(); // recibe los datos tipo json

	var lista = document.querySelector("#lst_fam")
	jsonFam.familia.forEach((elemento) => {
		let div1 = document.createElement("div") ;
		let div2 = document.createElement("div") ;
		let div3 = document.createElement("div") ;
		let div4 = document.createElement("div") ;

		div1.className = "familia" ;
		div1.id = elemento.famcod ;
		div1.innerHTML = "" ;

		div2.className = "fam_enc";
		div2.id = "fam_enc" ;
		div2.innerHTML = "" ;
		div2.innerHTML = "<h1>" + elemento.famnom + "</h1>" ;

		div3.className = "lnk_fam";
		div3.id = "lnk_fam";
		div3.innerHTML = "<a href='./lib/pag/lstfam.html?fam=" + elemento.famcod + "'>Ver todos</a>";

		div4.className = "lst_art";
		div4.id = "lst_art";

		lista.appendChild(div1) ;
		div1.appendChild(div2) ;
		div2.appendChild(div3) ;
		div3.appendChild(div4) ;
	})
}

leerFam();