namespace MyOrderServiceAPI.Models
{
    public class Order
    {
        public Order(int id, string senderCity, string senderAddress, string recipientCity, string recipientAddress, double weight, DateTime dateDispatch)
        {
            Id = id;
            SenderCity = senderCity;
            SenderAddress = senderAddress;
            RecipientCity = recipientCity;
            RecipientAddress = recipientAddress;
            Weight = weight;
            DateDispatch = dateDispatch;
        }

        public int Id { get; set; }
        public string SenderCity { get; set; }
        public string SenderAddress {  get; set; }
        public string RecipientCity { get; set; }
        public string RecipientAddress { get; set; }
        public double Weight { get; set; }
        public DateTime DateDispatch {  get; set; }
    }
}
