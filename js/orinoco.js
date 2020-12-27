

//ajoute une div pour inserer blocs //
function ajoutDivBlocs(section){
    const div = document.createElement("div");
    div.setAttribute("class", "blocPhotos");
    section[1].appendChild(div);

    console.log("crea_div_bloc_pdt");
}



get("http://localhost:3000/api/furniture")
.then (function (response){

console.log(response);

const section = document.getElementById("containerArticles");

///boucle incrémentée
    for (let i = 0; i < response.lenght; i = i++ ) {
        ajoutProduit(response[i], section);      

    }
 
});

// Intégration infos articles pdts ds html

function ajoutProduit(responseProduct, section) {
    const div = document.createElement("div");
    div.innerHTML = responseProduct.name;
    div.setAttribute("class", "blocPhotos");
    
    const img = document.createElement("img");
    img.setAttribute("src", responseProduct.imageUrl);
    img.setAttribute("width", "100%");

    const figCaption = document.createElement("div");
    figCaption.innerHTML = responseProduct.description;

    const vernis = document.createElement("p");
    vernis.innerHTML = "Choix finition :" + responseProduct.varnish;

    const prix = document.createElement("p");
    prix.innerHTML = responseProduct.price + "€";

    const link = document.createElement("a");
    link.setAttribute("href", "produit.html?id=" + responseProduct._id);

    section[1].appendChild(div);
    div.appendChild(link);
    link.appendChild(img);
    div.appendChild(figCaption);
    div.appendChild(varnish);
    div.appendChild(price);

    console.log("integration_pdts");
}

// ajout div
function ajoutDiv(section){
    const div = document.createElement("div");
    div.setAttribute("class", "article");
    section[1], appendChild(div);
    
    console.log("ajout_div");

}
