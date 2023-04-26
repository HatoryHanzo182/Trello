using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Trello.Controllers
{
    public class BoardController : Controller
    {
        private readonly ILogger<BoardController> _logger;

        public BoardController(ILogger<BoardController> logger)
        {
            _logger = logger;
        }

        public IActionResult Board() { return View(); }
    }
}
