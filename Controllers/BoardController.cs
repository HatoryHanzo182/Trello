using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using Trello.Models;

namespace Trello.Controllers
{
    public class BoardController : Controller
    {
        private readonly ILogger<BoardController> _logger;

        public BoardController(ILogger<BoardController> logger)
        {
            _logger = logger;
        }

        public IActionResult Board()
        {
            Models.Task task = new Models.Task();

            task.Items.Add(new Models.TaskItem()
            {
                Exercise = "sdksdjksjdkhxcuf dfhd dfhsuh hufns duhsuhc ohgm,t xhcn efjif ddfgh !ijfidj furhfuhduukxjhds",
                Check = 9,
                Fixed = 1,
                Comment = 0,
                AvatarURL = "img/avatar_3.png"
            });
            task.Items.Add(new Models.TaskItem()
            {
                Exercise = "sdksdjksjdkhxcuf dfhd dfhsuh hufns duhsuhc ohgm,t xhcn efjif ",
                Check = 1,
                Fixed = 0,
                Comment = 0,
                AvatarURL = "img/avatar_1.png"
            });

            return View(task); 
        }
    }
}
