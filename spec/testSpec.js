describe("String calculator", () => {
  it("converts an empty string to 0", () => {
    const emptyString = "";

    const result = add(emptyString);

    expect(result).toEqual(0);
  });
});
