$(document).ready(function () {
    $("p").click(function () {
      // alert("it's clicked")
      // $(this).hide()
      $(this).hide("slow", function () {
        alert("it's gone now")
      })
    })
  })