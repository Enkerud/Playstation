using PlaystationApi.Models;
using PlaystationApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace PlaystationApi.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase {
        private readonly GamesService _gamesService;

        public GamesController(GamesService gamesService){
            _gamesService = gamesService;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get(){
            return _gamesService.Get();
        }

        [HttpPost]
       
        public ActionResult<Game> Post(Game game){
            _gamesService.Create( game );
            return game;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var game = _gamesService.Get( id );

            if( game == null){
                return NotFound();
            }

            _gamesService.Remove( game.Id );
            return NoContent();
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Game gameIn){
            var selectedGame = _gamesService.Get(id);

            if( selectedGame == null){
                return NotFound();
            }

            _gamesService.Update(id, gameIn );

            return NoContent();
        }

    }

}