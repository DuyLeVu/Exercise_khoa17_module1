let switchButton = new SwitchButton();
let lamp = new ElectricLamp();
switchButton.connectToLamp(lamp);
for (i = 0; i<10; i++){
    switchButton.switchButton();
}