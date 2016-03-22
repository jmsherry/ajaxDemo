$(function(){




  $('nav a').on('click.navigate', function(){

    var url = $(this).attr('href');

    $.ajax({
      url: url
    }).done(function(response) {
      $('main').html(response);
    });



    return false;

  });



});


// $('body').on('click.jimDelegated', '#delegated .triggerLink', function(e) {
//     console.log(arguments);
//     alert('BOOYAH (delegated event)!!');
//     return false; // See below
//
//   });
