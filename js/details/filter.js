const filter = function (products) {
    //finding products id from hash  
    const id = location.hash.slice(1, location.hash.length);
    if(id){
        const product = products.filter(function (product) {
            return product.Id == id;
        });
        renderDetails(product);
    }else{
        renderDetails([products[4]]);
    }

};