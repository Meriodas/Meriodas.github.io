function magnifier(zoomlevel) {
    $('.left').find('.zoom').css({
        backgroundSize: $('.left').width() * zoomlevel + 'px ' + $('.left').height() * zoomlevel + 'px',
    })
    $('.left').on('mousemove', function(e) {
        $('.zoom').show();
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
        // console.log(x, y)
        if (x > $(".left").width() || x < 0 || y > $(".left").height() || y < 0) {
            $('.zoom').hide();
            return
        }
        $('.left').find('.zoom').css({
            "left": x - $('.zoom').width() / 2 + "px",
            "top": y - $('.zoom').height() / 2 + "px",
            backgroundPositionX: -(x * zoomlevel + 5 - $('.zoom').width() / 2) + 'px',
            backgroundPositionY: -(y * zoomlevel + 5 - $('.zoom').height() / 2) + 'px',
        })
    })
}
magnifier(1);
console.log($('input').val());
$('button').click(function() {
    magnifier($('input').val());
})
