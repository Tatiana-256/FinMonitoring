using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Fund
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string FundName { get; set; }

        public decimal Amount { get; set; }
        public string Currency { get; set; }

        public decimal Goal { get; set; }

        public List<FundHistory> History { get; set; }


    }

    public class FundHistory
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public decimal Amount { get; set; }
        public string Date { get; set; }

    }
}
