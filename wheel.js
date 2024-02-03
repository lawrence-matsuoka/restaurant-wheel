

// Create a Wheel class
class Wheel {
    constructor(element, items) {
        this.element = element;
        this.items = items;
        this.spinAngle = 0;
        this.result = null;
        this.createWheel();
    }

    createWheel() {
        this.items.forEach((item, index) => {
            const wedge = document.createElement('div');
            wedge.className = 'wheel-wedge';
            wedge.style.transform = `rotate(${(360 / this.items.length) * index}deg)`;
            wedge.innerText = item;
            this.element.appendChild(wedge);
        });
    }

    spin() {
        return new Promise(resolve => {
            this.spinAngle += 1440 + Math.floor(Math.random() * 360);
            this.element.style.transition = 'transform 3s ease-out';
            this.element.style.transform = `rotate(${this.spinAngle}deg)`;

            setTimeout(() => {
                this.element.style.transition = 'none';
                const index = Math.floor((this.spinAngle % 360) / (360 / this.items.length));
                this.result = this.items[index];
                resolve(this.result);
            }, 3000);
        });
    }

    updateItems(items) {
        this.items = items;
        this.element.innerHTML = '';
        this.createWheel();
        return this;
    }
}