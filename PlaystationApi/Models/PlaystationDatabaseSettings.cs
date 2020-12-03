namespace PlaystationApi.Models{

    public interface IPlaystationDatabaseSettings{
        string GamesCollectionName { get; set; }
        string CharactersCollectionName { get; set; }
        string LocationsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class PlaystationDatabaseSettings : IPlaystationDatabaseSettings {
        public string GamesCollectionName { get; set; }
        public string CharactersCollectionName { get; set; }
        public string LocationsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

}