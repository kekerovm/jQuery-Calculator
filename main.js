$(document).ready(function () {
  const state = {
    num1: "",
    oper: "",
    num2: "",
  }

  $("#calc").on("click", "button", function (e) {
    e.preventDefault()

    var val = $(this).html()

    if (val === "x" || val === "/" || val === "+" || val === "-") {
      if (state.num2 !== "") {
        operation()
      }

      state.oper = val
    } else if (val === "=") {
      operation()
    } else if (val === "C") {
      state.num1 = ""
      state.oper = ""
      state.num2 = ""
    } else {
      if (state.oper === "") {
        state.num1 += val
        $("#result").html(state.num1)
      } else {
        state.num2 += val
        $("#result").html(state.num2)
      }
    }
  })
  function operation() {
    if (state.oper === "+") {
      state.num1 = Number(state.num1) + Number(state.num2)
    } else if (state.oper === "-") {
      state.num1 = Number(state.num1) - Number(state.num2)
    } else if (state.oper === "x") {
      state.num1 = Number(state.num1) * Number(state.num2)
    } else if (state.oper === "/") {
      state.num1 = Number(state.num1) / Number(state.num2)
    }

    $("#result").html(state.num1)

    state.oper = ""
    state.num2 = ""
  }
})
