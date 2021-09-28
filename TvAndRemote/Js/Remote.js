class Remote{
    id
    tv
    connectToTv(Television){
        this.tv = new Television();
    }
    turnOn(){
        this.tv.status = true;
    }
    turnOff(){
        this.tv.status = false;
    }
    moveChannel(){
        let newChannel = parseInt(prompt('Enter new channel: '));
        this.tv.channel = newChannel;
    }
    upVolume() {
        this.tv.volume += 2;
    }
    downVolume() {
        this.tv.volume -= 2;
    }
}