window.onload = function() {

  $(".nav-item").first().addClass("active")
  $(".nav-item").click(function() {
    $(this).addClass("active").siblings().removeClass('active')
  })

  $("#content1").click(function() {
    $('.modal').toggle()
  })

  $("#cancel").click(function() {
    $(".modal").hide()
  })
}()

function showModal() {
  alert('编辑')
}