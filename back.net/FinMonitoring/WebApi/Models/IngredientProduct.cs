using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class IngredientProduct
    {
        public double Amount { get; set; }

        public int IngredientId { get; set; }
        public Ingredient Ingredient { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
