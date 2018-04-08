using System;

namespace DAL.Core
{
    public enum Gender
    {
        None,
        Female,
        Male
    }

    public enum Payment
    {
        Cash = 1,
        Card = 2
    }

    public enum Service
    {
        TouchlessWashing = 1, // Mycie bezdotykowe
        Handwashing = 2,      // Mycie ręcznę
        Vacuuming = 3,        // Odkurzanie
        Standard = 4,         // Standard
        Optimum = 5,          // Optimum
        Premium = 6,          // Premium
        Full = 7,             // Full
        Washing = 8,          // Pranie
        Vulcanization = 9    // Wulkanizacja
    }

    public enum Status
    {
        Waiting = 1,
        InWork = 2,
        Finished = 3
    }

    public enum CarType
    {
        Sedan = 1,
        Hatchback = 2,
        Kombi = 3,
        SportoweCoupe = 4,
        Kabriolet = 5,
        Limuzyna = 6,
        Pickup = 7,
        Terenowe = 8,
        VanMinibus = 9,
        SUV = 10
    }
}