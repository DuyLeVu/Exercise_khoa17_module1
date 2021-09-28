class Hero {
    image;
    top;
    left;
    size;
    speed;

    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    };

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            'src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;"/>';
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    moveRight() {
        this.left += this.speed;
    }

    moveDown() {
        this.top += this.speed;
    }

    moveLeft() {
        this.left -= this.speed;
    }

    moveTop() {
        this.top -= this.speed;
    }

}

let speed = parseInt(prompt('Enter speed = '));
let hero = new Hero('img5110-1632753803343526434039.jpg', 20, 30, 200);
hero.setSpeed(speed);

function start() {
    if (hero.top === 20 && hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
        hero.moveDown();
    } else if (hero.left > 0) {
        hero.moveLeft();
    } else if (hero.top > 0) {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 20)
}

start();