// Q. Implement a getter and setter for both the width and height properties to ensure they can't be set to negative values.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this._width;
    }

    set width(newWidth) {
        if (newWidth < 0) {
            console.log("Width cannot be negative. Setting to 0.");
            this._width = 0;
        } else {
            this._width = newWidth;
        }
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        if (newHeight < 0) {
            console.log("Height cannot be negative. Setting to 0.");
            this._height = 0;
        } else {
            this._height = newHeight;
        }
    }
}

const rect = new Rectangle(10, 20);
console.log(`Width: ${rect.width}, Height: ${rect.height}`);

rect.width = -5;
rect.height = 15;
console.log(`Width: ${rect.width}, Height: ${rect.height}`);