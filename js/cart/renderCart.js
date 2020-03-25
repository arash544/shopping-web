const renderCart = function (products) {
    $("#cart-root").html('');
    var details = $("#cart").html();
    var compileDetail = Handlebars.compile(details);
    var newDetails = compileDetail(products);
    $("#cart-root").append(newDetails);


    //add event listener to increase the count
    $('.increase').on('click', function (e) {
        cart.increaseTheCount(e.target.id);
    });

    //add event listener to decrease the count
    $('.decrease').on('click', function (e) {
        cart.decreaseTheCount(e.target.id);
    });

    //add event Listener to remove an item
    $('.remove').on('click', function (e) {
        cart.removeAnItem(e.target.id);
    });


    // calculating the summery 
    $('#summery').html('');
    let summery = 0;
    products.filter(function (product) {
        summery += (product.count * product.Price);
    });
    $('#summery').html(`costs : ${summery}$`);

    // add event listener for clearing the cart
    $('#removeAll').on('click', function (e) {
        cart.removeAll();
    });

};
renderCart(cart.state);