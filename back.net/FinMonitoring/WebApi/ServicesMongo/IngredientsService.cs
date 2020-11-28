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
        private readonly IMongoCollection<IngredientMongo> _ingredients;

        public IngredientsService(IFinMonitoringDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _ingredients = database.GetCollection<IngredientMongo>(settings.IngredientsCollectionName);
        }

        public List<IngredientMongo> Get() =>
            _ingredients.Find(i => true).ToList();

        public IngredientMongo Get(string id) =>
            _ingredients.Find<IngredientMongo>(i => i.Id == id).FirstOrDefault();

        public IngredientMongo Create(IngredientMongo ingredient)
        {
            _ingredients.InsertOne(ingredient);
            return ingredient;
        }

        public void Update(string id, IngredientMongo ingredientIn) =>
            _ingredients.ReplaceOne(i => i.Id == id, ingredientIn);

        public void Remove(IngredientMongo ingredientIn) =>
            _ingredients.DeleteOne(i => i.Id == ingredientIn.Id);

        public void Remove(string id) =>
            _ingredients.DeleteOne(i => i.Id == id);
    }
}
