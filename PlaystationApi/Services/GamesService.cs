using MongoDB.Driver;
using PlaystationApi.Models;
using System.Linq;
using System.Collections.Generic;

namespace PlaystationApi.Services{
    public class GamesService {
        private readonly IMongoCollection<Game> _games;
        public GamesService(IPlaystationDatabaseSettings settings){
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );

            _games = database.GetCollection<Game>( settings.GamesCollectionName );
        }
        public List<Game> Get(){
            return _games.Find( game => true ).ToList();
        }
        public Game Get(string id){
            return _games.Find( game => game.Id == id ).SingleOrDefault();
        }

        public Game Create(Game game){
            _games.InsertOne(game);
            return game;
        }

        public void Remove(string id){
            _games.DeleteOne( game => game.Id == id );
        }

        public void Update( Game gameIn ){
            _games.ReplaceOne( game => game.Id == gameIn.Id, gameIn );
        }
    }
}