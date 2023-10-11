import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";

const DateToDayOfWeek = (day) => {
  const date = new Date(day);
  const options = { weekday: "long" };
  const dayOfWeek = date.toLocaleDateString("en-US", options);

  return <div>{dayOfWeek}</div>;
};

const DateToTime = (time) => {
  const originalDateTime = time;
  const convertedTime = new Date(originalDateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return convertedTime;
};

export default function Landing() {
  const [day, setday] = useState(1);
  const [location, setLocation] = useState("");
  const [data, setData] = useState();
  const [currentLocation, setCurrentLocation] = useState("");
  const [time, setTime] = useState("");
  const [current, setCurrent] = useState();
  const [today, setToday] = useState();
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDayChange = (e) => {
    setday(e.target.value);
  };
  const handleLocationChange = (data) => {
    setLocation(data);
  };
  const handleAPI = async () => {
    if (location && day) {
      setLoading(true);
      try {
        const response = await axios.post(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=${day}&aqi=no&alerts=no`
        );
        setCurrentLocation(response.data.location.name);
        setData(response.data.forecast.forecastday);
        setTime(response.data.current.last_updated);
        setCurrent(response.data.current);
        setToday(response.data.forecast.forecastday[0].hour);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Select days and search location");
    }
  };
  useEffect(() => {
    setState(true);
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            process.env.REACT_APP_API_KEY
          }&q=${location ? location : "london"}&days=${
            day ? day : 7
          }&aqi=no&alerts=no`
        );
        setToday(response.data.forecast.forecastday[0].hour);
        setCurrent(response.data.current);
        setCurrentLocation(response.data.location.name);
        setState(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!state ? (
        <div className="text-white xl:h-[calc(100vh-96px)]">
          <div className="flex gap-5 px-4">
            <div className="w-full">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an days
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => handleDayChange(e)}
              >
                <option selected>Choose a days</option>
                <option value="7">Week</option>
                <option value="1">Day</option>
                <option value="30">Month</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="London"
                onChange={(e) => handleLocationChange(e.target.value)}
              ></input>
            </div>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={handleAPI}
            >
              {!loading ? (
                "Click Me"
              ) : (
                <>
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 text-green-500"
                    viewBox="0 0 100 101"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
          <div className="flex xl:flex-row min-h-[650px] flex-col gap-10 w-full py-6">
            <div className="w-full px-4 flex flex-col justify-between">
              <div>
                <p className="text-center">CURRENT WEATHER</p>
                <div className="grid grid-cols-3 gap-x-4 text-center shadow-lg text-white my-1">
                  <div>
                    <p>{currentLocation}</p>
                    <p>Today </p>
                  </div>
                  <div>
                    <p>{current?.temp_c}°C</p>
                    <p>{current?.condition.text} </p>
                  </div>
                  <div className="flex justify-center">
                    <img src={current?.condition.icon} />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-center">AIR CONDITIONS</p>
                <div className="grid grid-cols-4 gap-x-4 text-center shadow-lg text-white my-1">
                  <div>
                    <p className="flex gap-3 justify-center">
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ThermostatIcon"
                      >
                        <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path>
                      </svg>
                      Real Feel
                    </p>
                    <p>{current?.temp_c}°C</p>
                  </div>
                  <div>
                    <p className="flex gap-3 justify-center">
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AirIcon"
                      >
                        <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
                      </svg>
                      Wind
                    </p>
                    <p>{current?.condition.text} </p>
                  </div>
                  <div>
                    <p className="flex gap-3 justify-center">
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="FilterDramaIcon"
                      >
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path>
                      </svg>
                      Clouds
                    </p>
                    <p>{current?.cloud} %</p>
                  </div>
                  <div>
                    <p className="flex gap-3 justify-center">
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="FilterDramaIcon"
                      >
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path>
                      </svg>
                      Humidity
                    </p>
                    <p>{current?.humidity} %</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3">
                {today?.map((item, index) => {
                  if (index % 4 === 0) {
                    return (
                      <div className="shadow-lg bg-white/20 flex justify-center flex-col rounded-lg px-5">
                        <p className="text-center">{DateToTime(item.time)}</p>
                        <img src={item.condition.icon} />
                        <p className="text-center">{item.temp_c}°C</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className={`${!data ? "" : "w-full px-4"}`}>
              {data &&
                data.map((item, index) => {
                  if (index > 0) {
                    return (
                      <div className="bg-white/5 grid grid-cols-3 gap-x-4 text-center shadow-lg text-white my-1 py-2 rounded-lg">
                        <div className="flex justify-start flex-col space-y-1 ml-16">
                          <p className="text-start">
                            {DateToDayOfWeek(item.date)}
                          </p>
                          <div className="flex justify-start gap-3">
                            <img
                              src={item.day.condition.icon}
                              className="h-[30px]"
                            />
                            <p className="flex gap-3 items-center">
                              {item.day.condition.text}
                            </p>
                          </div>
                        </div>
                        <div className="mx-auto text-[18px] space-y-1">
                          <p className="flex gap-3 items-center">
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="ThermostatIcon"
                            >
                              <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path>
                            </svg>
                            {item.day.avgtemp_c}°C
                          </p>
                          <p className="flex gap-3 items-center">
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="FilterDramaIcon"
                            >
                              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path>
                            </svg>
                            {item.day.avghumidity} %
                          </p>
                        </div>
                        <div className="mx-auto text-[18px] space-y-1">
                          <p className="flex gap-3 items-center">
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="AirIcon"
                            >
                              <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path>
                            </svg>
                            {item.day.avgvis_km} km/h
                          </p>
                          <p className="flex gap-3 items-center">
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="FilterDramaIcon"
                            >
                              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path>
                            </svg>
                            0 %
                          </p>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      ) : (
        <div className="xl:h-[calc(100vh-96px)] flex justify-center">
          <svg
            aria-hidden="true"
            class="inline w-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
    </>
  );
}
