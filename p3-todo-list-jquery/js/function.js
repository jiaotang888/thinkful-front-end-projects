$(function(){
	buttonClick();
	addItem();
});
function addItem () {
	$("input").keyup(function(){
        if(event.keyCode == 13){
        	var item = $(this).val();
            var addli = "<li><button class='delete'>DEL</button>"+item+"<button class='done'>Done</button></li>";
            $("ul").prepend(addli);	        
	        buttonClick();
	        $(this).val("");
        }
    });
}
function buttonClick () {
	$("#reset").bind("click", function () {
        $("ul").empty();
    });
    $(".delete").bind("click", function () {
        $(this).parent().remove();
    })
    $(".done").bind("click", function () {
        $(this).parent().css({"color":"#909090","text-decoration":"line-through"});
    })
}