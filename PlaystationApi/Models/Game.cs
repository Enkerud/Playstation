using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PlaystationApi.Models{

    public class Game{

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }
        public string Developer { get; set; }
        public string Characters { get; set; }
        public string Release { get; set; }
        public string Genre { get; set; }
        public string Locations { get; set; }

    }

}