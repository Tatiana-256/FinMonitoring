using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistence;
using WebApi.Dto;
using WebApi.Models;

namespace WebApi.Services
{
    public class ProductService
    {
        private ApplicationContext db;
        public ProductService(ApplicationContext context)
        {
            db = context;
        }

        public ResponseWrapper<IEnumerable<ProductDto>> GetAllProducts()
        {
            try
            {
                var productsDto = db.Products.ToList().Select(x => new ProductDto { Id = x.Id, Name = x.Name });
                return new ResponseWrapper<IEnumerable<ProductDto>>()
                {
                    Data = productsDto,
                    IsError = false,
                    Message = "Success"
                };

            }
            catch (Exception e)
            {
                return new ResponseWrapper<IEnumerable<ProductDto>>()
                {
                    IsError = true,
                    Message = e.Message
                };
            }
        }
    }
}
