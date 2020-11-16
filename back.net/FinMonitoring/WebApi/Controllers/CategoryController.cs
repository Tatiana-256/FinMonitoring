using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public ActionResult<List<Category>> Get()
        {
            var newCategory = new Category
            {
                CategoryName = "milk"
            };
            _categoryService.Create(newCategory);

            return _categoryService.Get();
        }


        // POST: api/Funds
        [HttpPost]
        public ActionResult<Category> Create(Category category)
        {
            _categoryService.Create(category);
            return CreatedAtRoute("GetCategory", new { id = category.Id.ToString() }, category);
        }

    }
}
