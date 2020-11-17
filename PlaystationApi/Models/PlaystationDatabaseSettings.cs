namespace PlaystationApi.Models{

    public interface IPlaystationDatabaseSettings{
        string GamesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class PlaystationDatabaseSettings : IPlaystationDatabaseSettings {
        public string GamesCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

}