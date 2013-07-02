function refresh() {
  window.location.reload();
}

function playGame(response) {
  $(document).keyup(function(e){
    var key_to_move_player_one = "Q".charCodeAt(0);
    var key_to_move_player_two = "P".charCodeAt(0);

    if (e.keyCode === key_to_move_player_one){
      var player_one_active = $('#player1_strip').find('td.active');
      player_one_active.next().addClass('active');
      player_one_active.removeClass('active');
      if (player_one_active.hasClass('end')){
        alert("Player 1 Wins!");
        var returned_data = $.post("/winner", response["player1"]);
        returned_data.done(function(){
          refresh();
        });
      }
    }
    else if (e.keyCode === key_to_move_player_two){
      var player_two_active = $('#player2_strip').find('td.active');
      player_two_active.next().addClass('active');
      player_two_active.removeClass('active');
      if (player_two_active.hasClass('end')){
        alert("Player 2 Wins!");
        var returned_data = $.post("/winner", response["player2"]);
        returned_data.done(function(){
          refresh();
        });
      }
    }
  });
}



$(document).ready(function() {
  $('#players').on('submit', function(e){
    e.preventDefault();
    var data = $('#players').find('input[name]');
    var return_data = $.post("/", data);
    return_data.done(function(response) {
      $('.container').hide();
      $('.added').fadeIn();
      playGame(response);
    });
  });
});