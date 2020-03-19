function add(romanNumber) {
  const convertorDic = {
    1: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    2: ["", "X", "XX", "XX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    3: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    4: ["", "M", "MM", "MMM"]
  };

  let romanString = romanNumber.toString();
  let lengthRoman = romanString.length;
  let result = "";

  if (typeof romanNumber == "number") {
    for (let i = 0; i < lengthRoman; i++) {
      result += convertorDic[lengthRoman - i][romanString[i]];
    }
  } else {
  }

  return result;
}
