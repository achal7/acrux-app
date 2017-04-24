using Core.Domain;
using System;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace Core.Repository
{
    public class CategoryRepository:IRepository<Category>
    {
        private static ConcurrentDictionary<string, Category> _todos =
        new ConcurrentDictionary<string, Category>();

        public CategoryRepository()
        {
            Add(new Category { Name = "Item1" });
        }

        public IEnumerable<Category> GetAll()
        {
            return _todos.Values;
        }

        public void Add(Category item)
        {
            item.Id = Guid.NewGuid().ToString();
            _todos[item.Id] = item;
        }

        public Category Find(string key)
        {
            Category item;
            _todos.TryGetValue(key, out item);
            return item;
        }

        public Category Remove(string key)
        {
            Category item;
            _todos.TryRemove(key, out item);
            return item;
        }

        public void Update(Category item)
        {
            _todos[item.Id] = item;
        }
    }
}