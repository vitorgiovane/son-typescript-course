function showWithVar() {
  var text = "Vitor Giovane"
  if (true) {
    var text = "text"
  }
  console.log(text)
}

function showWithLet() {
  let text = "Vitor Giovane"
  if (true) {
    let text = "text"
  }
  console.log(text)
}

const showWithVarArrowFunction = () => {
  var text = "Vitor Giovane"
  if (true) {
    var text = "text"
  }
  console.log(text)
}

const showWithLetArrowFunction = () => {
  let text = "Vitor Giovane"
  if (true) {
    let text = "text"
  }
  console.log(text)
}

showWithVar()
showWithLet()
showWithVarArrowFunction()
showWithLetArrowFunction()
