using Microsoft.EntityFrameworkCore;
using MyOrderServiceAPI.DataAccess;

namespace MyOrderServiceAPI.ApplicationLayer
{
    public class IdGenerationService
    {
        private readonly OrdersDbContext _dbContext;

        public IdGenerationService(OrdersDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int GenerateUniqueRandomId(int min, int max)
        {
            int newId;
            var random = new Random();

            do
            {
                newId = random.Next(min, max);
            }
            while (IdExists(newId));

            return newId;
        }

        private bool IdExists(int id)
        {
            return _dbContext.Orders.Any(e => e.Id == id);
        }
    }
}
