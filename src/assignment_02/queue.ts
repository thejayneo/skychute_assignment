class Queue {
    element: Array<Array<number>>;

    constructor() {
        this.element = [[]];
    };

    push(num: number) {
        if (num < this.element[this.element.length - 1][1]) {
            this.element[this.element.length] = [num, this.element[this.element.length - 1][1]];
            return this.element.length;
        } else {
            this.element[this.element.length] = [num, num];
            return this.element.length;
        }
    };

    pop() {
        console.log(this.element[0][0]);
        if (this.element[0][1] < this.element[this.element.length - 1][1]) {
            delete this.element[0];
        } else {
            
        };
    };

    max() {
        return this.element[this.element.length-1][1];
    };
};