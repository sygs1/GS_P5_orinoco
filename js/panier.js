

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
 
  //for (i = 0; i < (panier.length); i++) {  
  //  let panierTemp = panier[i];
  
    //ecoute button supprimer// -------- ne fonctionne pas --------------
//document.getElementsByClassName("btnSupp");

btnSupp.addEventListener("click", function () { 
  
  btnSuppId= panierTemp[0];

  //console.log("panier =");
  //console.table(panier);
  //console.log("btnSuppId =");
  //console.log(btnSuppId);

  //for (i = 0; i < (panier.length); i++) {  
  //  let panierTemp = panier[i];
  console.log("panierTemp =" + panierTemp);
    //console.log(panierTemp);

    console.log("extraction index panierTemp = " + panier.indexOf(panierTemp));

  //const found = panier.find(element => element = [panierTemp].index);
  //console.log("found -->" + found);



  const filteredPanier = panier.filter( (panierItem, index ) => { 
    console.log(panierItem.id)      
    if (panierItem.id === panier.indexOf(panierTemp))   
        return false;
      return true;
    } 
  )
      
   // );
   console.table("filteredPanier"); 
    console.table(filteredPanier);
    console.log("-------------");
  //}  //panier = filteredPanier;
    // panier = filteredPanier

  // document.location.reload();

  //------------Maj Panier avec produit supprimé ----------------------------   
  localStorage.setItem("panier", JSON.stringify(panier)); // MaJ
  console.log("MàJ panier ds localStorage" + panier); 

  //-------------------------------
  
  //alert("touché =" + panierTemp[0]);
   // for (s = 0; s != panierTemp.length; s++) { 
   // const majPanier = panierTemp.splice(s,1,"");
    //console.log("-----");
    //console.log("Donnée otée de panierTemp = " + majPanier);
    //console.log("panierTemp =" + panierTemp);
    
   // };

    //supprimerProduit();

    
    
    // Reload ensuite



    //function supprimerProduit () {    
        
    //  alert("debut supp champs")
    
    //  document.getElementsByClassName("divContenu").innerHTML = "";
   //   document.getElementsByClassName("price").innerHTML = "";
   //   document.getElementsByClassName("imageProduit").innerHTML = "";
   //   document.getElementsByClassName("divTitre").innerHTML = "";
  //    document.getElementsByClassName("titre").innerHTML = "";
   //   document.getElementsByClassName("varnish").innerHTML = "";
        //--------------
   //   containerProduit.appendChild(divPrice);
   //   divContenu.appendChild(image);
   //   divContenu.appendChild(divTitre);           
   //   divTitre.appendChild(titre);
   //   divTitre.appendChild(btnSupp);
   //   divContenu.appendChild(divVarnish); 
        
     

      //if (panier = []){
      // LocalStorage.clear();
      // console.log("panier vide");
      // window.location.href = "index.html";
     // }

      //window.location.href = "panier.html";
    }) 
    
   //------- fin boucle ajout Produit ----------------------------------
     
  };
 

      //if ((panierTemp[s].btnSuppId) === btnSuppId ){
      //  panierTemp[s].splice(s, 1);
       //break;   
  



       
    //
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


  
console.log("envoi prixTotal dans LocalStorage");

localStorage.setItem("prixTotal", prixTotal);  //prix Total dans le localStorage
total = document.getElementById("prixTotal");
total.innerHTML = "Total de votre sélection : " + prixTotal/100 + ".00 €";  //affichage DOM prix Total 


    
envoyerServer(); // panierTotal dans le localStorage

 // ------------ stockage local--------
function envoyerServer () {           
  // ------------ stockage local--------
  console.log("envoi de panierTotal dans LocalStorage ");
  localStorage.setItem("panierTotal", JSON.stringify(panierTotal));  
};



//function postProducts(){   

  //post("http://localhost:3000/api/furniture/order", products); 
  //alert(" products envoyé server");
