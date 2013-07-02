(function(globals) {

	globals.Game = function Game(players){
		this.players = players;
		this.status = "in_progress";
	};

	Game.prototype.onKeyUp = function(key) {
		if (this._inProgress()) { 
			$.each(this.players, function(k, player) {
				player.respondTo(key);
			});
			this.checkIfGameIsOver(); 
		}
	};

	Game.prototype.checkIfGameIsOver = function(){
		var game = this;
		$.each(this.players, function(k, player) {
			if (player.atEnd()) {
				game._saveWinner(player.name);
				game.status = "over"
				alert("winner winner chicken dinner... " + player.name + " won!!!");
			}
		});
	}

	Game.prototype._saveWinner = function(player_name) {
		$.post("/winner", player_name).done(function(){
			document.location.reload(); 
		});
	}

	Game.prototype._inProgress = function() {
		return this.status === "in_progress"
	}

})(window);