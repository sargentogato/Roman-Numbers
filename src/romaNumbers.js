function add(string) {
  let splitted = string.split(",");
  let numbers = splitted.map(value => Number(value || 0));
  return numbers.reduce((a, b) => a + b);
}