//};



  //------------------------ formulaire contact ---------------------------------------------- 
    //--------------------------- test sur valeurs formulaire
    function validEmail(email) {
      const rep = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return rep.test(String(email).toLowerCase());
   };


    function isString(value){
    return /[azA-Z]*/.test(value);
    };
  
     //----------------------------- ne foncvtionne pas   
  


      const formulaire = document.getElementById("formulaireContact");
      formulaire.addEventListener ("submit", (event)=>  {
        event.preventDefault(); // écoute evt et continue

        "use strict";         
        let forms = document.getElementsByClassName("needs-validation"); //recup tous les formulaires
          var validation = Array.prototype.filter.call(forms, function(form) { //créé une table avec les "needs-validation"
      
         form.addEventListener("submit", function(event) { //écoute saisies
            if (form.checkValidity() === false) {    //check = return true si donées valides 

      
               event.preventDefault(); // écoute evt et continue
                event.stopPropagation(); // arrête là
              }
             form.classList.add("was-validated");
            }, false);
          }, false);

        
       //---------------------
   
       
        let firstname = document.getElementById("firstname").value; 
        let name = document.getElementById("name").value;
        let adress = document.getElementById("adress").value;
        let city = document.getElementById("city").value;
        //----
        if (isString(firstname)) {
          }else{
          alert("Prénom = non valide");
          border: red;
          };
        if (isString(name)) {
          }else{
          alert("Nom =  non valide");
          border: red;

        };
        if (isString(city)) {   
          }else{
          alert("Ville non valide");
          border: red;
          };
        //----
        let mail = document.getElementById("mail").value;
        if (validEmail(mail)) {
          }else{
          alert("Email non valide");
        };
        
        let contact= [firstname, name, adress, city, mail];

        console.log("formulaire contact peuplé")
     
        //--------------------------------------
       // alert("stockage formulaire contact");
  
        localStorage.setItem("contact", JSON.stringify(contact)); 

      
  
 
        //--------------------- prepa Products pour joindre à la requete POST
        
        let products=[];
        extractId();
        //console.log("products = " + products);
        localStorage.setItem("products", JSON.stringify(products)); 

        //---------------------- 
        function extractId() {
          for (let p = 0; p < panier.length; p++) {   //boucle extraction Id des produits selectionnés 
            elt = panier[p]; 
            eltId = elt[0] ;  
            products.push(eltId); // push des Id dans products
          } 
      };
 


    localStorage.getItem("table products", products);
          
    localStorage.getItem("contact", contact); 
        // envoi server jsonBody
  
    jsonBody = [contact, products];
    localStorage.setItem("jsonBody", JSON.stringify(jsonBody));
  
    console.log("jsonBody = " + jsonBody);   
   
//    alert(" !!! Envoi server distant");
  
    post("http://localhost:3000/api/furniture/order", jsonBody);   
  
    window.location.href = "confirm.html";
  }); 

   
   
      

      
    
    
      
    //--------------------------------------------
      


 
   
    








  //--------------------------------- boite à outils  ------------

    //function verification() {
    //  let firstname = document.getElementById("firstname").value; 
    //    if(firstName = /[azA-Z]*/.test(value)){
     //     alert("ok");  
     //   }
    

    //  let name = document.getElementById("name").value;
    //  if(name="") {
    //    alert('Vous devez compléter votre nom !');      
    //    document.getElementById("name").style.borderColor="red";
    //    document.getElementById("name").style.color="#FFF";         
    //  }
    
    //  let adress = document.getElementById("adress");
    //  if(adress=="") {
    //    alert('Vous devez compléter votre adresse !');      
    //    document.getElementById('idNom').style.borderColor="red";
    //    document.getElementById('idNom').style.color="#FFF";  

    //  let adress = document.getElementById("adress").value;
             
    //  }
    //  let city = document.getElementById("city").value;
      
    // let mail = document.getElementById("mail").value;
    

  //  let textInput = ["firstName", "name","city"];
  //    if (textInput.value === "") {
  //      alert("champ vide");
  //    }
//
  //  let contact= [firstname, name, adress, city, mail];
    
  //  console.log("contact = ");
  //  console.table(contact);
  //  }
    
    // valid alpha
  //  function isAlpha(value){
  //      return /[azA-Z]*/.test(value);
  //  };
      
    //valid Email
  //  function validateEmail(email) {
  //    const rep = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return rep.test(String(email).toLowerCase());
  //  };

  //  function isAdress(value){
  //    return /\w+/.test(value);
  //  }
    //validFormulaire()

    
  //  alert("formulaire non valid");
     
     //---------------------------------
        // ----- regroupement contact et id-panier pour n) de commande
      //let packServer = [contact, panierTotal[0]];
      //if ( contact = []) {    //  -------------------------- ne fonctionne pas 
      //alert("defaut : formulaire vide ou incomplet");  



      //---------------
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

//  alert("appel supprimer Produit");
      //document.getElementsByClassName("containerProduit");
      //containerProduit.removeChild(divContenu, divPrice);             
      //document.getElementsByClassName("divContenu");
      //divContenu.removeChild(image, titre, divVarnish);



      
 
  //  supprimerProduit(); 
  //  elt = panier[s]; 
  //  eltId = elt[0] ; 
  //  const btnSuppId = [];
  //  btnSuppId.push(eltId);    