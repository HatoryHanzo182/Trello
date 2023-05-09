namespace Trello.Models
{
    public class Board
    {
        public List<Task> Tasks { get; set; }

        public Board()
        {
            Tasks = new List<Task>();
        }
    }   
}
