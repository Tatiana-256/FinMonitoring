using System;

namespace Domain
{
    public class IngredientHistory
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public double AmountFrom { get; set; }
        public double AmountTo { get; set; }

        public int IngregientId { get; set; }
        public Ingredient Ingredient { get; set; }

        public int? SupplyingId { get; set; }
        public Supplying Supplying { get; set; }

        public int TypeOfOperatoinId { get; set; }
        public TypeOfOperatoin TypeOfOperatoin { get; set; }
    }
}
