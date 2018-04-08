using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FoodOrder.DAL.Models
{
    public class CarInfo
    {
        [Key]
        public int CarId { get; set; }

        public string Model { get; set; }

        public int TypeOfCar { get; set; }

        public int Color { get; set; }

        public string Registration { get; set; }

        public DateTime ArrivalTime { get; set; }

        public DateTime? PickUpTime { get; set; }

        public int WashType { get; set; }

        public int Cost { get; set; }

        public bool PaidConfirmed { get; set; }

        public bool TakeConfirmed { get; set; }

        public bool Faktura { get; set; }

        public int Payment { get; set; }

        public int Status { get; set; }
    }
}
