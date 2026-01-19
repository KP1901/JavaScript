const FleetManager = {
  generateReport: function (Vehicle) {
    console.log(
      `${Vehicle.type} traveled ${FleetManager.carTraveled} | Fuel left: ${FleetManager.fuelLeft} | Maintenance: $${FleetManager.Maintenance}`
    );
  },
};

function Vehicle(type, mileage, fuelLevel, maintenance) {
  this.type = type;
  this.mileage = mileage;
  this.fuelLevel = fuelLevel;
  this.maintenance = maintenance;
}

Vehicle.prototype.start = function () {
  console.log(`${this.type} Started`);
};

Vehicle.prototype.trip = function (distance) {
  if (this.fuelLevel <= 0) {
    console.log("no fuel");
  }
  let fuelUsedPerKm = 1;
  let carTraveled = fuelUsedPerKm * distance;
  FleetManager["carTraveled"] = carTraveled;
  let fuelLevel = this.fuelLevel - distance;
  let mileage = this.mileage + distance;
  FleetManager["Mileage"] = mileage;
  let maintenance = distance * 0.5;
  FleetManager["Maintenance"] = maintenance;

  console.log(
    `${this.type} traveled ${distance} km. Fuel Level left: ${fuelLevel}`
  );
};
Vehicle.prototype.refuel = function (amount) {
  let fuelLevel = this.fuelLevel + amount - FleetManager.carTraveled;
  FleetManager["fuelLeft"] = fuelLevel;
  console.log(`${this.type} refueled. Fuel Level: ${fuelLevel}`);
};

Vehicle.prototype.stop = function () {
  console.log(`${this.type} Stopped`);
  FleetManager.generateReport(this, this.type, this.maintenance);
};

const car = new Vehicle("car", 0, 100, 0);

console.log(car);
car.start();
car.trip(30);
car.refuel(20);
car.stop();
console.log(FleetManager);

const truck = new Vehicle("truck", 0, 100, 0);

console.log(truck);
truck.start();
truck.trip(60);
truck.refuel(30);
truck.stop();
console.log(FleetManager);
