$(document).ready(function() {
	// 圖片開關
    var $tittle = $(".photo_court"),
        $img=$(".p_img");
    $tittle.click(function() {
        if ($tittle.hasClass("closed")) 
        	{ $(this).find(".portfolio").show(1000),$tittle.removeClass("closed"),$(this).find(".switch").text("-") }
        else if ($(this).find(".portfolio").hasClass("open")) {$(this).find(".portfolio").hide(1000),$tittle.addClass("closed"),$(this).find(".switch").text("+")}
    })
    $img.click(function(){if ($(this).closest(".portfolio").hasClass("open")) {$(this).closest(".portfolio").removeClass("open"),console.log("aaaaaaaa");}
    	
    })
  
    // 圖片遮罩
    var $mask=$(".mask"),$img=(".img-responsive"),$maskpic=$("#mask .pic")
    // 關圖
    $(".mask").click(function(){
    	$(".pic").empty(),
    	$("#mask").hide(1000);
    	$(".portfolio").addClass("open")
    })
    // 開圖
    $(".img-responsive").click(function(){
    	$(this).clone();
    	if ($(this).closest(".p_img").hasClass("open")) {}
    	$(this).closest(".portfolio").removeClass("open"),console.log("黝暗到");
    	$(".pic").append($(this).clone());
    	$("#mask").show(1500);
    	console.log($(this).clone()) ;   
    })

})
