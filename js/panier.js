
// destockage produit-s selctionné-s  
panier=[];
panier = JSON.parse(localStorage.getItem("panier"));


//controle si panier vide  - ne fonctionne pas
if (panier === null){
  alert("votre panier est vide");
  } else {
    alert("pour continuer vos achats = sélectionnez Accueil");
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
  

  //---------------------------------------------------------
   
function ajouterChoixProduit (){

    divContenu = document.createElement("div");
    divContenu.setAttribute("class", "row w-100 font-weight-bold");

    divTitre =  document.createElement("div");
    divTitre.setAttribute("class", "divTitre col-4 mt-3 font-weight-bold");
   
    titre = document.createElement("p");
    titre.setAttribute("class", "titre");
    titre.innerHTML = panierTemp[1];

    image = document.createElement("img");
    image.setAttribute("class", "imageProduit mt-3 ml-3 ");
    image.setAttribute("src", panierTemp[2]);
    image.setAttribute("width","20%");

    divVarnish = document.createElement("div");
    divVarnish.setAttribute("class", "varnish col-4 text-center mt-3 font-weight-bold");
    divVarnish.innerHTML = ("data-id", panierTemp[4]);

    divPrice = document.createElement("div");
    divPrice.setAttribute("class", "price mb-2 col-12 text-right border-bottom border-left font-weight-bold border-dark");
    divPrice.innerHTML= ("data-id", panierTemp[5]/ 100 + ".00 €");
   
    //bouton suppression ligne
    btnSupp = document.createElement("button");    
    btnSupp.setAttribute("class", "btnSupp bg-info text-white rounded");
    btnSupp.innerHTML = "supprimer";
    btnSupp.setAttribute = ("data-id", panierTemp[0]);

    document.getElementById("cardPanier");

    cardPanier.appendChild(divContenu);
    cardPanier.appendChild(divPrice); 

    divContenu.appendChild(image);
    divContenu.appendChild(divTitre); 
    divContenu.appendChild(divVarnish); 

    divTitre.appendChild(titre);
    divTitre.appendChild(btnSupp);
    

    
  }; //------- fin fonction ajoutProduit--------------------------
  //------- Appel fonction ajoutProduit-
ajouterChoixProduit();


// écoute bouton supprimer = enlever un produit du panier
btnSupp.addEventListener("click", function () {   
      // recherhce par filtrage dans l'array panier
  const filteredPanier = panier.filter( (panierItem, index ) => { 
      
      if (panierItem === panierTemp)   
          return false; // enlève le produit correspondant à la sélection
        return true; // conserve les autres
      } 
    )
      //----------- vérification suppression produit 
    console.table("filteredPanier"); 
      console.table(filteredPanier);
      console.log("-------------");
  
      panier = filteredPanier // attribution panier filtré au panier

      document.location.reload(); // refresh page

    //------------Maj Panier avec produit supprimé ----------------------------   
    localStorage.setItem("panier", JSON.stringify(panier)); // MaJ
    console.log("MàJ panier ds localStorage" + panier); 
  })      
};

    
// ------------ définition et stockage local du panierTotal -------
let panierTotal = panier;
localStorage.setItem("panierTotal", JSON.stringify(panierTotal)); 


let  prixTotal= 0; // réinit prix

// --------- calculer prix total ------  
function calculerPrix() {   
  for (let c = 0; c < panier.length; c++) {  // boucle sur le nombre de produit dans le panier
    elt = panierTotal[c]; 
    eltPrix = elt[5] ; // réupération du champ prix
    prixTotal = prixTotal + eltPrix ;
  }
};

// appel fonction
calculerPrix(); 

localStorage.setItem("prixTotal", prixTotal);  //prix Total dans le localStorage

total = document.getElementById("prixTotal");
total.innerHTML = "Total de votre sélection : " + prixTotal/100 + ".00 €";  //affichage DOM prix Total 

 

 // ------------ stockage local du panier total--------
function envoyerServer () {           
    console.log("envoi de panierTotal dans LocalStorage ");
  localStorage.setItem("panierTotal", JSON.stringify(panierTotal));  
};

