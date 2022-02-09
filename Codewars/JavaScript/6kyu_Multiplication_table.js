function multiplicationTable(size) {
  const result = [];
  for (let i = 1 ; i <= size; i++) {
    const row = [];
    for (let j = 1 ;j  <= size ; j++) {
      row.push(i * j);
    }
    result.push(row);
  } 

  return result;
}

multiplicationTable(3);