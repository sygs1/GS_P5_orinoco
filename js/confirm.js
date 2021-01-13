
 


function afficherConfirmation(){   
    let panierDefinitif = JSON.parse(localStorage.getItem("panierTotal"));
    let prixTotal = JSON.parse(localStorage.getItem("prixTotal"));
    

    const confirmId = panierDefinitif[0];

    const DivRecapCommande = document.getElementById("recap");
    DivRecapCommande.setAttribute("class", "row w-100 text-center");
    
    const messageRecap = document.createElement("h5");
    messageRecap.setAttribute("class","col-12 text-center");
    messageRecap.innerHTML = "votre n° de commande à conserver : " + confirmId[0];

    const messagePrix = document.createElement("h5");
    messagePrix.setAttribute("class","col-12 text-center");
    messagePrix.innerHTML = "Montant de vos achats : " + prixTotal/100 + ".00 €";

    DivRecapCommande.appendChild(messageRecap);
    DivRecapCommande.appendChild(messagePrix);

    console.log("------------Montant total de la commande----------" + prixTotal/100 + ".00 €");
};



afficherConfirmation();


 ///     adresse livraison
 let contact1 = JSON.parse(localStorage.getItem("contact"));
 console.log("-------Coordonnées de livraison-----------")
 console.table(contact1); 
 
 alert("Merci " + contact1[0] + " vous serez livré au " + contact1[2] + " à " + contact1[3] );



