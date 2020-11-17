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