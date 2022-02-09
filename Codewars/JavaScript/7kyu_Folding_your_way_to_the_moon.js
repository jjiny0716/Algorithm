function foldTo(distance) {
  return distance > 0.0001 ? Math.floor(Math.log2(distance * 20000) / Math.log2(2)) : distance >= 0 ? 0 : null;
}

console.log(foldTo(384000000));

