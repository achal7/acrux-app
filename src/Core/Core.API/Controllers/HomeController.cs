using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Core.API.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger _logger;
        public HomeController(ILogger<HomeController> logger)
        {
            this._logger = logger;
        }   
        public string Index()
        {
            _logger.LogInformation(LoggingEvents.GET_ITEM, "Getting item {ID}", 1);
            return "home data";
        }     
    }
}