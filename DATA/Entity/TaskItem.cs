namespace Trello.DATA.Entity
{
    public class TaskItem
    {
        public Guid Id { get; set; }
        public String? Exercise { get; set; }
        public Int32 Check { get; set; }
        public Int32 Fixed { get; set; }
        public Int32 Comment { get; set; }
        public String? AvatarURL { get; set; }
    }
}
