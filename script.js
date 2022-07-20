const Convert = (input) => {
  const Fahrenheit = document.getElementById("Fahrenheit").value;
  const Celcius = document.getElementById("Celcius").value;

  if (input === "Fahrenheit") {
    result = ((Fahrenheit - 32) * 5) / 9;
    res = result.toFixed(2);
    const fahr = document.getElementById("Celcius");
    fahr.value = res;
  } else if (input === "Celcius") {
    result = (Celcius * 9) / 5 + 32;
    res = result.toFixed(2);
    const celc = document.getElementById("Fahrenheit");
    celc.value = res;
  }
};
