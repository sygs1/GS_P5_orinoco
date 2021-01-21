
 

// affichage de la confirmation de commande
function afficherConfirmation(){   
    let panierDefinitif = JSON.parse(localStorage.getItem("panierTotal")); // rdestockage panier du localStorage
    let prixTotal = JSON.parse(localStorage.getItem("prixTotal")); // rdestockage montant total de la commande du localStorage
    let orderId = (localStorage.getItem("orderId"));

    const confirmId = panierDefinitif[0]; // recherche Id du produit commandé

    // formattage affichage dans le DOM
    const DivRecapCommande = document.getElementById("recap");
    DivRecapCommande.setAttribute("class", "row w-100  ml-3 text-center");
    
    const messageRecap = document.createElement("h6");
    messageRecap.setAttribute("class","col-12 text-center");
    messageRecap.innerHTML = "votre n° de commande à conserver   :   " + orderId;

    const messagePrix = document.createElement("h6");
    messagePrix.setAttribute("class","col-12 text-center");
    messagePrix.innerHTML = "Montant de vos achats : " + prixTotal/100 + ".00 €";

    // organisation affichage
    DivRecapCommande.appendChild(messageRecap);
    DivRecapCommande.appendChild(messagePrix);

};
// Appel fonction 
afficherConfirmation();


//--------------
 ///    message avec prénom et adresse livraison  /// 
let contact1 = [JSON.parse(localStorage.getItem("contact"))];
console.log("-------Coordonnées de livraison-----------");
console.table(contact1);
[jDoe] = contact1.slice();

alert("Merci  " + jDoe.firstName + ", vous serez livré(e) au  " + jDoe.address + "  à  " + jDoe.city);

