

  $('a.nav-link').on('click', function(e){
    e.preventDefault();
    var url = $(this).attr('href');

    $('.contentAndFooter').animate({
      opacity: 0,
    }, 1000, function(){
      $('#mainContent').empty();
      $('#mainContent').load(url + ' #mainContent');
    });

    $('.contentAndFooter').animate({
      opacity: 1
    }, 1500,);
    



    
  })