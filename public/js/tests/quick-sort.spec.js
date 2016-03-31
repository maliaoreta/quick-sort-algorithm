describe('quickSort', function () {

  it('should be a function', function () {

    expect(quickSort).to.be.a('function');
  })

  it('should take an Array as a single parameter, sort it using a quick sort algorithm, and return the sorted array', function () {

    var testArr = [3, 1, 2, 6, 4, 5];
    expect(quickSort(testArr)).to.deep.equal([1, 2, 3, 4, 5, 6]);
  })
})