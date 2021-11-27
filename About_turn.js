var Aboutdetail_Arr = [".about_detail_1",'.about_detail_2','.about_detail_3']
var Aboutdetail_title = ["EDUCATION",'COMPETITIVE','AWARDS']
var Arr_count = 0
var img_count = 0
var detail_turn = setInterval(function(){
    if(Arr_count > 2) Arr_count = Arr_count-3;
    //设置标题内容变化
    $("#Edu_title").text(Aboutdetail_title[Arr_count])
    //设置小a颜色变化
    $(`.About_turn div:nth-child(${Arr_count+1})`).css("backgroundColor","#FF5571")
    $(`.About_turn div:nth-child(${Arr_count+1})`).siblings().css("backgroundColor","#C2C2C2")
    //设置内容变化
    $(Aboutdetail_Arr[Arr_count]).fadeIn()
    $(Aboutdetail_Arr[Arr_count]).siblings().fadeOut()
    Arr_count++;
    img_count++;
    //设置图片变化
    if(img_count == 4)
    {
        img_count = img_count-4
        $("#img_turn_ul").animate({
            left:'10%'
        },1,function(){
            $("#img_turn_ul").animate({
                left:`-90%`
            },1000);
            img_count++;
        })
    }
    else{
        $("#img_turn_ul").animate({
            left:`${10-img_count*(100)}%`
        },1000)
    }
},6000)

$(".About_turn div").click(function(){
})
