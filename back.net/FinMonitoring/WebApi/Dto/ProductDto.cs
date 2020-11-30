using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Dto
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public byte[] Image { get; set; }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }


    }
}
