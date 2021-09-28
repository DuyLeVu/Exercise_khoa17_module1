class Television{
    channel
    volume
    status
    constructor(chanel,volume,status) {
        this.channel = chanel;
        this.volume = volume;
        this.status = status;
    }
    getChanel(){
        return this.channel;
    }
    getVolume(){
        return this.volume;
    }
    getStatus(){
        if (this.status){
        console.log('Tv is On ');
    }
    else
        console.log('Tv is Off ');
    }

}