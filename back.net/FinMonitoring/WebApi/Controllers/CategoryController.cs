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
                  return _categoryService.Get();
        }


        // GET: api/Category/5
        [HttpGet("{id:length(24)}", Name = "GetCategory")]
        public ActionResult<Category> Get(string id)
        {
            var category = _categoryService.Get(id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }



        // POST: api/Category
        [HttpPost]
        public ActionResult<Category> Create(Category category)
        {
            _categoryService.Create(category);
            return CreatedAtRoute("GetCategory", new { id = category.Id.ToString() }, category);
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Category value)
        {
            _categoryService.Update(id, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _categoryService.Remove(id);
        }

    }
}
