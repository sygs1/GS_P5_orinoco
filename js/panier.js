
// destockage produit selctionné  - fonctionne
panier=[];
panier = JSON.parse(localStorage.getItem("panier"));


//controle si panier vide  - ne fonctionne pas
if (panier === null){
    panier = [];
      console.log("panier vide");
      
};
  
  //---------------- verif nombre de produit dans panier -----------------------------------------
  
console.log("------------------------------------------");
console.log("nombre produit ds panier :" + panier.length);
console.log("------------------------------------------");
console.log("table panier");
console.table(panier);
console.log("------------------------------------------");

  
  //------------------------boucle pour affichage panier dand HTML    -----
for (i = 0; i < (panier.length); i++) {  
  let panierTemp = panier[i];
  ajouterChoixProduit();
  //---------------------------------------------------------
   
  function ajouterChoixProduit (){
    

    divContenu = document.createElement("div");
    divContenu.setAttribute("class", "row w-100");

    divTitre =  document.createElement("div");
    divTitre.setAttribute("class", "divTitre col-3");
   
    titre = document.createElement("p");
    titre.setAttribute("class", "titre");
    titre.innerHTML = panierTemp[1];

    image = document.createElement("img");
    image.setAttribute("class", "imageProduit");
    image.setAttribute("src", panierTemp[2]);
    image.setAttribute("width","10%");

    divVarnish = document.createElement("div");
    divVarnish.setAttribute("class", "varnish col-5 text-center");
    divVarnish.innerHTML = ("data-id", panierTemp[4]);

    divPrice = document.createElement("div");
    divPrice.setAttribute("class", "price col-12 text-right border-bottom border-left border-info");
    divPrice.innerHTML= ("data-id", panierTemp[5]/ 100 + ".00 €");
   
    //bouton suppression ligne
    btnSupp = document.createElement("button");    
    btnSupp.setAttribute("class", "btnSupp bg-info text-white rounded");
    btnSupp.innerHTML = "supprimer";
    btnSupp.setAttribute = ("data-id", panierTemp[0]);

   
    containerProduit.appendChild(divContenu);
    containerProduit.appendChild(divPrice); 

    divContenu.appendChild(image);
    divContenu.appendChild(divTitre); 
    divContenu.appendChild(divVarnish); 

    divTitre.appendChild(titre);
    divTitre.appendChild(btnSupp);
    

    
  }; //------- fin fonction ajoutProduit--------------------------
 
}; //------- fin boucle ajout Produit ----------------------------------

    //ecoute button supprimer// -------- ne fonctionne pas --------------

    

document.getElementsByTagName("data-id"); 
//console.log(data-id);

btnSupp.addEventListener("click", function() {
  supprimerProduit(); 
}); 


  
  function supprimerProduit () { 
    //document.getElementsByClassName("containerProduit");
    //containerProduit.removeChild(divContenu, divPrice);             
    //document.getElementsByClassName("divContenu");
    //divContenu.removeChild(image, titre, divVarnish);
    for (s = 0; s < panier.length; s++) {    
      console.log(panier[s]);
      console.log(btnSupp.dataset("id"));
      
    
    
    
    //document.getElementsByClassName("divContenu").innerHTML = "";
    // document.getElementsByClassName("price").innerHTML = "";
    //document.getElementsByClassName("imageProduit").innerHTML = "";
    // document.getElementsByClassName("divTitre").innerHTML = "";
    // document.getElementsByClassName("titre").innerHTML = "";
    // document.getElementsByClassName("varnish").innerHTML = "";
    //--------------
    // containerProduit.appendChild(divPrice);
    // divContenu.appendChild(image);
    // divContenu.appendChild(divTitre);           
    // divTitre.appendChild(titre);
    //divTitre.appendChild(btnSupp);
    // divContenu.appendChild(varnish); 


  }  
};








    
       
    // ------------Maj Panier avec produit supprimé ----------------------------   
    localStorage.setItem("panier", JSON.stringify(panier)); // MaJ
    console.log("MàJ panier ds localStorage" + panier); 
    //window.location.href = "panier.html" // refresh page
  
  
      //    window.location.href = "panier.html";
    
// ----------------------------- stockage panierTotal -----------------------------------------------
let panierTotal = panier;
localStorage.setItem("panierTotal", JSON.stringify(panierTotal)); 


    // --------- calculer prix total ------------------------ a voir avec plusieurs produits dans panier
  
 let  prixTotal= 0;
 calculerPrix();

function calculerPrix() {  
 
  for (let c = 0; c < panier.length; c++) {  
    elt = panierTotal[c]; 
    eltPrix = elt[5] ;
    prixTotal = prixTotal + eltPrix ;
  }

  console.log("prixTotal = " + prixTotal); // calcul prix //-------------------------------------------------------
};

  //prixTotal = parseInt(elt[5], 10); // conversion string en Int
console.log("envoi prixTotal dans LocalStorage");

localStorage.setItem("prixTotal", prixTotal);  
total = document.getElementById("prixTotal");
total.innerHTML = "Total de votre sélection : " + prixTotal/100 + ".00 €";


    // ---------------------- Test post avec les produits et leur Id ------


    //tempPrix = elt[5].toString();
    //console.log("tempPrix = " + tempPrix)  


envoyerServer();

 // ------------ stockage --------
