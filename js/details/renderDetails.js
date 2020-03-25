
const renderDetails = function (product) {
    var details = $("#details").html();
    var compileDetail = Handlebars.compile(details);
    var newDetails = compileDetail(product);
    $("#detail-root").append(newDetails);
    $('.btn-shopping').on('click', function (e) {
        cart.addToState(e.target.id);
    });
    renderCarousel(products);
};


const renderCarousel = function (products) {
    var carousel = $("#carousel").html();
    var compileCarousel = Handlebars.compile(carousel);
    var newCarousel = compileCarousel(products);
    $(".owl-carousel").append(newCarousel);
    $(".owl-carousel").owlCarousel({
        items:5,
        loop: true,
        margin: 10,
        nav: true
    });
    $('.item').on('click', function (e) {
        location.assign(`/details.html#${e.target.id}`);
        location.reload();
    });

};
