export class BikesService {
    private bikes = [
      {
        id: 1,
        name: 'AdventureBike',
        status: 'booked'
      },
      {
        id: 2,
        name: 'FamilyBike',
        status: 'notBooked'
      },
      {
        id: 3,
        name: 'SportsBike',
        status: 'notBooked'
      }
    ];
  
    getBikes() {
      return this.bikes;
    }
  
    getBike(id: number) {
      const bike = this.bikes.find(
        (b) => {
          return b.id === id;
        }
      );
      return bike;
    }
  
    updateBike(id: number, bikeInfo: {name: string, status: string}) {
      const bike = this.bikes.find(
        (b) => {
          return b.id === id;
        }
      );
      if (bike) {
        bike.name = bikeInfo.name;
        bike.status = bikeInfo.status;
      }
    }
  }
  