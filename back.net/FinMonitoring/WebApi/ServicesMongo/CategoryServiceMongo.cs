using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class CategoryServiceMongo
    {
        private readonly IMongoCollection<CategoryMongo> _caregories;

        public CategoryServiceMongo(IFinMonitoringDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _caregories = database.GetCollection<CategoryMongo>(settings.CategoryCollectionName);
        }

        public List<CategoryMongo> Get() =>
            _caregories.Find(fund => true).ToList();

        public CategoryMongo Get(string id) =>
            _caregories.Find<CategoryMongo>(fund => fund.Id == id).FirstOrDefault();

        public CategoryMongo Create(CategoryMongo category)
        {
            _caregories.InsertOne(category);
            return category;
        }

        public void Update(string id, CategoryMongo categoryIn) =>
            _caregories.ReplaceOne(c => c.Id == id, categoryIn);

        public void Remove(CategoryMongo categoryIn) =>
            _caregories.DeleteOne(c => c.Id == categoryIn.Id);

        public void Remove(string id) =>
            _caregories.DeleteOne(c => c.Id == id);
    }
}
