
let grid = true;
const switcher = function (products) {
    if (grid) {
        gridTemplate(products);
    } else {
        tableTemplate(products);
    }
};

const gridTemplate = function (products) {
    var gridTemplate = $("#grid-template").html();
    var compileGrid = Handlebars.compile(gridTemplate);
    var newTemplateGrid = compileGrid(products);
    $("#template-grid").html('');
     $("#template-table").html('');
    $("#template-grid").append(newTemplateGrid);

    $('.grid-id').on('click', function (e) {
        location.assign(`./details.html#${e.target.id}`);
    });
    $('.btn-shopping').on('click', function (e) {
    
     cart.addToState(e.target.id);
    });
};




const tableTemplate = function (products) {
    var tableTemplate = $("#list-template").html();
    var compileTable = Handlebars.compile(tableTemplate);
    var newTemplateTable = compileTable(products);

    $("#template-table").html('');
    $("#template-grid").html('');

    $("#template-table").append(newTemplateTable);

    $('.grid-id').on('click', function (e) {
        location.assign(`./details.html#${e.target.id}`);
    });
    $('.btn-shopping').on('click', function (e) {
        cart.addToState(e.target.id);
    });
};


