using System.ComponentModel.DataAnnotations;

namespace Trello.DATA.Entity
{
    public class Task
    {
        [Key]
        public Guid Id { get; set; }
        public string? TaskTitle { get; set; }
        public List<TaskItem> Items { get; set; } = null!;
    }
}