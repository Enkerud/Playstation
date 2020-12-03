using PlaystationApi.Models;
using PlaystationApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace PlaystationApi.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class LocationsController : ControllerBase {
        private readonly LocationsService _locationsService;

        public LocationsController(LocationsService locationsService){
            _locationsService = locationsService;
        }

        [HttpGet]
        public ActionResult<List<Location>> Get(){
            return _locationsService.Get();
        }

        [HttpGet("{id:length(24)}")]
        public ActionResult<Location> Get([FromRoute] string id) {
        return _locationsService.Get(id);
}

        [HttpPost]
       
        public ActionResult<Location> Post(Location location){
            _locationsService.Create( location );
            return location;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var location = _locationsService.Get( id );

            if( location == null){
                return NotFound();
            }

            _locationsService.Remove( location.Id );
            return NoContent();
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Location locationIn){
            var selectedLocation = _locationsService.Get(id);

            if( selectedLocation == null){
                return NotFound();
            }

            _locationsService.Update(id, locationIn );

            return NoContent();
        }

    }

}