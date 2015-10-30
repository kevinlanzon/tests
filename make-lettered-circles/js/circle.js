$(document).ready(function() {

    $('#area').attr('height',
        $('#area').css('height'));
    $('#area').attr('width',
        $('#area').css('width'));

    $('#area').on('click', function(e) {

        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var ctx = this.getContext('2d');
        var inputText = $('#input-box').val();
        var firstLetter = inputText.charAt(0);

        ctx.beginPath();
        ctx.arc(x, y, 30, 0, 2 * Math.PI);
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = '30px helvetica';
        ctx.fillText(firstLetter, x - 10, y + 10);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 3;
        ctx.stroke();

        $('#input-box').val(inputText.substring(1));
    });
});
