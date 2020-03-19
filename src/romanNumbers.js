function add(romanNumber) {
  const convertorDic = {
    0: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    1: ["", "X", "XX", "XX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    2: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    3: ["", "M", "MM", "MMM"]
  };

  let romanString = romanNumber.toString();
  let lengthRoman = romanString.length;
  let result = "";

  for (let i = 0; i < lengthRoman; i++) {
    // console.log(romanString);
    console.log(i);

    result += convertorDic[i][romanString[i]];
  }
  return result;
}
