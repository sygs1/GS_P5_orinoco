
function getId(){
    const param = window.location.search;
    const id = param.replace("?id=","");
    return id;
}

class Produit {
    constructor(id, vernisSelected){
        this.varnish = vernisSelected;
        this.id = id;
    }
}

