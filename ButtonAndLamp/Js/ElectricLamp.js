class ElectricLamp {
    status
    constructor() {
        this.status = false;
    }
    turnOff() {
        this.status = false;
        console.log('Lamp is off ');
    }
    turnOn() {
        this.status = true;
        console.log('Lamp is on ');
    }
}

