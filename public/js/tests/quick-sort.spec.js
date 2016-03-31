describe('quickSort', function () {

  it('should be a function', function () {

    expect(quickSort).to.be.a('function');
  })

  it('should take an Array as a single parameter, sort it using a quick sort algorithm, and return the sorted array', function () {

    var testArr = [3, 1, 2, 6, 4, 5];
    var testArr2 = [3, 12, 32, 4, 76, 2, 43, 0, 2, 1, 43];
    expect(quickSort(testArr)).to.deep.equal([1, 2, 3, 4, 5, 6]);
    expect(quickSort(testArr2)).to.deep.equal([0, 1, 2, 2, 3, 4, 12, 32, 43, 43, 76])
  })
})