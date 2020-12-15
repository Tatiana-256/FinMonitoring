using System.Collections.Generic;

namespace Domain
{
    public class Measurement
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public IList<Ingredient> Ingredients { get; set; }

    }
}
