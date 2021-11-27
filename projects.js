$("#Project_ul li").click(function(){
    //滚轮滑倒最上方后进入
    elevator_init()
    //project内容出现
    CurrentImg = $(this).index()
    $(".ProjectContent").fadeIn(100,function(){
        $("body,html").stop().animate({
            scrollTop:0
        },1)
    })
    $(".ProjectContent div").eq($(this).index()).fadeIn(2000)
    
})
let CurrentImg
var CurrentNavLi = 1
//电梯切换图片效果
$(".elevator li").hover(function(){
    if($(this).index() != 0)
    {
        $(this).addClass("elevatorLi")
        Imgchange($(this).index()) 
    }
    
},function(){
    if($(this).index() != 0)
    {
        if($(this).index() == CurrentNavLi)
        {
            //不移除样式
        }
        else{
            Imgback($(this).index())
        }
    }
    
})

//小li改变图片
function Imgchange(i){
    $(".elevator li").eq(i).find("img").eq(0).stop().hide()
    $(".elevator li").eq(i).find("img").eq(1).stop().fadeIn() 
}

function Imgback(i){
    $(".elevator li").eq(i).removeClass("elevatorLi")
    $(".elevator li").eq(i).find("img").eq(1).stop().hide()
    $(".elevator li").eq(i).find("img").eq(0).stop().fadeIn() 
}
//电梯收起效果
$(".elevator li").eq(0).on({
    "click":function(){
        $(".elevator").toggleClass("elevatorRetract")
        $(".elevator>:nth-child(1)>img").toggleClass("elevatorRetractImg")
    }
})


function addLi(i){
    CurrentNavLi = i
    $(".elevator li").eq(i).addClass("elevatorLi")
    $(".elevator li").eq(i).find("img").eq(1).stop().fadeIn()
    $(".elevator li").eq(i).find("img").eq(0).stop().hide()
}

function removeLi(I){
    for(var j=1;j<=$(".elevator li").length-2;j++)
                {
                    //移除样式
                    $(".elevator li").eq(I).siblings().removeClass("elevatorLi")
                    $(".elevator li").eq(I).siblings().eq(j).find("img").stop().eq(1).stop().hide()
                    $(".elevator li").eq(I).siblings().eq(j).find("img").stop().eq(0).stop().fadeIn()
                }
}

addLi(1)

//电梯导航li点击效果
$(".elevator li").click(function(){
    if($(this).index() != 0)
    {
        //给this添加样式
        addLi($(this).index())
        //给this的兄弟类移除样式
        for(var i=1;i<=$(".elevator li").length-2;i++)
        {
            //移除样式
            $(this).siblings().removeClass("elevatorLi")
            $(this).siblings().eq(i).find("img").stop().eq(1).stop().hide()
            $(this).siblings().eq(i).find("img").stop().eq(0).stop().fadeIn()
        }
    }
})

//电梯导航效果
//检查页面的scrolltop
var I = 0
var scrollFlag = true

$(window).scroll(function(){ 
    if(scrollFlag){
        if(0 <= $(document).scrollTop() && $(document).scrollTop() < $(".ProjectContent div").eq(CurrentImg).find("li").eq(1).offset().top)
        {
                I=1
                // 添加样式
                addLi(I)
                // 移除兄弟样式
                removeLi(I)
        }
        else if($(".ProjectContent div").eq(CurrentImg).find("li").eq(1).offset().top <= $(document).scrollTop() && $(document).scrollTop() < $(".ProjectContent div").eq(CurrentImg).find("li").eq(2).offset().top)
        {
                I=2
                // 添加样式
                addLi(I)
                // 移除兄弟样式
                removeLi(I)
        }
        else if($(".ProjectContent div").eq(CurrentImg).find("li").eq(2).offset().top <= $(document).scrollTop() && $(document).scrollTop() < $(".ProjectContent div").eq(CurrentImg).find("li").eq(3).offset().top)
        {
                I=3
                // 添加样式
                addLi(I)
                // 移除兄弟样式
                removeLi(I)
        }
        else if($(".ProjectContent div").eq(CurrentImg).find("li").eq(3).offset().top <= $(document).scrollTop() && $(document).scrollTop() < $(".ProjectContent div").eq(CurrentImg).find("li").eq(4).offset().top)
        {
                I=4
                // 添加样式
                addLi(I)
                // 移除兄弟样式
                removeLi(I)
        }
        else
        {
                I=5
                // 添加样式
                addLi(I)
                // 移除兄弟样式
                removeLi(I)
        }
    }
})
$(".elevator li").click(function(){
    //点击以后改变小li的样式
    //被点击的li添加样式，兄弟li移除样式
    //节流阀

    //点击以后移动到对应页面
   if($(this).index() != 0 && $(this).index() != $(".elevator li").length-1)
   {
    scrollFlag = false
     var current =  $(".ProjectContent div").eq(CurrentImg).find("li").eq($(this).index()-1).offset().top
     $("body,html").stop().animate({
         scrollTop:current+10
     },function(){
         scrollFlag = true
     })
   }
   if($(this).index() == $(".elevator li").length-1)
   {
       //滚轮滑倒最上方后退出
        $("body,html").stop().animate({
            scrollTop:0
        },1,function(){
            //退出作品集
            $(".ProjectContent").fadeOut()
            $(".ProjectContent div").eq(CurrentImg).stop().fadeOut()
            //作品集视频停止播放
            $("video").trigger('pause');
        })
   }
})

//电梯初始化
//脚部导航初始化
function elevator_init(){
    CurrentNavLi = 1
    addLi(1)
    removeLi(1)
    scrollFlag = true
}


$(".Projects #Project_ul>li").each(function(i,ele){
    if(i<=3)
    {
        $(ele).css("top",`${i*85}%`)
        $(ele).css("height",`${$(document).width()*0.7125*0.53636}`)
    }
    else{
        $(ele).css("height",`${$(document).width()*0.40087783*0.42136}`)
    }
})

//点击切换项目
$(".backForward #backward").click(function(){
    if(CurrentImg == 0)
    {
        console.log('无法后退');
    }
    else{
        //退出作品集
        $(".ProjectContent").fadeOut(1)
        $(".ProjectContent div").eq(CurrentImg).stop().fadeOut(1)
        CurrentImg--;
        //进入作品集
        console.log("进入"+CurrentImg)
        elevator_init()
        //project内容出现
        $(".ProjectContent").fadeIn(1,function(){
            $("body,html").stop().animate({
                scrollTop:0
            },1)
        })
        $(".ProjectContent div").eq(CurrentImg).fadeIn(2000)
    }
})

$(".backForward #forward").click(function(){
    if(CurrentImg == 3)
    {
        console.log('无法前进');
    }
    else{
        //退出作品集
        $(".ProjectContent").fadeOut(1)
        $(".ProjectContent div").eq(CurrentImg).stop().fadeOut(1)
        CurrentImg++;
        //进入作品集
        console.log("进入"+CurrentImg)
        elevator_init()
        //project内容出现
        $(".ProjectContent").fadeIn(1,function(){
            $("body,html").stop().animate({
                scrollTop:0
            },1)
        })
        $(".ProjectContent div").eq(CurrentImg).fadeIn(2000)
    }
})





