using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dto;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]

    public class CategoryController : ControllerBase

    {
        private readonly CategoryService _categoryService;

        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }


        // GET: api/Category
        [HttpGet]
        public ResponseWrapper<IEnumerable<CategoryDto>> Get()
        {
            return _categoryService.GetAllCategories();
        }

        // POST: api/Category
        [HttpPost]
        public async Task<ResponseWrapper<CategoryDto>> Create([FromBody] string categoryName)
        {
            if(string.IsNullOrEmpty(categoryName))
            {
                return new ResponseWrapper<CategoryDto>
                {
                    IsError = true,
                    Message = "Name cannot be null or empty"
                };
            }

            return await _categoryService.Create(categoryName);
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public async Task<ResponseWrapper<CategoryDto>> Put(int id, [FromBody] string value)
        {
            return await _categoryService.Update(id, value);
        }

        // DELETE: api/Category/5
        [HttpDelete("{id}")]
        public async Task<ResponseWrapper<bool>> Delete(int id)
        {
            return await _categoryService.Delete(id);
        }

    }
}
