var x = Number(prompt("x.....!"));
for (var i = 1; i <= x; i++) {
    document.write("<div class=\"absolute\" style=\"left:calc(50% + ".concat(i * 10, "px );top:calc(50% + ").concat(i * 10, "px );  transform:translate(-50%,-50%);\">"));
    for (var j = 1; j <= x; j++) {
        for (var k = 1; k <= x; k++) {
            if (j === Math.ceil(x / 2) && k === Math.ceil(x / 2)) {
                document.write("<span class=\"inline-block px-[15px] py-[10px] m-[1px] rounded-full\" style=\"background-color:rgb(255,0,0);\">".concat(k, "</span>"));
            }
            else {
                document.write("<span class=\"inline-block px-[15px] py-[10px] m-[1px]\" style=\"background-color:rgb(".concat(Math.round(Math.random() * 100), ",").concat(Math.round(Math.random() * 150), ",").concat(Math.round(Math.random() * 200), "\">").concat(k, "</span>"));
            }
        }
        document.write("<br/>");
    }
    document.write("</div>");
}
