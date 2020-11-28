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

    public class IngredientsController : ControllerBase
    {

        private readonly IngredientsService _ingredientsService;
        private ApplicationContext db;

        public IngredientsController(IngredientsService ingredientsService, ApplicationContext context)
        {
            _ingredientsService = ingredientsService;
            db = context;
        }

        // GET: api/Ingredients
        [HttpGet]
        public async Task<ActionResult<List<IngredientMongo>>> Get()
        {

            db.Add(new User() { Name = "Alex", Age = 25, Number = 50 });
            await db.SaveChangesAsync();

            return _ingredientsService.Get();
        }

        // GET: api/Ingredients/5
        [HttpGet("{id:length(24)}", Name = "GetIngredient")]
        public ActionResult<IngredientMongo> Get(string id)
        {
            var ingredient = _ingredientsService.Get(id);

            if (ingredient == null)
            {
                return NotFound();
            }

            return ingredient;
        }

        // POST: api/Ingredients
        [HttpPost]
        public ActionResult<IngredientMongo> Create(IngredientMongo ingredient)
        {

            _ingredientsService.Create(ingredient);

            return CreatedAtRoute("GetIngredient", new { id = ingredient.Id.ToString() }, ingredient);
        }

        // PUT: api/Ingredients/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] IngredientMongo value)
        {
            _ingredientsService.Update(id, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _ingredientsService.Remove(id);
        }


    }
}