function envoyerServer () {           
  // ------------ stockage local--------
  console.log("envoi de panierTotal dans LocalStorage ");
  localStorage.setItem("panierTotal", JSON.stringify(panierTotal));  
};


//get("http://localhost:3000/api/furniture/order:_id")
 // .then(console.log("test import get /order"));



//postProducts();

//function postProducts(){   

  let products=[];
  extractId();
  //console.log("products = " + products);
  localStorage.setItem("products", JSON.stringify(products)); 
 
  function extractId() {
    for (let p = 0; p < panier.length; p++) {    
      elt = panier[p]; 
      eltId = elt[0] ;  
      products.push(eltId); 
    } 
 };
 
 //localStorage.setItem("products", products);  
 //console.log("envoi products (tableau Id) au server distant ");

 localStorage.getItem("table products", products);
 console.log("products = " + products) 
 
  //post("http://localhost:3000/api/furniture/order", products); 
  //alert(" products envoyé server");
//};


   



  //------------------------ formulaire contact ---------------------------------------------- 

  // Envoi contact dans localStorage   ----------
  
        
  
  const btnContact = document.getElementById("btnContact");
  btnContact.addEventListener("click", function () {
 //validFormulaire();

  const firstname = document.getElementById("firstname").value;
  const name = document.getElementById("name").value;
  const adress = document.getElementById("adress").value;
  const city = document.getElementById("city").value;
  const mail = document.getElementById("mail").value;

  const contact= [firstname, name, adress, city, mail];
  
  console.log("contact = ");
  console.table(contact);
  // stockage local
  localStorage.setItem("contact", JSON.stringify(contact)); 
  alert("envoi contact dans localStorage OK");

  // ----- regroupement contact et id-panier pour n) de commande
  let packServer = [contact, panierTotal[0]];
  
  //console.log("packServer = ");
  //console.log(packServer);

  //if ( contact = []) {    //  -------------------------- ne fonctionne pas 
  //alert("defaut : formulaire vide ou incomplet");  

  //} else {    
          // envoi server

      jsonBody = [contact, products];
      localStorage.setItem("jsonBody", jsonBody);

      console.log("jsonBody = " + jsonBody);   
          
      alert(" !!! Envoi server distant");

      post("http://localhost:3000/api/furniture/order", jsonBody);       
      
      alert("Envoyé server distant ok");        
      //window.location.href = "confirm.html";

      

  //}
});
  




 
// formulaire de commande -----------------------------------------------//

  ///  validation form ++

function validFormulaire() {
  'use strict';
  document.getElementById("containerFormulaire")

  console.log(containerFormulaire);

  document.addEventListener("load", function () {

    let forms = document.getElementsByClassName("needs-validation");
    let validation = Array.prototype.filter.call(forms, function(form) {

    form.addEventListener("submit", function(event) {
      if (form.checkValidity() === false) {
          event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
}, false);
};
      
      
          
//    });
  



  







 // };
//------------ test- localSorage-- select --------------------//
// function ajoutSelection() {
//    let panier = JSON.parse(localStorage.getItem("panier"));
//    if (panier === null){
//    panier = [];
//    console.log("panier vide");
//    } 
//  };










//   ajout produits //
//function ajoutPanier (containerProduit, infoProduit, produitDsPanier, containerPanier, prixTotal) {
    
////  

//}

//  supp produits  // 


//validFormulaire();


//  - //





//post("http://localhost:3000/api/furniture", contact);



// Envoi contact - localStorage   ----------







//return prixTotal;
//}


// //

    

/////////////////////////  BOITES A OUTILS  ------------
//       valid infos  //

// valid alpha
//function isAlpha(value){
//    return /[azA-Z]*/.test(value);
//};

// valid Email
//function validateEmail(email) {
//    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    return re.test(String(email).toLowerCase());
//};



//function validate() {
//    const $result = $("#result");
 //   const email = $("#email").val();
//    $result.text("");
  
//    if (validateEmail(email)) {
//      $result.text(email + " is valid :)");
//      $result.css("color", "green");

//    } else {
//      $result.text(email + " is not valid :(");
//      $result.css("color", "red");
//    }
//    return false;
//  };

 // $("#validate").on("click", validate);

// penser au message d'erreur quand champ non rempli

// 
//----------------------- traitement formulaire contact -------------------------------------------------//
//class contact {
//  constructor(firstname,name,adress, city,mail) {
//  this.firstname = firstname;
//  this.lastname = name;
//  this.address = adress;
//  this.city = city;
//  this.email = mail;
//  }
//};

//---------------------------------------------

//get("http://localhost:3000/api/furniture")
//.then(function(response){
//   console.log(response);
//   const containerPanier = JSON.parse(localStorage.getItem("panier"));
//   const containerProduit = document.getElementById("containerProduit");

//   if (containerPanier === 0) {
//       "panier vide" // penser message "panier vide" //

//   }else{
//     let prixTotal = 0;
//     for (let containerProduit of containerProduit) {
//        for (let panier of response) {
//           if (containerPanier.id === infoProduit._id) {
//              prixTotal = ajoutPanier (container, infoProduit, produitDsPanier, containerPanier, prixTotal)
//           };
           
//           localStorage.setItem("totalConfirme", prixTotal);
//          }
//       }
//     }  
//   });


//    btn.addEventListener("clic", function(event) {
        
//      event.preventDefault();
//      let validite = true;
//      validite = checkFormErrors(validite);

//      if (validite === true) {
//         sendOrder();
//      }
//    });



