let onClick = document.getElementById("clickMe");

onClick.addEventListener("click", function () {
  displayDetails();
});

let displayDetails = () => {
  const cityName = document.getElementById("cityName");
  const city = cityName.value;
  const apiKey = "db4949a299a9b446bf05edeea35e76d8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let weatherInfo = document.querySelector(".inform");

  try {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.log("Error! Status code:", response.status);
          document.getElementById("name").innerHTML = `City not Found!`;

          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("name").innerHTML = `City name: ${data.name}`;
        document.getElementById(
          "weather"
        ).innerHTML = `Weather: ${data.weather[0].main}`;
        document.getElementById(
          "temp"
        ).innerHTML = `Temperature: ${data.main.temp}K`;
        document.getElementById(
          "humidity"
        ).innerHTML = `Humidity: ${data.main.humidity}`;
        document.getElementById(
          "wind"
        ).innerHTML = `Wind speed: ${data.wind.speed}MPH`;
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  } catch (error) {
    console.log("Error! Fetching API.");
  }
};
