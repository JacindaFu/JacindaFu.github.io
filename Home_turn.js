//轮播图
var left_turn = "-60vw";
var init_time = 0
$(function(){
    var timer_turn = setInterval(function(){
        var date = new Date()
        init_time = 0
        if(left_turn == "-240vw")
        {
            left_turn = "0vw"
            $("#img_ul").animate({
                left:left_turn
            },1,function(){
                left_turn = "-60vw"
                $("#img_ul").animate({
                    left:left_turn
                },1000)
            })
        }
        else{
            $("#img_ul").animate({
                left:left_turn
            },1000)
        }
        init_time = date.getSeconds()
        left_turn = `${parseInt(left_turn) - 60}vw`
        // console.log(init_time);
    },3000)
})