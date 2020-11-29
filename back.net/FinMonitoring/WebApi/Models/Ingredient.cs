using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        
        public string Name { get; set; }

        public double Amount { get; set; }
        public double Price { get; set; }


        public int MeasurementId { get; set; }
        public Measurement Measurement { get; set; }

        public IList<IngredientProduct> IngredientProduct { get; set; }

        public IList<IngredientHistory> IngredientHistory { get; set; }

    

    }
}
