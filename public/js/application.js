$(document).ready(function() {
  //trying to get the names from the form and then play the game with them
  $('#players').on('submit', function(e){
    e.preventDefault();
    var data = $('#players').find('input[name]');
    console.log(data);
  });

  var player1 = new Player("McArthur");
  var player2 = new Player("Gill");

  var game = new Game(player1, player2);

  $(document).on('keyup', function(e){
    game.onKeyUp(e.which);
  });
});




// function refresh() {
//   window.location.reload();
// }


  // $('#players').on('submit', function(e){
  //   e.preventDefault();
  //   var data = $('#players').find('input[name]');
  //   var return_data = $.post("/", data);
  //   return_data.done(function(response) {
  //     $('.container').hide();
  //     $('.added').fadeIn();
  //     playGame(response);
  //   });
  // });