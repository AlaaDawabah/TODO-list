// checkOFF TODOS

$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});


//Deleting


$("ul").on("click","span",function () {
    event.stopPropagation();
    $(this).parent().slideUp(500, function () {
        $(this).remove();
    })
});

//Add New TODO

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
      let todoText =  $(this).val();
      $("ul").append(`<li><span><img src="images/waste-bin.svg"></span> ${todoText}</li>`);
      $(this).val("");
    }
})

//toggle the input field

$(".plus").click(function(){
    $("input[type='text']").fadeToggle();
})