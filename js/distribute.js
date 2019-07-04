window.onload = function(){
  $("#tab1").click(function() {
    $("#tab1-main").show()
    $("#tab2-main").hide()
  })

  $("#tab2").click(function() {
    $("#tab2-main").show()
    $("#tab1-main").hide()
  })
}()

function handleEdit() {
  alert('编辑')
}