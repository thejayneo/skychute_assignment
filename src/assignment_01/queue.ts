class Queue {
    element: Array<Array<number>>;
    maxArray: Array<number>;

    constructor() {
        this.element = [[]];
        this.maxArray = [];
    };

    push(num: number) {
        if (num < this.element[this.element.length - 1][1]) {
            this.element[this.element.length] = [num, this.element[this.element.length - 1][1]];
            return this.element.length;
        } else {
            this.element[this.element.length] = [num, num];
            this.maxArray[this.maxArray.length] = num;
            return this.element.length;
        }
    };

    pop() {
        console.log(this.element[0][0]);
        if (this.element[0][1] < this.element[this.element.length - 1][1]) {
            delete this.element[0];
        } else {
            delete this.maxArray[this.maxArray.length - 1];
            this.maxArray.length = this.maxArray.length - 1;
            this.element[this.element.length - 1][1] = this.maxArray[length - 1];
        };
    };

    max() {
        return this.element[this.element.length-1][1];
    };
};

let test1 = new Queue;
test1.push(-5);
test1.push(1);
test1.push(1);
test1.push(1);
test1.push(7);
test1.push(7);
test1.push(3);
console.log(test1);

test1.pop();
console.log(test1);

console.log(test1.max())