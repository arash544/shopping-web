$('#add').click(function () {
    // $('#loader').removeClass('hidden');
    var title = $('#title').val();
    var price = $('#price').val();
    var id = $('#id').val();
    var image = $('#picture').val();
    var product = {
        Id: id,
        Title: title,
        Price: price,
        ImagePath: image,
    };

    $('#loader').removeClass('hidden');

    productService.add(function(){
        console.log(product);
        return product;

    },function () {
        alertify.success("Request was successful!", '3');
    }, function () {
        alertify.error("Request wasn't successful!", '3');
        console.log("Request wasn't successful!");
    }, function () {
        $('#loader').addClass("hidden");
        console.log('Product added successfully !');

    });


});




$('#home').click(function () {
    window.location = 'index.html';
});