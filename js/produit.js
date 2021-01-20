
// recherche complément Id du produit choisi 
function rechercherId(){
    const param = window.location.search;    
    console.log(param);  
    const id = param.replace("?id=",""); 
    return id; 
}

const id = rechercherId(); // init constante id avec resultat recherche


//https://api-oc5.herokuapp.com/api/furniture/ = URL API en ligne

//http://localhost:3000/api/furniture = URL API locale

// // ------- Appel GET depuis fctGP.js ------
get("https://api-oc5.herokuapp.com/api/furniture/" + id) //affectation Id à l'URL
.then(function(response) {     
    
    ///// Declarations des réponses 
    console.log("---------------------");
    const titre = document.createElement("p"); 
    titre.innerHTML = response.name;
    titre.setAttribute("class","h2 text-center"); 

    const image = document.createElement("img");
    image.innerHTML = response.imageUrl;
    image.setAttribute("src", response.imageUrl);
    image.setAttribute("class","card-img w-100");

    const figCaption = document.createElement("div");
    figCaption.innerHTML = response.description;
    figCaption.setAttribute("class","h6 justify-content-center ");

    const varnish = document.createElement("select");  //liste selection finition   

        const option = document.createElement("option"); 
        option.innerHTML = "N'oubliez pas votre finition préférée";
        option.setAttribute = ("class", "option");
               
        varnish.appendChild(option);

        for (let i = 0; i < response.varnish.length; i++) {
            const option = document.createElement("option");
            
            option.innerHTML = response.varnish[i];        
            varnish.appendChild(option);   
        }
            
    const price = document.createElement("p");
        price.innerHTML = response.price/100 + " .00 €"; // formattage affichage prix
        price.setAttribute("class", "h4");
    
 
        //affectation div pour affichage
    function afficherProduit(response){
        produit = document.getElementById("containerProduit");
        div = document.createElement("div");
        div.setAttribute("class", "produit text-center border 5px solid dark w-75");

        //masque //
        containerProduit.appendChild(div); 
        div.appendChild(titre);
        div.appendChild(image);
        div.appendChild(figCaption);
        div.appendChild(varnish);
        div.appendChild(price);
        div.appendChild(btnAjoutPanier);
    }

        afficherProduit(); 
        console.table(response);    // verification table response

        // ajout du produit au panier
        let panier = JSON.parse(localStorage.getItem("panier"));
            if (panier === null){            
            panier = []; // categorisation du panier array null
            }; 

      // constructeur pour nouveau produit (prise en compte sélection multiple)
       class newProduit{ 
            constructor (panier){
                this.panier = panier;
                //panier = new panier;
            }
        };

    // affectation des du produit sélectionné au panier
    function ajoutLocal(varnishSelected){
        panier.push([id, response.name, response.imageUrl, response.description, varnishSelected, response.price]);

        // sauvegarde du panier dans le localStorage
        localStorage.setItem("panier", JSON.stringify(panier));       
    
        //  verification nouveau panier   
        console.table(panier);
    };

    // Ecoute click selection finition
    btnAjoutPanier.addEventListener ("click", function() {
        const varnish = document.getElementsByTagName("select");
        const varnishSelected = varnish[0].value;    

        // ajout produit avec finition au localStorage         
        ajoutLocal(varnishSelected); 

        // basculement vers le panier après selection
        window.location.href="panier.html";
    });

    
});


// creation btn ajout panier //
const btnAjoutPanier = document.createElement("button");
btnAjoutPanier.innerHTML = "Ajouter au panier";
btnAjoutPanier.setAttribute("class", "btn btn-info text-center");







