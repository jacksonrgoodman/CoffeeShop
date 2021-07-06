using CoffeeShop.Models;
using System.Collections.Generic;

namespace CoffeeShop.Repository
{
    public interface ICoffeeRepository
    {
        void Add(Coffee variety);
        void Delete(int id);
        Coffee Get(int id);
        List<Coffee> GetAll();
        void Update(Coffee variety);
    }
}