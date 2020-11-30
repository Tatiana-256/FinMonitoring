﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class TypeOfOperatoin
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<IngredientHistory> IngredientHistories { get; set; }

    }
}
