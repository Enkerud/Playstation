using PlaystationApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace PlaystationApi.Services {
    public class LocationsService {
        private readonly IMongoCollection<Location> _locations;
        public LocationsService(IPlaystationDatabaseSettings settings){
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );

            _locations = database.GetCollection<Location>( settings.LocationsCollectionName );
        }

        public List<Location> Get(){
            return _locations.Find( location => true ).ToList();
        }

        public Location Get(string id){
            return _locations.Find( location => location.Id == id).SingleOrDefault();
        }

        public Location Create(Location location){
            _locations.InsertOne(location);
            return location;
        }

        public void Remove(string id){
            _locations.DeleteOne( location => location.Id == id );
        }

        public void Update(string id, Location locationIn){
            _locations.ReplaceOne( location => location.Id == id, locationIn );
        }
    }
}