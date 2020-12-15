using System;
using System.Collections.Generic;

namespace Domain
{
    public class Supplying
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public decimal Price { get; set; }
        public IList<IngredientHistory> IngredientHistory { get; set; }

        public int IngredientId { get; set; }
        public Product Product { get; set; }


    }
}
