// Building Blocks

// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`
// Examples
//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
    
//     b.getLength() // -> 4
    
//     b.getHeight() // -> 6
    
//     b.getVolume() // -> 48
    
//     b.getSurfaceArea() // -> 88


// My Solution
class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    const { width, length, height } = this;
    return width * length * height;
  }

  getSurfaceArea() {
    const { width, length, height } = this;
    return 2 * (width * length + length * height + height * width);
  }
}


// Other Solutions
class Block {
  constructor([width, length, height]) {
    this.x = width;
    this.y = length;
    this.z = height;
  }

  getWidth() {
    return this.x;
  }
  getLength() {
    return this.y;
  }
  getHeight() {
    return this.z;
  }

  getVolume() {
    return this.x * this.y * this.z;
  }

  getSurfaceArea() {
    return 2 * this.x * this.y + 2 * this.x * this.z + 2 * this.y * this.z;
  }
}


// 2
function Block([w, l, h]) {
  var v = h * l * w,
    a = 2 * h * w + 2 * (h + w) * l;
  return {
    getWidth: () => w,
    getLength: () => l,
    getHeight: () => h,
    getVolume: () => v,
    getSurfaceArea: () => a,
  };
}