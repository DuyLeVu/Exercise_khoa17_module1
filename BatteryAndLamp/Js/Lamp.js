class Lamp {
    battery;
    status;
    setBattery(battery){
        this.battery = battery.getEnergy();
    };
    getBattery(){
        return this.battery;
    }
    light(){
        if (this.status) alert("lighting");
        else alert("Not Lighting");
    };
    turnOn(battery){
        this.status = true;
        battery.decreaseEnergy();
        this.battery = battery.getEnergy();
    }
    turnOff(){
        this.status = false;
    }
}