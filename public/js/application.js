function refresh() {
  window.location.reload();
}

function playGame(response) {
  var counter1 = 0;
  var counter2 = 0;
  $(document).keyup(function(e){
    var player_one = "Q".charCodeAt(0);
    var player_two = "P".charCodeAt(0);
    var node1 = document.getElementById('player1_strip');
    var node2 = document.getElementById('player2_strip');
    var array1 = node1.getElementsByTagName('td');
    var array2 = node2.getElementsByTagName('td');

    if (e.keyCode === player_one){
      if(counter1 < array1.length-1){
        array1[counter1].className = 'inactive';
        array1[counter1 + 1].className = 'active';
        counter1+=1;
        if (counter1 === array1.length-1){
          alert('Player 1 Wins!!!');
          return_post = $.post("/winner", response["player1"]);
          return_post.done(function(){ refresh() });
        }
      }
    }
    if (e.keyCode === player_two){
      if(counter2 < array2.length-1){
        array2[counter2].className = 'inactive';
        array2[counter2 + 1].className = 'active';
        counter2+=1;
        if (counter2 === array2.length-1){
          alert('Player 2 Wins!!!');
          var return_post = $.post("/winner", response["player2"]);
          return_post.done(function(){ refresh() });
        }
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



