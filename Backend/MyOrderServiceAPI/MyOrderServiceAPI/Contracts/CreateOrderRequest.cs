using System.ComponentModel.DataAnnotations;

namespace MyOrderServiceAPI.Contracts
{
    public record CreateOrderRequest([Required] string SenderCity, [Required] string SenderAddress, [Required] string RecipientCity, [Required] string RecipientAddress, [Required] double Weight, [Required] DateTime DateDispatch);
}
