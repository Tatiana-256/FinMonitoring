using System.Collections.Generic;

namespace Domain
{
    public class TypeOfOperatoin
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<IngredientHistory> IngredientHistories { get; set; }

    }
}
