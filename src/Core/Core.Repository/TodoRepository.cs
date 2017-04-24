using Core.Domain;
using System;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace Core.Repository
{
    public class TodoRepository:IRepository<Todo>
    {
        private static ConcurrentDictionary<string, Todo> _todos =
        new ConcurrentDictionary<string, Todo>();

        public TodoRepository()
        {
            Add(new Todo { Name = "Item1" });
        }

        public IEnumerable<Todo> GetAll()
        {
            return _todos.Values;
        }

        public void Add(Todo item)
        {
            item.Id = Guid.NewGuid().ToString();
            _todos[item.Id] = item;
        }

        public Todo Find(string key)
        {
            Todo item;
            _todos.TryGetValue(key, out item);
            return item;
        }

        public Todo Remove(string key)
        {
            Todo item;
            _todos.TryRemove(key, out item);
            return item;
        }

        public void Update(Todo item)
        {
            _todos[item.Id] = item;
        }
    }
}