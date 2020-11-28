﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class FinMonitoringDatabaseSettings : IFinMonitoringDatabaseSettings
    {
        public string FundsCollectionName { get; set; }
        public string CategoryCollectionName { get; set; }
        public string ProductCollectionName { get; set; }

        public string IngredientsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IFinMonitoringDatabaseSettings
    {
        string FundsCollectionName { get; set; }
        string CategoryCollectionName { get; set; }
        string ProductCollectionName { get; set; }
        string IngredientsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}