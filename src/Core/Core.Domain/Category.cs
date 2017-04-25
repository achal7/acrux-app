using System.Collections.Generic;

namespace Core.Domain
{
    public class Category
    {
        public string Id { get; set; }
        public string Name { get; set; }    
        public List<Todo> Todos { get; set; }    
    }
}