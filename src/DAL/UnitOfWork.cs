using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using DAL.Repositories.Interfaces;
using FoodOrder.DAL.Repositories.Interfaces;
using FoodOrder.DAL.Repositories;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        ICarRepository _cars;



        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public ICarRepository Cars
        {
            get
            {
                if (_cars == null)
                    _cars = new CarsRepository(_context);

                return _cars;
            }
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
