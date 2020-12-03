using PlaystationApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace PlaystationApi.Services {
    public class CharactersService {
        private readonly IMongoCollection<Character> _characters;
        public CharactersService(IPlaystationDatabaseSettings settings){
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );

            _characters = database.GetCollection<Character>( settings.CharactersCollectionName );
        }

        public List<Character> Get(){
            return _characters.Find( character => true ).ToList();
        }

        public Character Get(string id){
            return _characters.Find( character => character.Id == id).SingleOrDefault();
        }

        public Character Create(Character character){
            _characters.InsertOne(character);
            return character;
        }

        public void Remove(string id){
            _characters.DeleteOne( character => character.Id == id );
        }

        public void Update(string id, Character characterIn){
            _characters.ReplaceOne( character => character.Id == id, characterIn );
        }
    }
}