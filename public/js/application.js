$(document).ready(function() {
  $('#players').on('submit', function(e){
    e.preventDefault();
    var data = $('#players').find('input[name]');
    var return_data = $.post("/", data);
    return_data.done(function(response) {
      $('.container').hide();
      $('.added').fadeIn();

      var player1 = new Player(response["player1"], "Q", $('#player1_strip'));
      var player2 = new Player(response["player2"], "P", $('#player2_strip'));

      var game = new Game([player1, player2]);

      $(document).on('keyup', function(e){
        game.onKeyUp(e.which);
      });
    });
  });
});
