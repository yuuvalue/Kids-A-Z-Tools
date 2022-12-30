$(function () {
    $("#book-player").after('<div class="speed-controller"><input type="button" class="tool" id="minus-btn" value="-"><span class="x_str">x</span><input type="number" id="speed-num" value="1" step="0.01" max="10" min="0.01"><input type="button" class="tool" id="plus-btn" value="+"></div>');
    $("#speed-num").on("keyup", function (event) {
        event.stopPropagation();
    });

    function mouse_push_hold_minus() {
        if (Number($("#speed-num").val()) >= 0.2) {
            $("#speed-num").val(BigNumber(Number($("#speed-num").val())).minus(BigNumber(0.1)));
            push_count += 1;
        }
        if (pushing_flag == 1) {
            timer = setTimeout(mouse_push_hold_minus, 100);
        }
    };

    function mouse_push_hold_plus() {
        if (Number($("#speed-num").val()) <= 9.9) {
            $("#speed-num").val(BigNumber(Number($("#speed-num").val())).plus(BigNumber(0.1)));
            push_count += 1;
        }
        if (pushing_flag == 1) {
            timer = setTimeout(mouse_push_hold_plus, 100);
        }
    };

    function mouse_not_push() {
        pushing_flag = 0;
        if (push_count >= 1) {
            clearTimeout(timer);
        }
    }

    let timer;
    let push_count;

    $("#minus-btn").mousedown(function () {
        pushing_flag = 1;
        push_count = 0;
        timer = setTimeout(mouse_push_hold_minus, 120);
        return false;
    }).mouseup(function () {
        mouse_not_push();
    }).mouseleave(function () {
        mouse_not_push();
    }).mouseover(function () {
        mouse_not_push();
    });

    $("#plus-btn").mousedown(function () {
        pushing_flag = 1;
        push_count = 0;
        timer = setTimeout(mouse_push_hold_plus, 120);
        return false;
    }).mouseup(function () {
        mouse_not_push();
    }).mouseleave(function () {
        mouse_not_push();
    }).mouseover(function () {
        mouse_not_push();
    });
});
