﻿namespace Trello.Models
{
    public class TaskItem
    {
        public String? Exercise { get; set; }
        public Int32 Check { get; set; }
        public Int32 Fixed { get; set; }
        public Int32 Comment { get; set; }
        public String? AvatarURL { get; set; }
    }
}