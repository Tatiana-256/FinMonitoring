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
    public class IngredientService
    {
        private ApplicationContext db;
        public IngredientService(ApplicationContext context)
        {
            db = context;
        }

        public ResponseWrapper<IEnumerable<IngredientDto>> GetAllIngredients()
        {
            try
            {
                var ingredientDto = db.Ingredients.ToList().Select(x => new IngredientDto { Id = x.Id, Name = x.Name });
                return new ResponseWrapper<IEnumerable<IngredientDto>>()
                {
                    Data = ingredientDto,
                    IsError = false,
                    Message = "Success"
                };

            }
            catch (Exception e)
            {
                return new ResponseWrapper<IEnumerable<IngredientDto>>()
                {
                    IsError = true,
                    Message = e.Message
                };
            }
        }

        public async Task<ResponseWrapper<IngredientDto>> Create(CreateIngredientModel newIngredient)
        {
            var ingredient = new Ingredient
            {
                Name = newIngredient.name,
                Measurement = db.Measurements.Find(newIngredient.MeasurementId)
            };
            db.Ingredients.Add(ingredient);
            await db.SaveChangesAsync();
            return new ResponseWrapper<IngredientDto>
            {
                Data = new IngredientDto
                {
                    Id = ingredient.Id,
                    Name = ingredient.Name,
                    MeasurementId = ingredient.MeasurementId
                }
            };
        }



    }
}
