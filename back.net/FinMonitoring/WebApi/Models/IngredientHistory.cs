using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class IngredientHistory
    {
        public int Id { get; set; }
        public double AmountFrom { get; set; }
        public double AmountTo { get; set; }

        public int IngregientId { get; set; }
        public Ingredient Ingredient { get; set; }

        public int? SupplyingId { get; set; }
        public Supplying Supplying { get; set; }
        //OperationTypeId
    }
}
