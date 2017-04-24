using System.Collections.Generic;

namespace Core.Repository
{
    public interface IRepository<T>
    {
        void Add(T item);
        IEnumerable<T> GetAll();
        T Find(string key);
        T Remove(string key);
        void Update(T item);
    }
}