function alphanumeric(string){
  return !((/[^a-zA-Z0-9\t]/.test(string)) && (string));
}

console.log(alphanumeric("	"));
