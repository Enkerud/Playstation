using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PlaystationApi.Controllers 
{
    [ApiController]
    [Route("[controller]")]
    public class PlaystationApiController : ControllerBase {

        private readonly IWebHostEnvironment _hosting;

        public PlaystationApiController(IWebHostEnvironment hosting){
            _hosting = hosting;
        }

        [HttpGet]
        public string Get(){
            return "Hei fra UploadApi";
        }

        [HttpPost]
        [Route ("[action]")]
        public void UploadImage( IFormFile file  ){
            string wwwrootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine( $"{wwwrootPath}/images/{file.FileName}" );

            //file.ContentType for sikkerhet om at det er et bilde (jpeg, png, gif)   --- 
            // Guid.getGuid() (generer tilfeldig strenger for bildenavn)   --- finn også ut hvordan sjekke størrelse på fil

            using(var fileStream = new FileStream(absolutePath, FileMode.Create)){
                file.CopyTo( fileStream );
            }
        }

    }
}

