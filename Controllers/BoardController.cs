using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using Trello.DATA;
using Trello.Models;

namespace Trello.Controllers
{
    public class BoardController : Controller
    {
        private readonly ILogger<BoardController> _logger;
        private readonly DataContext _context;
        private Models.Task _task;

        public BoardController(ILogger<BoardController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
            _task = new Models.Task();
        }

        public IActionResult Board()
        {
            var task_item = _context.TaskItems.ToList();

            _task = new Models.Task()
            {
                Items = task_item.Select(ti => new Models.TaskItem()
                {
                    Exercise = ti.Exercise,
                    Check = ti.Check,
                    Fixed = ti.Fixed,
                    Comment = ti.Comment,
                    AvatarURL = ti.AvatarURL
                }).ToList()
            };

            return View(_task); 
        }

        [HttpPost]
        public IActionResult AddNewTaskItem([FromBody] TaskItem item)
        {
            if (item is not null)
            {
                if (!String.IsNullOrEmpty(item.Exercise))
                {
                    _context.TaskItems.Add(new Trello.DATA.Entity.TaskItem()
                    {
                        Exercise = item.Exercise,
                        Check = item.Check,
                        Fixed = item.Fixed,
                        Comment = item.Comment,
                        AvatarURL = "img/avatar_1.png"
                    });
                    _context.SaveChanges();
                }
            }
            return Ok();
        }
    }
}