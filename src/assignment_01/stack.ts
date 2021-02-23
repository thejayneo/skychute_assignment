class Stack {
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
        let x: number = this.element[this.element.length - 1][0];
        delete this.element[this.element.length - 1];
        this.element.length = this.element.length - 1;
        return x;
    };

    max() {
        return this.element[this.element.length-1][1];
    };
};

let test = new Stack;
test.push(-5);
test.push(1);
test.push(7);
test.push(3);
console.log(test);

test.pop();
console.log(test);

console.log(test.max())