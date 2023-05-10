namespace Trello.Models
{
    public class Task
    {
        public Guid? Id { get; set; }
        public String? TaskTitle { get; set; }
        public List<TaskItem> Items { get; set; }

        public Task()
        {
            Items = new List<TaskItem>();
        }
    }
}