using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class CategoryService
    {
        private readonly IMongoCollection<Category> _caregories;

        public CategoryService(IFinMonitoringDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _caregories = database.GetCollection<Category>(settings.CategoryCollectionName);
        }

        public List<Category> Get() =>
            _caregories.Find(fund => true).ToList();

        public Category Get(string id) =>
            _caregories.Find<Category>(fund => fund.Id == id).FirstOrDefault();

        public Category Create(Category category)
        {
            _caregories.InsertOne(category);
            return category;
        }

        public void Update(string id, Category categoryIn) =>
            _caregories.ReplaceOne(c => c.Id == id, categoryIn);

        public void Remove(Category categoryIn) =>
            _caregories.DeleteOne(c => c.Id == categoryIn.Id);

        public void Remove(string id) =>
            _caregories.DeleteOne(c => c.Id == id);
    }
}
