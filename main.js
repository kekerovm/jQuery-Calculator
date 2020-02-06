$(document).ready(function() {
  $("#add").on("click", function(e) {
    e.preventDefault()
    var a = $("#num_one").val()
    var b = $("#num_two").val()
    var c = Number(a) + Number(b)
    $(".answer").html(c)
  })

  $("#subtract").on("click", function(e) {
    e.preventDefault()
    var a = $("#num_one").val()
    var b = $("#num_two").val()
    var c = Number(a) - Number(b)
    $(".answer").html(c)
  })

  $("#multiply").on("click", function(e) {
    e.preventDefault()
    var a = $("#num_one").val()
    var b = $("#num_two").val()
    var c = Number(a) * Number(b)
    $(".answer").html(c)
  })

  $("#divide").on("click", function(e) {
    e.preventDefault()
    var a = $("#num_one").val()
    var b = $("#num_two").val()
    var c = Number(a) / Number(b)
    $(".answer").html(c)
  })
})
