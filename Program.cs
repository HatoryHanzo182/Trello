using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Trello.DATA;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();  // Add services to the container.
builder.Services.AddScoped<Trello.Models.Task>();
builder.Services.AddDbContext<DataContext>(Options => Options.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;Initial Catalog=efDataTrello;Integrated Security=True"));

var app = builder.Build();


if (!app.Environment.IsDevelopment())  // Configure the HTTP request pipeline.
{
    app.UseExceptionHandler("/Home/Error");  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllerRoute(name: "default", pattern: "{controller=Board}/{action=Board}/{id?}");
app.Run();