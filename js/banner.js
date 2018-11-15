$(function() {
    var size = $('.img li').size();
    for (var i = 1; i < size + 1; i++) {
        var li = '<li>' + i + '</li>';
        $('.num').append(li);
    }
    $('.img li').first().show();
    $('.num li').first().addClass('active');
    /*手动轮播*/
    $('.num li').mouseover(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        i = index;
        $('.img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    })
    /*核心向左运动函数*/
    function moveL() {
        i--;
        if (i == -1) i = size - 1;
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
    };
    /*自动播放*/
    var i = 0;
    var t = setInterval(move, 1500);
    /*核心向右运动函数*/
    function move() {
        i++;
        if (i == size) i = 0;
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
    };
    $('.wrap').hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(move, 1500);
    })
    $('.btn-left').click(function() {
        moveL();
    })
    $('.btn-right').click(function() {
        move();
    })
})