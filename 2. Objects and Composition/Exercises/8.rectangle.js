function rectangle(width, height, color) {
  if (color) {
    const capitalize = color[0].toUpperCase();
    const remain = color.slice(1);
    color = capitalize + remain;
  }
  const rect = {
    width,
    height,
    color: color,
    calcArea: () => {
      return rect.width * rect.height;
    },
  };

  return rect;
}

rectangle();

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


// output:

// 4
// 5
// Red
// 20