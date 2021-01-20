
//pour appel fct GET (recup API)

function get(url) {
    const promise = new Promise(function (resolve, reject){ // init promesse avec arguments ok / ko
        const request = new XMLHttpRequest(); // init requete HTTP
        request.open("GET", url); // lance GET

        request.onreadystatechange = function (){ // vérification conformité request
            if (this.readyState === XMLHttpRequest.DONE){ // etat ok
                if(this.status === 200) { // statut ok
                resolve(JSON.parse(request.responseText)); // si ok, formate JSON
                } else {
                   reject(request.status); // si ko , renvoi statut
                }
            }
        };
        request.send(); // envoi request
    });
    return promise; // revoi infos API quand vérif et transmission request ok
};

// -----------------

//  --- pour appel fct POST (envoi API)
function post(url,jsonData) {
    const promise = new Promise(function (resolve, reject) { // // init promesse avec arguments ok / ko
        const request = new XMLHttpRequest(); // init requete HTTP

        request.open("POST", url); // lance post sur URL passée en argument
        request.setRequestHeader("Content-Type", "application/json"); // init formattage (entete)

        request.onreadystatechange = function(){ // vérification conformité request
            if (this.readyState === 4) { // DONE = operation terminée
                if (this.status === 201) { // ok, success
                    resolve(JSON.parse(this.responseText)); // si ok, formate JSON
                }else{
                reject(request.status);
                }
            }
        };
        request.send(JSON.stringify(jsonData));   // envoi request et stringifie jsonData passé en argument   
    });    
    return promise;  // retourne promesse que   ok 
};

