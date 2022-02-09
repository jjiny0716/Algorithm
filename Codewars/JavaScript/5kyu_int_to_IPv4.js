function int32ToIp(int32) {
  const binary = int32.toString(2).padStart(32, "0");
  return [
    parseInt(binary.substring(0, 8), 2),
    parseInt(binary.substring(8, 16), 2),
    parseInt(binary.substring(16, 24), 2),
    parseInt(binary.substring(24, 32), 2),
  ].join(".");
}

console.log(int32ToIp(2149583361));

// others
function int32ToIp2(int32) {
  return (
    ((int32 >> 24) & 0xff) +
    "." +
    ((int32 >> 16) & 0xff) +
    "." +
    ((int32 >> 8) & 0xff) +
    "." +
    (int32 & 0xff)
  );
}
