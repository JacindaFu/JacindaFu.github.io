
//导航栏路由功能
var Current_Page = 0


$("#nav_ul li").on({
    'click':function(){
        Current_Page = $(this).index()
        //导航li样式改变
        $(this).children("div").css("width",'45%')
        $(this).siblings().children("div").css("width",'0%')
        //跳转页面
        $(".Route>li").eq($(this).index()).fadeIn()
        $(".Route>li").eq($(this).index()).siblings().hide()
    }
})

$("#nav_ul li").hover(function(){
    $(this).children("div").css("width",'45%')
},function(){
    if(Current_Page == $(this).index())
    {
    }
    else
    {
    $(this).children("div").css("width",'0%') 
    }
})
