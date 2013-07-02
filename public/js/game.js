(function(globals) {

	globals.Game = function Game(player_one, player_two){
		var _player_one = player_one;
		var _player_two = player_two; 

		this.getPlayerOne = function(){ return _player_one; };
		this.getPlayerTwo = function(){ return _player_two; };
	};

	Game.prototype.onKeyUp = function(key) {
  	var key_to_move_player_one = "Q".charCodeAt(0);
  	var key_to_move_player_two = "P".charCodeAt(0);

  	if (key === key_to_move_player_one){
  		movePlayer("player1");
  	}
  	else if (key === key_to_move_player_two){
  		movePlayer("player2");
  	}
  };

	function movePlayer(player) {
		if(player === "player1"){
			var player_active = $('#player1_strip').find('td.active');
		}
		else{
			var player_active = $('#player2_strip').find('td.active');
		}
		player_active.next().addClass('active');
		player_active.removeClass('active');
		playerAtEnd(player_active);
	}

	function playerAtEnd(player_active){
		if (player_active.hasClass('end')){
			alert("Player 1 Wins!");
			var returned_data = $.post("/winner", response["player1"]);
			returned_data.done(function(){
				//refresh();
			});
		}
	}


})(window);