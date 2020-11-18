using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class IngredientsService
    {
        private readonly IMongoCollection<Ingredient> _ingredients;

        public IngredientsService(IFinMonitoringDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _ingredients = database.GetCollection<Ingredient>(settings.IngredientsCollectionName);
        }

        public List<Ingredient> Get() =>
            _ingredients.Find(i => true).ToList();

        public Ingredient Get(string id) =>
            _ingredients.Find<Ingredient>(i => i.Id == id).FirstOrDefault();

        public Ingredient Create(Ingredient ingredient)
        {
            _ingredients.InsertOne(ingredient);
            return ingredient;
        }

        public void Update(string id, Ingredient ingredientIn) =>
            _ingredients.ReplaceOne(i => i.Id == id, ingredientIn);

        public void Remove(Ingredient ingredientIn) =>
            _ingredients.DeleteOne(i => i.Id == ingredientIn.Id);

        public void Remove(string id) =>
            _ingredients.DeleteOne(i => i.Id == id);
    }
}
