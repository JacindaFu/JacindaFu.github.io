$('.Header ul li').eq(2).on({
    'click':function(){
        //背景变白
        $('body').css('backgroundColor',"white")
        //导航栏变黑
        $(".Header ul").addClass("ul_Project")
    }
})