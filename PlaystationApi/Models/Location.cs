using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PlaystationApi.Models{

    public class Location{

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Game { get; set; }
     

    }

}