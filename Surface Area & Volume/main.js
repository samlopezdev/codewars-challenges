// Surface Area & Volume

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


// My Solution
function getSize(width, height, depth) {
      return [2 * (width * height) + 2 * (depth * width) + 2 * (depth * height), 
              width * height * depth]
}


// Other Solutions
function getSize(width, height, depth){
    var box = { width: width, height:height, depth:depth};
    
    return [getArea(box), getVolume(box)];
}
  
  
  function getArea(box){
    return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
}
  
  function getVolume(box){
    return box.width * box.height * box.depth;
}


// 2
function getSize(w, h, d){
	var area = (2*d*h) + (2*w*h) + (2*d*w);
	var volume = d*w*h;
  return [area, volume];
}


// 3
function getSize(width, height, depth) {
    const volume = width * height * depth;
    const area = width * height * 2 + height * depth * 2 + depth * width * 2;
  
    return [area, volume];
}


// 4
const getSize = (w, h, d) => [
    (w * h + w * d + h * d) * 2,
    w * h * d
];