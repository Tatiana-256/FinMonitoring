﻿using System.Collections.Generic;

namespace Domain
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public byte[] Image { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public IList<IngredientProduct> IngredientProduct { get; set; }
        public IList<ProductPurchase> ProductPurchases { get; set; }

    }
}
