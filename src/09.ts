interface SaleInterface {
  category: string
  product?: string
}

function show({ category, product }: SaleInterface) {
  console.log(category, product)
}

show({ category: "games", product: "disc" })

const sale: SaleInterface = { category: "toys" }

console.log(sale, typeof sale)

class Sale implements SaleInterface {
  category
  product
}

const clock = new Sale()
clock.category = "sport"
clock.product = "stone"
console.log(clock, typeof clock)
