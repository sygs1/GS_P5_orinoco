

// Init infos pdts recup server + affichage ds html

function ajoutProduit(responseProduit, section) {

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
    
   div.appendChild(link);        
   link.appendChild(img);   
   div.appendChild(figCaption);
   div.appendChild(varnish);
   div.appendChild(price);

    // masque enfants

    section.appendChild(div);  
   
    
};




console.log("// appel server // ");

get("http://localhost:3000/api/furniture")
.then (function (responseProduit){

    //console.log(responseProduit)

    const section = document.getElementById("containerArticles");
    section.setAttribute("class", "card bg-transparent")
    section.setAttribute("width", "40%");

    console.log(section);

    for (let i = 0; i < responseProduit.length; i++ ) { 
        
        

        ajoutProduit(responseProduit[i], section);

    }
    
    console.table(responseProduit); 

    
});

/////////////////////////////////////////pb affichage ds HTML




// penser carte produits cliquable //

 



////////////////////////////////////// test reup /////////////////////////////////////
