const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {
        const value = e.target.value;

        if (!/^[0-9]$/.test(value)) {
            e.target.value = "";
            return;
        }

        if (index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {

            if (code.value !== "") {
                code.value = "";
                return;
            }

            if (index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            }
        }
    });

});
