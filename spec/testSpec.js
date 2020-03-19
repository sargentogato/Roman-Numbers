describe("Roman number converter", () => {
  it("Convert 1 to roman number", () => {
    const romanNumber = 1;

    const result = add(romanNumber);

    expect(result).toEqual("I");
  });

  it("Convert 5 to roman number", () => {
    const romanNumber = 5;

    const result = add(romanNumber);

    expect(result).toEqual("V");
  });
  it("Convert 10 to roman number", () => {
    const romanNumber = 10;

    const result = add(romanNumber);

    expect(result).toEqual("X");
  });

  it("Convert 13 to roman number", () => {
    const romanNumber = 13;

    const result = add(romanNumber);

    expect(result).toEqual("XIII");
  });
});
