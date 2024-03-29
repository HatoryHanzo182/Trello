﻿using Microsoft.EntityFrameworkCore;

namespace Trello.DATA
{
    public class DataContext : DbContext
    {
        public DbSet<Entity.Task> Task { get; set; }
        public DbSet<Entity.TaskItem> TaskItems { get; set; }

        public DataContext(DbContextOptions options) : base(options) { }    
    }
}