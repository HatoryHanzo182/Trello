using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Xml.Linq;
using Trello.DATA;
using Trello.Models;

namespace Trello.Controllers
{
    public class BoardController : Controller
    {
        private readonly ILogger<BoardController> _logger;
        private readonly DataContext _context;
        private Models.Board _board;
        private Models.Task _task;

        public BoardController(ILogger<BoardController> logger, DataContext context, Models.Task task)
        {
            _logger = logger;
            _context = context;
            _board = new Models.Board();
            _task = task;
        }

        public IActionResult Board()
        {
            var task_items_DB = _context.TaskItems.ToList();
            var task_DB = _context.Task.ToList();

            foreach (var i in task_DB)
            {
                _task = new Models.Task
                {
                    Id = i.Id,
                    TaskTitle = i.TaskTitle,
                    Items = task_items_DB.Where(ti => ti.TaskId == i.Id).Select(ti => new Models.TaskItem
                    {
                        Exercise = ti.Exercise,
                        Check = ti.Check,
                        Fixed = ti.Fixed,
                        Comment = ti.Comment,
                        AvatarURL = ti.AvatarURL,
                        TaskId = ti.TaskId
                    }).ToList()
                };

                _board.Tasks.Add(_task);
            }

            return View(_board);
        }

        [HttpPost]
        public IActionResult AddNewTask([FromBody] Models.Task task)
        {
            if (task is not null && !String.IsNullOrEmpty(task.TaskTitle)) 
            {
                try
                {
                    _context.Task.Add(new DATA.Entity.Task() { TaskTitle = task.TaskTitle });
                    _context.SaveChanges();
                }
                catch { }
            }
            return Ok();
        }

        [HttpPost]
        public IActionResult AddNewTaskItem([FromBody] TaskItem item)
        {
            if (item is not null)
            {
                if (!String.IsNullOrEmpty(item.Exercise) && !String.IsNullOrEmpty(item.AvatarURL))
                {
                    var task = _context.Task.FirstOrDefault(t => t.Id == item.TaskId);
                    
                    if (task is not null) 
                    {
                        _context.TaskItems.Add(new Trello.DATA.Entity.TaskItem()
                        {
                            Exercise = item.Exercise,
                            Check = item.Check,
                            Fixed = item.Fixed,
                            Comment = item.Comment,
                            AvatarURL = item.AvatarURL.Substring(1),
                            TaskId = task.Id
                        });
                        _context.SaveChanges();
                    }
                }
            }
            return Ok();
        }
    }
}