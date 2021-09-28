class SwitchButton {
    status;
    lamp;
    connectToLamp(lamp) {
        this.lamp = lamp;
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