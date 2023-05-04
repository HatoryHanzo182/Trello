using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using Trello.Models;

namespace Trello.Controllers
{
    public class BoardController : Controller
    {
        private readonly ILogger<BoardController> _logger;
        private Models.Task _task = new Models.Task();

        public BoardController(ILogger<BoardController> logger)
        {
            _logger = logger;

            _task.Items.Add(new Models.TaskItem()
            {
                Exercise = "sdksdjksjdkhxcuf dfhd dfhsuh hufns duhsuhc ohgm,t xhcn efjif ddfgh !ijfidj furhfuhduukxjhds",
                Check = 9,
                Fixed = 1,
                Comment = 0,
                AvatarURL = "img/avatar_3.png"
            });
            _task.Items.Add(new Models.TaskItem()
            {
                Exercise = "sdksdjksjdkhxcuf dfhd dfhsuh hufns duhsuhc ohgm,t xhcn efjif ",
                Check = 1,
                Fixed = 0,
                Comment = 0,
                AvatarURL = "img/avatar_1.png"
            });
        }

        public IActionResult Board()
        {
            return View(_task); 
        }

        [HttpPost]
        public IActionResult AddNewTaskItem([FromBody] TaskItem item)
        {
            _task.Items.Add(new Models.TaskItem()
            {
                Exercise = item.Exercise,
                Check = item.Check,
                Fixed = item.Fixed,
                Comment = item.Comment,
                AvatarURL = "img/avatar_1.png"
            });
            return Ok();
        }
    }
}