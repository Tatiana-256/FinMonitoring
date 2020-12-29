namespace Domain
{
    public class ProductPurchase
    {
        public int Id { get; set; }
        public double AmountOfProduct { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int PurchaseId { get; set; }
        public Purchase Purchase { get; set; }
    }
}
