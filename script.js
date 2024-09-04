const numInput = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("size-result")

/*
16px = 1rem
1rem = 1em
*/

convertBtn.addEventListener("click", function() {
    const inputVal = numInput.value
    let pxResult = inputVal * 16
    let remResult = inputVal / 16

    lengthResult.innerHTML = `${inputVal} rem = ${pxResult.toFixed(3)} px <span class="separator">|</span> ${inputVal} px = ${remResult.toFixed(3)} rem`

    console.log(meterResult, feetResult, literResult, gallonResult, kiloResult, poundResult)
})