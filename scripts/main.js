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
