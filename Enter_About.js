$('.Header ul li').eq(1).on({
    'click':function(){
        //背景变黑
        $('body').css('backgroundColor',"black")
        //导航栏变白
        $(".Header ul").removeClass("ul_Project")
    }
})