$(function () {
    $("#book-player").after('<div class="speed-controller"><input type="button" class="tool" value="-"><span class="x_str">x</span><input type="number" id="speed-num" value="1" step="0.01" max="10" min="0.01"><input type="button" class="tool" value="+"></div>');
    $("#speed-num").on("keyup", function(event) {
        event.stopPropagation();
    });
});