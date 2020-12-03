using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PlaystationApi.Models{

    public class Character{

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Image { get; set; }
        public string Desc { get; set; }
        public string Weapon { get; set; }
        public string Alias { get; set; }
        public string Enemy { get; set; }
        public string Game { get; set; }
        public string Race { get; set; }
        public string Nationality { get; set; }
        public bool Morale { get; set; }


    }

}