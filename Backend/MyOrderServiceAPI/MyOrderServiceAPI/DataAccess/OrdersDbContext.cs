using Microsoft.EntityFrameworkCore;
using MyOrderServiceAPI.Models;

namespace MyOrderServiceAPI.DataAccess
{
    public class OrdersDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public DbSet<Order> Orders => Set<Order>();

        public OrdersDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Database"));
        }
    }
}
