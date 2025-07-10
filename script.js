var numInput = document.getElementById("num-input");
var convertBtn = document.getElementById("convert-btn");
var lengthResult = document.getElementById("size-result");
/*
16px = 1rem
1rem = 1em
*/
if (convertBtn && numInput && lengthResult) {
    convertBtn.addEventListener("click", function () {
        var inputVal = parseFloat(numInput.value);
        if (isNaN(inputVal)) {
            lengthResult.innerHTML = "Please enter a valid number.";
            return;
        }
        var pxResult = inputVal * 16;
        var remResult = inputVal / 16;
        lengthResult.innerHTML = "".concat(inputVal, " rem = ").concat(pxResult.toFixed(3), " px <span class=\"separator\">|</span> ").concat(inputVal, " px = ").concat(remResult.toFixed(3), " rem");
    });
}
