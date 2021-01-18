
//pour appel fct GET (recup API)

function get(url) {
 const promise = new Promise(function (resolve, reject){
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function (){
        if (this.readyState === XMLHttpRequest.DONE){
            if(this.status === 200) {
            resolve(JSON.parse(request.responseText));
            } else {
            reject(request.status);
            }
        }
    };
    request.send();

    console.log("envoi GET"); 
 });
 return promise; 

};



//pour appel fct POST (envoi API)

function post(url,jsonBody) {
    const promise = new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();

        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");

        request.onreadystatechange = function(){
            if (this.readyState === 4) {
                if (this.status === 201) {
                    resolve(JSON.parse(this.responseText));

                }else{
                reject(request.status);

                }
            }
        };

        request.send(JSON.stringify(jsonBody));

        console.log("envoi_post au server distant");
    });
    
    return promise;
    
};

