
 

// affichage de la confirmation de commande
function afficherConfirmation(){   
    let panierDefinitif = JSON.parse(localStorage.getItem("panierTotal")); // rdestockage panier du localStorage
    let prixTotal = JSON.parse(localStorage.getItem("prixTotal")); // rdestockage montant total de la commande du localStorage
    

    const confirmId = panierDefinitif[0]; // recherche Id du produit commandé

    // formattage affichage dans le DOM
    const DivRecapCommande = document.getElementById("recap");
    DivRecapCommande.setAttribute("class", "row w-100  ml-3 text-center");
    
    const messageRecap = document.createElement("h5");
    messageRecap.setAttribute("class","col-12 text-center");
    messageRecap.innerHTML = "votre n° de commande à conserver : " + confirmId[0];

    const messagePrix = document.createElement("h5");
    messagePrix.setAttribute("class","col-12 text-center");
    messagePrix.innerHTML = "Montant de vos achats : " + prixTotal/100 + ".00 €";

    // organisation affichage
    DivRecapCommande.appendChild(messageRecap);
    DivRecapCommande.appendChild(messagePrix);

};


// Appel fonction 
afficherConfirmation();



//--------------
 ///     adresse livraison  /// 


 //let contact1 = [JSON.parse(localStorage.getItem("contact"))];
//console.log("-------Coordonnées de livraison-----------")
// console.table(contact1);
 

// const filteredContact = contact1.filter( (contactItem, firstName ) => {       
 //   if (contactItem === firstName)   
 //       return firstName.value;      
 //   }     
//  )
 
 // console.log(filteredContact) ;
//  firstName = [filteredContact];
 
//   alert("Merci " + firstName + " vous serez livré au " + contact1[2] + " à " + contact1[3] );

