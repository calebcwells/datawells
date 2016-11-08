using Microsoft.AspNetCore.Mvc;

namespace DataWells.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
