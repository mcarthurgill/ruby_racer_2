(function(globals){
	
	globals.Player = function Player(name){
		var _name = name; 
		
		this.getName = function(){ return _name; };
	}
	// globals.Player = Player

})(window);