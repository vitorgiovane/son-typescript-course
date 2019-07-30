function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category, product);
}
show({ category: "games", product: "disc" });
var sale = { category: "toys" };
console.log(sale, typeof sale);
var Sale = /** @class */ (function () {
    function Sale() {
    }
    return Sale;
}());
var clock = new Sale();
clock.category = "sport";
clock.product = "stone";
console.log(clock, typeof clock);
