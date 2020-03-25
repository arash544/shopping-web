let text='';
const filter = function(text ){
    let altProducts = products.filter(function(product){
        return product.Title.toLowerCase().includes(text.toLowerCase());
    });
    switcher(altProducts);

};