envoyerServer(); // Appel fonction


//--------------------------- FORMULAIRE CONTACT -------- 
// écoute  submit
const formulaire = document.getElementById("formulaireContact");
formulaire.addEventListener ("submit", (event)=>  {
event.preventDefault(); 

  // Récupère la valeur des champs du formulaire
  let firstName = document.getElementById("firstName").value;         
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;  
  let email = document.getElementById("email").value;
  //----
  let contact= {firstName, lastName, address, city, email}; // init variable "contact"


// fonction vérification saisies -- 
function verifierSaisieFormulaire() {
  // Contrôle saisies
  if(firstName==""){
    alert("Vous devez compléter votre Prénom !");
    document.getElementById("firstName").style.backgroundColor="red";
    document.getElementById("firstName").style.color="white";
    // Permet de bloquer l'envoi du formulaire
    return false;
    }else{
    document.getElementById("firstName").style.backgroundColor="#9C6";
  }

  if(lastName==""){
      alert("Vous devez compléter votre Nom !");
      document.getElementById("lastName").style.backgroundColor="red";
      document.getElementById("lastName").style.color="white";
      // Permet de bloquer l'envoi du formulaire
      return false;
      }else{
      document.getElementById("lastName").style.backgroundColor="#9C6";
  }

  if(address==""){
      alert("Vous devez compléter votre adresse !");
      document.getElementById("address").style.backgroundColor="red";
      document.getElementById("address").style.color="white";
      // Permet de bloquer l'envoi du formulaire
      return false;
      }else{
      document.getElementById("address").style.backgroundColor="#9C6";
  }

  if(city==""){
      alert("Vous devez compléter votre Ville !");
      document.getElementById("city").style.backgroundColor="red";
      document.getElementById("city").style.color="white";               
      return false;
      }else{
      document.getElementById("city").style.backgroundColor="#9C6";
  }
    // Contrôle sur l'email
  if(email==""){
    alert("Vous devez compléter votre addresse email");
    document.getElementById("email").style.backgroundColor="red";
    document.getElementById("email").style.color="white";
    return false;
    }else{
    document.getElementById("email").style.backgroundColor="#9C6";  
  }
  
}; 
// ---- fonction contrôle Email
function validemail() {
  if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(email))
  { return true;    
    } else {
      alert("veuillez utiliser une addresse eemail valide");
      document.getElementById("email").style.backgroundColor="red";
      document.getElementById("email").style.color="white";
      return false;
  }
};

verifierSaisieFormulaire(); // vérifie saisies effectives

validemail(); // vérifie conformité mail

// stockage local de "contact"" (pour joindre à "products" dans la requete POST)
localStorage.setItem("contact", JSON.stringify(contact)); 
console.log("formulaire contact peuplé"); // vérification transmission des données

let products=[];  // création de la table Products
//--------- récupère l'identifiant des produits commandés et les affecte à Products
function extractId() {
  for (let p = 0; p < panier.length; p++) {   //boucle extraction Id des produits selectionnés 
    elt = panier[p]; 
    eltId = elt[0] ;  
    products.push(eltId); // push des Id dans products
  } 
};
 
//------------ Appel fonction d'initialisation de "Products"
extractId(); 

// stockage local de "products" (pour joindre à "contact" dans la requete POST)
  localStorage.setItem("products", JSON.stringify(products)); 


  // récupération de la table "products"
  localStorage.getItem("table products", products);

  // récupération de la table "contact"        
  localStorage.getItem("contact", contact); 

  // initialisation jsonData  avec "contact et "products"
  let jsonData = { contact : {contact} , products : (products)};

  // stockage locage de jsonData
  localStorage.setItem("jsonData", JSON.stringify(jsonData));



  // ------- Appel POST depuis fctGP.js ------

  // URL API en locale =  http://localhost:3000/api/furniture/order
  
  // URL API en ligne = https://api-oc5.herokuapp.com/api/furniture/order 

  post("http://localhost:3000/api/furniture/order", jsonData);   

    //window.location.href = "confirm.html";


      


// valid alpha
//function isAlpha(value){
//    return /[azA-Z]*/.test(value);
//};













}); 

