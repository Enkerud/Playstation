using PlaystationApi.Models;
using PlaystationApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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

        [HttpPut]
        public IActionResult Put(Game gameIn){
            var game = _gamesService.Get( gameIn.Id );

            if( game == null){
                return NotFound();
            }

            _gamesService.Update( game );
            return NoContent();
        }

    }

}