(function(globals){

	globals.Player = function Player(name, key, track){
		this.name = name; 
		this._key = key.charCodeAt(0);
		this._track = track;
	}

	Player.prototype.respondTo = function(key) {
		if(this._key === key) {
			this._move();
		}
	}

	Player.prototype._move = function() {
		var player_active = this._currentPosition();
		player_active.next().addClass('active');
		player_active.removeClass('active');
	}

	Player.prototype.atEnd = function() {
		return this._currentPosition().hasClass('end');
	}

	Player.prototype._currentPosition = function() {
		return this._track.find('td.active');
	}

})(window);