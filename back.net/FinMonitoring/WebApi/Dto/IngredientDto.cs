using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Dto
{
    public class IngredientDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public double Amount { get; set; }

        public int MeasurementId { get; set; }
        //public Measurement Measurement { get; set; }

        //public IList<IngredientHistory> IngredientHistory { get; set; }
    }
}
