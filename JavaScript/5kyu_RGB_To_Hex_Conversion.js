function rgb(r, g, b) {
  return [r, g, b].reduce((prev, cur) => {
    if (cur < 0) cur = 0;
    if (cur > 255) cur = 255;
    return prev += cur.toString(16).padStart(2, "0");
  }, "").toUpperCase();
}

console.log(rgb(244, 255, 12));
