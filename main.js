// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
//
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti

$(document).ready(function() {
  $.ajax(
    {
      'url': 'https://flynn.boolean.careers/exercises/api/array/music',
      'method': 'GET',
      'success': function(m){

        var array_cd = m.response
          for ( var i = 0 ; i < array_cd.length; i++) {
          var source = $('#entry-template').html();
  			  var template = Handlebars.compile(source);
          var content = m.response[i];
  				var html = template(content);
          $('.music-section').append(html);
        }
      },
      'error':function(){
        alert('Attenzione! Errore!');
      }
    }
  );
  // *****bonus*****
  $("select").change(function(){
    var cd = $(".card-music");
    var genre = $(this).val();
    if (genre != "All") {
       search(cd, genre);
      } else {
       card-music.show();
      }
  });
  // ******ricerca classe******
  function search(x, y){
    x.each(function(){
      if ($(this).hasClass(y) == 0){
        $(this).hide();
      } else{
        $(this).show();
      }
    });
  }
});
