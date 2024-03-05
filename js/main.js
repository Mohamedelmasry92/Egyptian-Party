let isSlide = true
let slideWidth = $('#slide').width()
$('#open').click(function(){
    if(isSlide){
        $('#slide').animate({width:"toggle"},500)
        $('#open').animate({left: slideWidth},500)
        $('#content').animate({paddingLeft: slideWidth},500)
        isSlide = false;
    }else if(isSlide == false){
        $('#slide').animate({width:"toggle"},500)
        $('#open').animate({left:`25px`},500)
        $('#content').animate({paddingLeft: `-${slideWidth}`},500)
        isSlide = true;
    }
})

$('#close').click(function(){
    $('#slide').animate({width:"toggle"},500)
    $('#open').animate({left:`25px`},500)
    $('#content').animate({paddingLeft: `-${slideWidth}`},500)
    isSlide = true;
})



$('#one').next().fadeIn(200)
$('#details h3').click(function(){
    $(this).next().slideToggle(800);
    $('#details div').siblings().not('#details h3').not( $(this).next()).slideUp(800);
})


function timer(){
    let currentTime = new Date().getTime()
    // let futureTime = new Date("Feb 26, 2023   17:34:40").getTime()  //You can trace when time finished to show TIME UP
    let futureTime = new Date("2023-4-3").getTime()
    
    let countTime = futureTime - currentTime;
    
    let days = Math.floor(countTime / (1000 * 60 * 60 * 24) );
    let hours = Math.floor(countTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(countTime % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(countTime % (1000 * 60) / (1000));
    
    if (days < 10){$('#days').html( "0" + days + " D")}else{$('#days').html(days + " D")}
    if (hours < 10){$('#hours').html( "0" + hours + " h")}else{$('#hours').html(hours + " h")}
    if (minutes < 10){$('#minutes').html( "0" + minutes + " m")}else{$('#minutes').html(minutes + " m")}    
    if (seconds < 10){$('#seconds').html( "0" + seconds + " s")}else{$('#seconds').html(seconds + " s")}

    if (countTime < 0){
        $('#days').html("00 D");
        $('#hours').html("00 h");
        $('#minutes').html("00 m");
        $('#seconds').html("00 s");
        $('#danger').attr("class", "col-3 bg-danger fa-beat m-auto d-block text-dark fs-2 fw-bolder");
    }

    setTimeout(timer , 1000)
}
timer()


let char  = 100;
$('#textcount').keyup(function(e){
    let length =  $(e.target).val().length
    let count = char - length
    if(count <= 0){
        $('#count').html("Your available character finished")
    }else{
        $('#count').html(count);
    }
})