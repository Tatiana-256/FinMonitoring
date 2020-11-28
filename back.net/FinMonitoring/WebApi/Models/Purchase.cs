using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Purchase
    {
        public int Id { get; set; }
        public DateTime Date {get; set;}
        public double TotalPrice{ get; set; }
        public bool IsError { get; set; }
        public string MessageError { get; set; }
        public string AdditionalComment { get; set; }
        public bool? WithoutPayment { get; set; }


        public IList<ProductPurchase> ProductPurchase { get; set; }

   

    }
}
