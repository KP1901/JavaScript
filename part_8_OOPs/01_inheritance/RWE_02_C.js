const FleetManager = {
  vehicle: [],
  addVehicle(vehicle) {
    this.vehicle.push(vehicle);
  },
  generateReport(vehicle) {
    console.log(
      `--- ${vehicle.type.toUpperCase()} REPORT ---\n` +
        `Mileage: ${vehicle.mileage} km\n` +
        `Fuel Left: ${vehicle.fuelLevel}\n` +
        `Maintenance Cost: $${vehicle.maintenance}\n`
    );
  },
  // generateSummary() {
  //   let allVehicle = FleetManager.vehicle;
  //   let totalMaintenance = 0;
  //   let longDistance = 0;
  //   let transport = "";

  //   allVehicle.forEach((vehicle) => {
  //     console.log(
  //       `${vehicle.type} traveled ${vehicle.mileage} km | Fuel Left: ${vehicle.fuelLevel} | Maintenance: $${vehicle.maintenance}`
  //     );
  //     totalMaintenance += vehicle.maintenance;
  //     if (vehicle.mileage >= longDistance) {
  //       longDistance = vehicle.mileage;
  //       transport = vehicle.type;
  //     }
  //   });
  //   console.log(`Total Maintenance: ${totalMaintenance}`);
  //   console.log(`Most Used Vehicle: ${transport}`);
  // },
  generateFleetSummary() {
    this.vehicle.forEach((v) => {
      console.log(
        `${v.type} traveled ${v.mileage} km | Fuel Left: ${v.fuelLevel} | Maintenance: $${v.maintenance}`
      );
    });
    let totalMaintenance = this.vehicle.reduce(
      (sum, v) => sum + v.maintenance,
      0
    );
    let mostUsed = this.vehicle.reduce(
      (max, v) => (v.mileage > max.mileage ? v : max),
      this.vehicle[0]
    );
    // max => object => this.vehicle[0]
    // v => object => which is passed

    console.log(`\nTotal Maintenance: $${totalMaintenance}`);
    console.log(`Most Used Vehicle: ${mostUsed.type} (${mostUsed.mileage} km)`);
    console.log("=====================\n");
  },
};

function Vehicle(type, mileage = 0, fuelLevel = 100, maintenance = 0) {
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
    console.log(`${this.type} cannot travel, no fuel!`);
    return;
  }
  let fuelUsedPerKm = 1;
  //   let fuelLevel = fuelUsedPerKm * distance;
  //   let mileage = this.mileage + distance;
  //   FleetManager["Mileage"] = mileage;
  //   let maintenance = distance * 0.5;
  //   FleetManager["Maintenance"] = maintenance;
  //so we are updating the values of car instance usig this process before it was {type = "car", mileage = 0, fuelLevel = 100, maintenance = 0} then we did calculation and updating vlaues accoding to it { mileage = 30 , fuel = 70,  maintenance = 20}
  this.fuelLevel -= fuelUsedPerKm * distance;
  this.mileage += distance;
  this.maintenance += distance * 0.5;

  console.log(
    `${this.type} traveled ${distance} km. Fuel Level left: ${this.fuelLevel}`
  );
};
Vehicle.prototype.refuel = function (amount) {
  //   let fuelLevel = this.fuelLevel + amount - FleetManager.carTraveled;
  //   FleetManager["fuelLeft"] = fuelLevel;
  this.fuelLevel += amount;
  console.log(`${this.type} refueled. Fuel Level: ${this.fuelLevel}`);
};

Vehicle.prototype.stop = function () {
  console.log(`${this.type} Stopped`);
  //   FleetManager.generateReport(this, this.type, this.maintenance);
  FleetManager.generateReport(this);
};

const car = new Vehicle("Car");
const bike = new Vehicle("Bike");

car.start();
car.trip(50);
car.refuel(20);
car.stop();

bike.start();
bike.trip(40);
bike.refuel(20);
bike.stop();

FleetManager.addVehicle(car);
FleetManager.addVehicle(bike);

FleetManager.generateReport(car);
FleetManager.generateReport(bike);

// FleetManager.generateSummary();
FleetManager.generateFleetSummary();

console.log(car);

// console.log(FleetManager.vehicle);

// console.log(car);

// console.log(FleetManager);
