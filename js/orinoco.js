

// ---------------- Init infos pdts recup server + affichage ds html ------------


function ajoutProduit(responseProduit, section) { // création et formattage des cards à afficher dans le DOM

    const div = document.createElement("div");
    div.innerHTML = responseProduit.name;
    div.setAttribute("class", "card-title ");
        
    const img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", responseProduit.imageUrl);
    img.setAttribute("width", "30%");

    const figCaption = document.createElement("div");
    figCaption.innerHTML = responseProduit.description;
    div.setAttribute("class", "card-body bg-light font-weight-bold");

    const varnish = document.createElement("p");
    varnish.innerHTML = "Choix finition :" + responseProduit.varnish;
    varnish.setAttribute("class", "class-text font-weight-bold");


    const price = document.createElement("p");
    price.innerHTML = responseProduit.price/100 + " .00 €";
    price.setAttribute("class", "card-text");
    //price.setAttribute("")

    const link = document.createElement("a");
    link.setAttribute("href", "produit.html?id=" + responseProduit._id);

   // organisation des éléments cards 
   div.appendChild(link);        
   link.appendChild(img);   
   div.appendChild(figCaption);
   div.appendChild(varnish);
   div.appendChild(price);   
   section.appendChild(div);  
};

    // Url pour API distante = https://api-oc5.herokuapp.com/api/furniture

    // Url pour API locale = http://localhost:3000/api/furniture


// ------- Appel GET depuis fctGP.js ------
get("https://api-oc5.herokuapp.com/api/furniture")
.then (function (responseProduit){

    const section = document.getElementById("containerArticles"); 
    section.setAttribute("class", "card bg-transparent") // formattage affichage
    section.setAttribute("width", "40%");

    for (let i = 0; i < responseProduit.length; i++ ) {  // boucle pour afficher autant de produits que nécessaire

        ajoutProduit(responseProduit[i], section); // appel fonction pour affichage de chacun des produits dans le DOM
    }
    
    console.table(responseProduit);  // vérification table produit
    
});