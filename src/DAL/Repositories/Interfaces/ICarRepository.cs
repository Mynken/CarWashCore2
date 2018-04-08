using DAL.Repositories.Interfaces;
using FoodOrder.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FoodOrder.DAL.Repositories.Interfaces
{
    public interface ICarRepository : IRepository<CarInfo>
    {
        void Delete(CarInfo car);
        void AddCar(CarInfo car);
        void UpdateCar(CarInfo car);
    }
}