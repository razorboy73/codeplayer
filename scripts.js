
function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val()+"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");

}


$(".menuBarButton").hover(
    function(){
    $(this).addClass("highlightedButton")},
    function(){
    $(this).removeClass("highlightedButton")},
)
    
$(".menuBarButton").click(
    function(){
        $(this).toggleClass("active");
        $(this).removeClass("highlightedButton");
        var panelId = $(this).attr("id")+"Panel";
        alert(panelId);
        $("#"+panelId).toggleClass("hidden");
        var numberOfActivePanels = 4 - $(".hidden").length;
        $(".panel").width(($(window).width()/numberOfActivePanels)-10);

        
        
    })

$(".panel").height($(window).height()-$("#topBar").height()-15);
$(".panel").width(($(window).width()/2)-10);

updateOutput();


$("textarea").on('change keyup paste', function(){
    updateOutput();
   });



