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
    
        public IngredientsController(IngredientsService ingredientsService)
        {
            _ingredientsService = ingredientsService;
        }

        // GET: api/Ingredients
        [HttpGet]
        public ActionResult<List<Ingredient>> Get()
        {

            var ingredient = new Ingredient
            {
                IngredientName = "Milk"
            };
            _ingredientsService.Create(ingredient);

            return _ingredientsService.Get();
        }

        // GET: api/Ingredients/5
        [HttpGet("{id:length(24)}", Name = "GetIngredient")]
        public ActionResult<Ingredient> Get(string id)
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
        public ActionResult<Ingredient> Create(Ingredient ingredient)
        {

            _ingredientsService.Create(ingredient);

            return CreatedAtRoute("GetIngredient", new { id = ingredient.Id.ToString() }, ingredient);
        }

        // PUT: api/Ingredients/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Ingredient value)
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
