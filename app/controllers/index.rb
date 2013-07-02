get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/' do 
  game = Game.create
  game.players << Player.create(:name => params[:players][:player1])
  game.players << Player.create(:name => params[:players][:player2])

  content_type :json
  params[:players].to_json
end

post '/winner' do
  player = Player.find_by_name(params.key(nil))
  Game.last.update_attributes(winner: player.id)
end

