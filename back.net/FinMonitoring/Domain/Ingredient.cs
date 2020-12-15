using System.Collections.Generic;

namespace Domain
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Amount { get; set; }
        public double Price { get; set; }

        public IList<IngredientProduct> IngredientProduct { get; set; }

        public IList<IngredientHistory> IngredientHistory { get; set; }

        public int MeasurementId { get; set; }
        public Measurement Measurement { get; set; }
    }
}
