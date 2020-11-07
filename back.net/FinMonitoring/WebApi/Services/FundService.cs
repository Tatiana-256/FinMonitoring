using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class FundService
    {
        private readonly IMongoCollection<Fund> _funds;

        public FundService(IFinMonitoringDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _funds = database.GetCollection<Fund>(settings.FundsCollectionName);
        }

        public List<Fund> Get() =>
            _funds.Find(fund => true).ToList();

        public Fund Get(string id) =>
            _funds.Find<Fund>(fund => fund.Id == id).FirstOrDefault();

        public Fund Create(Fund fund)
        {
            _funds.InsertOne(fund);
            return fund;
        }

        public void Update(string id, Fund fundIn) =>
            _funds.ReplaceOne(book => book.Id == id, fundIn);

        public void Remove(Fund fundIn) =>
            _funds.DeleteOne(fund => fund.Id == fundIn.Id);

        public void Remove(string id) =>
            _funds.DeleteOne(book => book.Id == id);
    }
}
