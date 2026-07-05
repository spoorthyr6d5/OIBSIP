const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {

    const tempInput = document.getElementById("temperature").value.trim();
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (tempInput === "" || Number.isNaN(tempInput)) {
        result.innerHTML = "⚠ Please enter a valid number";
        result.style.color = "red";
        return;
    }

    let temp = Number.parseFloat(tempInput);
    let convertedTemp;

    if (fromUnit === toUnit) {
        convertedTemp = temp;
    }

    // Celsius conversions
    else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (temp * 9/5) + 32;
    }
    else if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemp = temp + 273.15;
    }

    // Fahrenheit conversions
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (temp - 32) * 5/9;
    }
    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemp = ((temp - 32) * 5/9) + 273.15;
    }

    // Kelvin conversions
    else if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemp = temp - 273.15;
    }
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemp = ((temp - 273.15) * 9/5) + 32;
    }

    const symbols = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };

    result.style.color = "#2d6a4f";
    result.innerHTML =
        `${temp} ${symbols[fromUnit]} = ${convertedTemp.toFixed(2)} ${symbols[toUnit]}`;
});