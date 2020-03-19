function add(romanNumber) {
  let result;
  switch (romanNumber) {
    case 1:
      result = "I";
      break;
    case 5:
      result = "V";
      break;
    case 10:
      result = "X";
      break;
    default:
      break;
  }
  return result;
}
