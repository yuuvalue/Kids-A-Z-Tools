$(function () {
    $("#book-player").after('<div class="speed-controller"><input type="button" class="tool" id="minus-btn" value="-"><span class="x_str">x</span><input type="number" id="speed-num" value="1" step="0.01" max="10" min="0.01"><input type="button" class="tool" id="plus-btn" value="+"></div>');
    $("#speed-num").on("keyup", function (event) {
        event.stopPropagation();
    });

    function mouse_push_hold_minus() {
        if (Number($("#speed-num").val()) >= 0.2) {
            $("#speed-num").val(BigNumber(Number($("#speed-num").val())).minus(BigNumber(0.1)));
        }
        if (pushing_flag_minus == 1) {
            setTimeout(mouse_push_hold_minus, 100);
        }
    };

    function mouse_push_hold_plus() {
        if (Number($("#speed-num").val()) <= 9.9) {
            $("#speed-num").val(BigNumber(Number($("#speed-num").val())).plus(BigNumber(0.1)));
        }
        if (pushing_flag_plus == 1) {
            setTimeout(mouse_push_hold_plus, 100);
        }
    };

    $("#minus-btn").mousedown(function () {
        pushing_flag_minus = 1;
        setTimeout(mouse_push_hold_minus, 120);
        return false;
    }).mouseup(function () {
        pushing_flag_minus = 0;
        clearTimeout(mouse_push_hold_minus);
    }).mouseleave(function () {
        pushing_flag_minus = 2;
        clearTimeout(mouse_push_hold_minus);
    }).mouseover(function () {
        pushing_flag_minus = 0;
        clearTimeout(mouse_push_hold_minus);
    });

    $("#plus-btn").mousedown(function () {
        pushing_flag_plus = 1;
        setTimeout(mouse_push_hold_plus, 120);
        return false;
    }).mouseup(function () {
        pushing_flag_plus = 0;
        clearTimeout(mouse_push_hold_plus);
    }).mouseleave(function () {
        pushing_flag_plus = 2;
        clearTimeout(mouse_push_hold_plus);
    }).mouseover(function () {
        pushing_flag_plus = 0;
        clearTimeout(mouse_push_hold_plus);
    });
});
