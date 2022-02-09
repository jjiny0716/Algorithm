function getMaxPeak(towers, peaks) {
  let maxPeak = peaks[0];
  let index = 0;
  for (let i = 0 ; i < peaks.length ; i++) {
    if (towers[peaks[i]] > towers[maxPeak]) {
      maxPeak = peaks[i];
      index = i;
    }
  } 
  return {
    "peak": maxPeak,
    "index": index,
  }
}

function rainVolume(towers) {
  towers.unshift(0);
  towers.push(0);

  let peaks = [];
  for (let i = 1 ; i < towers.length - 1 ; i++) {
    if (towers[i - 1] <= towers[i] && towers[i] >= towers[i + 1]) peaks.push(i);
  }
  
  const midPeakInfo = getMaxPeak(towers, peaks);

  const leftPeaks = [];
  let left = 0;
  let right = midPeakInfo.index;
  while (left < right) {
    const peakInfo = getMaxPeak(towers, peaks.slice(left, right));
    leftPeaks.push(peakInfo.peak);
    right = peakInfo.index;
  }

  const rightPeaks = [];
  left = midPeakInfo.index + 1;
  right = peaks.length;
  while (left < right) {
    const peakInfo = getMaxPeak(towers, peaks.slice(left, right));
    rightPeaks.push(peakInfo.peak);
    left = left + peakInfo.index + 1;
  }

  peaks = [...leftPeaks.reverse(), midPeakInfo.peak, ...rightPeaks];

  let maxAmount = 0;
  for (let i = 0 ; i < peaks.length - 1 ; i++) {
    const maxHeightOfWater = Math.min(towers[peaks[i]], towers[peaks[i + 1]]);
    maxAmount += towers.slice(peaks[i] + 1, peaks[i + 1]).reduce((amount, height) => amount += maxHeightOfWater < height ? 0 : maxHeightOfWater - height, 0);
  }

  return maxAmount;
}

const data = [43, 41, 13, 43, 2, 19, 40, 9, 16, 19, 20, 27, 32, 25, 38, 33, 45, 2, 5, 5];
console.log(rainVolume(data));


// others
function rainVolume2(towers) {
  let maxLeft = towers[0];
  let maxRight = towers[towers.length - 1];

  let left = 1;
  let right = towers.length - 2;
  let total = 0;

  while (left <= right) {
      if (maxLeft <= maxRight) {
        maxLeft = Math.max(maxLeft, towers[left]);
        total += maxLeft - towers[left];
        left += 1;
      } else {
        maxRight = Math.max(maxRight, towers[right]);
        total += maxRight - towers[right];
        right -= 1;
      }
  }

  return total;
}