let samsung = new Television(5,30,false);
let remote = new Remote(1);
remote.connectToTv(samsung);
// Bật Tv
samsung.getStatus();
remote.turnOn();
samsung.getStatus();
// Chuyển kênh 7
remote.moveChannel(7);
console.log(samsung.getChanel());
//Chuyển kênh 3
remote.moveChannel(3);
console.log(samsung.getChanel());
//Tăng âm lượng lên 2
console.log(samsung.getVolume());
remote.upVolume(2);
console.log(samsung.getVolume());
//
samsung.getStatus();
remote.turnOff();
samsung.getStatus();