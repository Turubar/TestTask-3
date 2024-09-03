using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyOrderServiceAPI.Contracts;
using MyOrderServiceAPI.DataAccess;
using MyOrderServiceAPI.Models;
using MyOrderServiceAPI.ApplicationLayer;
using System;

namespace MyOrderServiceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly OrdersDbContext _dbContext;
        private readonly IdGenerationService _idGenerationService;

        public OrdersController(OrdersDbContext dbContext, IdGenerationService idGenerationService)
        {
            _dbContext = dbContext;
            _idGenerationService = idGenerationService;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderRequest request)
        {
            try
            {
                int newId = _idGenerationService.GenerateUniqueRandomId(100_000, 1_000_000);
                var newOrder = new Order(newId, request.SenderCity, request.SenderAddress, request.RecipientCity, request.RecipientAddress, request.Weight, request.DateDispatch);

                await _dbContext.Orders.AddAsync(newOrder);
                await _dbContext.SaveChangesAsync();

                return Ok(newOrder);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get")]
        public async Task<IActionResult> GetOrders()
        {
            try
            {
                var orders = await _dbContext.Orders.ToListAsync();
                return Ok(orders);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
