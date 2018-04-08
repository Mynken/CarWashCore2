using DAL;
using DAL.Repositories;
using FoodOrder.DAL.Models;
using FoodOrder.DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FoodOrder.DAL.Repositories
{
    public class CarsRepository : Repository<CarInfo>, ICarRepository
    {
        public CarsRepository(DbContext context) : base(context)
    { }
        public void Delete(CarInfo car)
        {
            _appContext.CarInfos.Remove(car);
            _appContext.SaveChanges();
        }
        public void AddCar(CarInfo car)
        {
            _appContext.CarInfos.Add(car);
            _appContext.SaveChanges();
        }
        public void UpdateCar(CarInfo car)
        {
            _appContext.CarInfos.Update(car);
            _appContext.SaveChanges();
        }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}