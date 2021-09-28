class Remote{
    id
    tv
    constructor(id) {
        this.id = id;
    }
    connectToTv(television){
        this.tv = television;
    }
    turnOn(){
        this.tv.status = true;
    }
    turnOff(){
        this.tv.status = false;
    }
    moveChannel(numberChannel){
        if (this.tv.status == true){
        this.tv.channel = numberChannel;
        }
        else console.log('Tv is off');
    }
    upVolume(number) {
        if (this.tv.status == true) {
            this.tv.volume += number;
        }
        else console.log('Tv is off');
    }
    downVolume(number) {
        if (this.tv.status == true) {
            this.tv.volume -= number;
        }
        else console.log('Tv is off');
    }
}