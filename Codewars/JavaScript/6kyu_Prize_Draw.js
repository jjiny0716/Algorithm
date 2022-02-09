function rank(st, we, n) {
  if (!st) return "No participants";
  if (we.length < n) return "Not enough participants";

  const nameToWinningNumbers = [];
  const fnames = st.split(',');
  fnames.forEach((fname, i) => {
    const som = fname.length + fname.toLowerCase().split('').reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
    const winningNumber = som * we[i];
    nameToWinningNumbers.push([fname, winningNumber]);
  })

  nameToWinningNumbers.sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]));

  return nameToWinningNumbers[n - 1][0];
}

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4
  )
);
