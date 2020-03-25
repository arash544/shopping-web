// // GET
// var productService = {
//     getAll: function (productsSuccess, productsError, productsComplete) {
//         $.ajax({
//             url: 'https://localhost:44387/api/Products',
//             type:'GET',
//             success: function (products) {
//                 productsSuccess(products);
//             },
//             error: function () {
//                 productsError();
//             },
//             complete: function () {
//                 productsComplete();
//             },
//         });
//     },
//     // POST
//     add:function (addProducts,productSuccess, productError, productComplete) {
//         $.ajax({
//             url: 'https://localhost:44387/api/Products',
//             type: 'POST',
//             data:addProducts(),
            
//             success: function (product) {
//                 productSuccess(product);
//             },
//             error: function () { 
//                 productError();

//             },
//             complete: function () {
//                 productComplete();

//             },
//         });
//     }
// };