// search
$('#search').on('input', function (e) {
    text = e.target.value;
    filter(text);
});

// layout
$('#list').click(function () {
    $('#template-grid').css('display','none');
    $('#list-table').css('display','table');
    grid = false;
    filter(text);
});

$('#grid').click(function () {
  $('#list-table').css('display','none');
  $('#template-grid').css('display','flex');
    grid = true;
    filter(text);
});

// sort
$('#lower').click(function () {
    products.sort(function (a, b) {
        if (a.Title < b.Title) {
            return -1;
        } else if (a.Title > b.Title) {
            return 1;
        } else {
            return 0;
        }
    });

    filter(text);
});

$('#higher').click(function () {
    products.sort(function (a, b) {
        if (a.Title > b.Title) {
            return -1;
        } else if (a.Title < b.Title) {
            return 1;
        } else {
            return 0;
        }
    });
    filter(text);
});

// scrollspy
$("body").scrollspy({
    target: '.navbar',
    offset: 50,
  });
  $("#myNavbar a").on('click', function (e) {
    if (this.hash !== "") {
      event.preventDefault();
      var v = this.hash;
      $('html').animate({
        scrollTop: $(v).offset().top - $('.nav').outerHeight(true)
      }, 1000);

    }
  });

  // scrollup
  $(window).scroll(function (e) {

    if ($(this).scrollTop() > 100) {
      $('#scroll-up').fadeIn();
    }
    else {
      $('#scroll-up').fadeOut();
    }
  });
  $('#scroll-up').click(function () {
    $('html').animate({
      scrollTop: 0
    }, 1500);
  });

  // carousel
$('.carousel').carousel({
    interval: 3000,
    pause: 'hover'
  
  });