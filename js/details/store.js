// let products;
// productService.getAll(function (dataProducts) {
//   products=dataProducts;
//   filter(dataProducts);

// }, function () {
//   alertify.error("Request wasn't successful!", '3');
//   console.log("Request wasn't successful!");
// }, function () {
//   console.log('Request Completed');
// });


var products;

$.ajax({
    url: '../data.json',
}).success(function (data) {

    data = data.products;
    products = data;
    // gridTemplate(products,text);
    // tableTemplate(products,text);
    filter(products);
}).error(function () {
    console.log("Faild to load data");
}).complete(function(){
    
});