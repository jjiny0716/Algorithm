function solution(files) {
  const divideFileName = (fileName) => {
    let firstNumberIndex = -1,
      lastNumberIndex = -1;
    for (let i = 0; i < fileName.length; i++) {
      if (fileName[i] >= '0' && fileName[i] <= '9') {
        if (firstNumberIndex === -1) firstNumberIndex = i;
        lastNumberIndex = i;
      }
      else if (firstNumberIndex !== -1) break;
    }

    return [
      fileName.slice(0, firstNumberIndex).toLowerCase(),
      fileName.slice(firstNumberIndex, lastNumberIndex + 1),
      fileName.slice(lastNumberIndex + 1, fileName.length),
    ];
  };

  return files.sort((a, b) => {
    const [aHead, aNumber] = divideFileName(a);
    const [bHead, bNumber] = divideFileName(b);
    if (aHead !== bHead) return aHead.localeCompare(bHead);
    return Number(aNumber) - Number(bNumber);
  });
}

const files = [
  "muzi1.png",
  "MUZI01.zip",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];
console.log(solution(files));

