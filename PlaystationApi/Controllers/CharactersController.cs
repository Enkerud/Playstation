using PlaystationApi.Models;
using PlaystationApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace PlaystationApi.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase {
        private readonly CharactersService _charactersService;

        public CharactersController(CharactersService charactersService){
            _charactersService = charactersService;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get(){
            return _charactersService.Get();
        }

        [HttpGet("{id:length(24)}")]
        public ActionResult<Character> Get([FromRoute] string id) {
        return _charactersService.Get(id);
}

        [HttpPost]
       
        public ActionResult<Character> Post(Character character){
            _charactersService.Create( character );
            return character;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var character = _charactersService.Get( id );

            if( character == null){
                return NotFound();
            }

            _charactersService.Remove( character.Id );
            return NoContent();
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Character characterIn){
            var selectedCharacter = _charactersService.Get(id);

            if( selectedCharacter == null){
                return NotFound();
            }

            _charactersService.Update(id, characterIn );

            return NoContent();
        }

    }

}