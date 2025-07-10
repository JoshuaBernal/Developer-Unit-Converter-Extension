const numInput: HTMLElement | null = document.getElementById("num-input")
const convertBtn: HTMLElement | null = document.getElementById("convert-btn")
const lengthResult: HTMLElement | null = document.getElementById("size-result")

/*
16px = 1rem
1rem = 1em
*/

if (convertBtn && numInput && lengthResult) {
    convertBtn.addEventListener("click", function(): void {
        const inputVal: number = parseFloat((numInput as HTMLInputElement).value)
        if (isNaN(inputVal)) {
            lengthResult.innerHTML = "Please enter a valid number."
            return
        }
        let pxResult: number = inputVal * 16
        let remResult: number = inputVal / 16

        lengthResult.innerHTML = `${inputVal} rem = ${pxResult.toFixed(3)} px <span class="separator">|</span> ${inputVal} px = ${remResult.toFixed(3)} rem`
    })
}