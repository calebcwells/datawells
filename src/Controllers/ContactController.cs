using System;
using Microsoft.AspNetCore.Mvc;

namespace DataWells.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        [HttpGet("[action]")]
        public int CurrentYear()
        {
            return DateTime.Now.Year;
        }
    }
}