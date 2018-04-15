using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using Microsoft.Extensions.Logging;
using AutoMapper;
using FoodOrder.DAL.Models;

namespace CarWashApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Cars")]
    public class CarController : Controller
    {
        private IUnitOfWork _unitOfWork;
        readonly ILogger _logger;

        public CarController(IUnitOfWork unitOfWork, ILogger<CarController> logger)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var allCars = _unitOfWork.Cars.GetAll();
            return Ok(allCars);
        }

        [HttpGet("{id}")]
        public IActionResult GetCar(int id)
        {
            var car = _unitOfWork.Cars.Get(id);
            return new ObjectResult(car);
        }

        [HttpGet("users/{registration}")]
        public IActionResult GetCar(string registration)
        {
            var allCars = _unitOfWork.Cars.GetAll();
            foreach (var item in allCars)
            {
                if(item.Registration == registration)
                {
                    return new ObjectResult(item);
                }
            }
            return this.NotFound("404");
        }

        [HttpPut]
        public IActionResult Update([FromBody]CarInfo car)
        {
            _unitOfWork.Cars.UpdateCar(car);
            return Ok();
        }
        [HttpPost]
        public IActionResult Add([FromBody]CarInfo car)
        {
            _unitOfWork.Cars.AddCar(car);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var car = _unitOfWork.Cars.Get(id);
            _unitOfWork.Cars.Delete(car);
            return Ok();
        }

    }
}