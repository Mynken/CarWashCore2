using DAL.Repositories.Interfaces;
using FoodOrder.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IUnitOfWork
    {
        ICarRepository Cars { get; }

        int SaveChanges();
    }
}
