describe("multiplyNumeric", function() {
  it("multiplies all numeric properties by 2", function() {
    var menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    multiplyNumeric(menu);
    assert.equal(menu.width, 400);
    assert.equal(menu.height, 600);
    assert.equal(menu.title, "My menu");
  });
});