$(document).ready(function () {

    var zi = 1;
    var EmptySquare = 9;
    $.fn.extend({
        eight:

        function (square_size) {
            var puzzleElement = '#' + $(this).attr('id');
            var sqSize = square_size + 'px';
            var boardSize = (square_size * 4) + 'px';
            $('.SlidingPuzzle').append("<li class='Tile Tile9 Hide'>9</li>");

            // Attach click event to each square
            $('.Tile').click(function () {
                Move(this, square_size);
            });
        }
    });

    function Move(clicked_square, square_size) {
        var movable = false;

        // Swap x/y between the clicked square and the currently empty square
        var EmptySquare = $('.Hide');
        var oldx = EmptySquare.css('left');
        var oldy = EmptySquare.css('top');
        var newx = $(clicked_square).css('left');
        var newy = $(clicked_square).css('top');

        console.log(oldx);
        console.log(oldy);
        console.log(newx);
        console.log(oldy);
        // The clicked square is north of the empty square
        if (oldx == newx && newy == (parseInt(oldy) - square_size) + 'px') movable = true;

        // The clicked square is south of the empty square
        if (oldx == newx && newy == (parseInt(oldy) + square_size) + 'px') movable = true;

        // The clicked square is west of the empty square
        if ((parseInt(oldx) - square_size) + 'px' == newx && newy == oldy) movable = true;

        // The clicked square is east of the empty square
        if ((parseInt(oldx) + square_size) + 'px' == newx && newy == oldy) movable = true;
        console.log(movable);
        if (movable) {
            var value = $(clicked_square).html()
            $(clicked_square).addClass('Hide', 500, 'linear');
            $(clicked_square).html('')
            EmptySquare.html(value);
            EmptySquare.removeClass('Hide', 500, 'linear');
        }
    }
    $('.SlidingPuzzleFigure').eight(45);
});
