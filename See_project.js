$(".Home>button").click(function(){
    Current_Page = 2
    //导航li样式改变
    $("#nav_ul li").eq(2).children("div").css("width",'45%')
    $("#nav_ul li").eq(2).siblings().children("div").css("width",'0%')
    //跳转页面
    $(".Route>li").eq(2).fadeIn()
    $(".Route>li").eq(2).siblings().hide()
     //背景变白
     $('body').css('backgroundColor',"white")
     //导航栏变黑
     $(".Header ul").addClass("ul_Project")
})