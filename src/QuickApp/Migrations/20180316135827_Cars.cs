using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace QuickApp.Migrations
{
    public partial class Cars : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CarInfos",
                columns: table => new
                {
                    CarId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArrivalTime = table.Column<DateTime>(nullable: false),
                    Color = table.Column<string>(nullable: true),
                    Cost = table.Column<int>(nullable: false),
                    Faktura = table.Column<bool>(nullable: false),
                    Model = table.Column<string>(nullable: true),
                    PaidConfirmed = table.Column<bool>(nullable: false),
                    Payment = table.Column<string>(nullable: true),
                    PickUpTime = table.Column<DateTime>(nullable: true),
                    Registration = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    TakeConfirmed = table.Column<bool>(nullable: false),
                    TypeOfCar = table.Column<string>(nullable: true),
                    WashType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarInfos", x => x.CarId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarInfos");
        }
    }
}
