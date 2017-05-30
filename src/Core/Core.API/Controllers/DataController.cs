using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Core.API.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        // private static string[] Summaries = new[]
        // {
        //     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        // };

        public class WeatherType
        {
            public string Name { get; set; }
        }

        private static WeatherType[] Summaries = new[]
        {
            new WeatherType(){Name="Freezing"}
        };

        [HttpGet]
        public JsonResult Get()
        {
            return Json(new WeatherType(){Name="Freezing"});//Summaries.ToList());
        }
    
        // [HttpGet("[action]")]
        // public IEnumerable<WeatherForecast> WeatherForecasts()
        // {
        //     var rng = new Random();
        //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //     {
        //         DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
        //         TemperatureC = rng.Next(-20, 55),
        //         Summary = Summaries[rng.Next(Summaries.Length)]
        //     });
        // }

        // public class WeatherForecast
        // {
        //     public string DateFormatted { get; set; }
        //     public int TemperatureC { get; set; }
        //     public string Summary { get; set; }

        //     public int TemperatureF
        //     {
        //         get
        //         {
        //             return 32 + (int)(TemperatureC / 0.5556);
        //         }
        //     }
        // }
    }
}
