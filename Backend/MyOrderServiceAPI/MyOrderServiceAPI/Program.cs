using Microsoft.EntityFrameworkCore;
using MyOrderServiceAPI.ApplicationLayer;
using MyOrderServiceAPI.DataAccess;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddScoped<OrdersDbContext>();
builder.Services.AddScoped<IdGenerationService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(builder.Configuration.GetConnectionString("Frontend"));
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});

var app = builder.Build();

using var scope = app.Services.CreateScope();
await using var dbContext = scope.ServiceProvider.GetRequiredService<OrdersDbContext>();
await dbContext.Database.EnsureCreatedAsync();

app.UseCors();
app.MapControllers();

app.Run();
