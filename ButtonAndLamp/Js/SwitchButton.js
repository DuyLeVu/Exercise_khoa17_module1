class SwitchButton {
    status;
    lamp;
    connectToLamp(ElectricLamp) {
        this.lamp = new ElectricLamp;
    }
    switchOff() {
        this.lamp.turnOff();
    }
    switchOn() {
        this.lamp.turnOn();
    }
    switchButton(){
        if (this.lamp.status == false){
            return this.switchOn();
        } else return this.switchOff();
    }
}