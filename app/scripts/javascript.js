window.onload=function(){
    $(".photo").click(function(){
        $("#photo-fade").fadeToggle();
    })
    console.log("scripts added");

    let lineWhite=true;
    $("#menu").click(function(){
        $("#mobile-nav").slideToggle(500);
        if(lineWhite){
            $("#center-line").css("stroke","rgb(0, 181, 210)");
            lineWhite=false;
            console.log("Changed color");
        }
        else{
            $("#center-line").css("stroke","white");
            lineWhite=true;
        }
        
    })
}