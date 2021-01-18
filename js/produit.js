
// recup numero cde avec suite url //
function getId(){
    const param = window.location.search;
    
    console.log(param);  

    const id = param.replace("?id=",""); 
    return id; 

}

const id = getId();

// recup infos server
get("https://oc-devweb-p5-api.herokuapp.com/api/furniture/" + id)
.then(function(response) {     
    
    ///// Declarations
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

    const varnish = document.createElement("select");
    

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
        price.innerHTML = response.price/100 + " .00 €";
        price.setAttribute("class", "h4");
    
 
        //affectation div pour affichage
    function Produit(response){
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

    Produit();
    // verification response
    console.table(response);

    // ajout du produit au panier
    let panier = JSON.parse(localStorage.getItem("panier"));
        if (panier === null){
            // categorisation du panier array
        panier = [];
        }; 
        //panier = [];
       class newProduit{
            constructor (panier){
                this.panier = panier;
                //panier = new panier;
            }
        };

        //panier = [];
        console.log(panier);
    
    btnAjoutPanier.addEventListener ("click", function() {
        const varnish = document.getElementsByTagName("select");
        const varnishSelected = varnish[0].value;
    
        alert("Pour visualiser votre panier, utilisez le menu en haut à droite");

    // ajout produit avec finition au localStorage 
        
        ajoutLocal(varnishSelected); 

       
        // envoi au local storage
        function ajoutLocal(varnishSelected){

            panier.push([id, response.name, response.imageUrl, response.description, varnishSelected, response.price]);
            localStorage.setItem("panier", JSON.stringify(panier));
            alert("envoi local");
       
         //  verification panier   
            console.table(panier);
        };
        


        //function ajoutSelection(varnishSelected) {
            //let panier = JSON.parse(localStorage.getItem("panier"));
            if (panier === null){
            panier = [];
            };
            
          //  console.log(varnishSelected); 

        //}  
        
    });

    
});


    

// crea btn ajout panier //
const btnAjoutPanier = document.createElement("button");
btnAjoutPanier.innerHTML = "Ajouter au panier";
btnAjoutPanier.setAttribute("class", "btn btn-info text-center");







