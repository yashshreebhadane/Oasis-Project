function convertTemperature() {
    const temp = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");

    if (temp === "") {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    let result = "";

    if (unit === "celsius") {
        const f = (temp * 9/5) + 32;
        result = `${f.toFixed(2)} °F`;
    } 
    else if (unit === "fahrenheit") {
        const c = (temp - 32) * 5/9;
        result = `${c.toFixed(2)} °C`;
    }
    else if (unit === "kelvin") {
        const c = temp - 273.15;
        result = `${c.toFixed(2)} °C`;
    }

    resultDiv.textContent = "Converted Temperature: " + result;
}
