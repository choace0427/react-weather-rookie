import { Body, Html, Tailwind } from "@react-email/components";
import React, { useEffect } from "react";
import { Resend } from "resend";

export default function Email() {
  useEffect(() => {
    async function sendData() {
      const resend = new Resend("re_LqXXzqZY_KG9CkkzQqrKNWhVK6iB5zzbm");

      resend.emails.send({
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        from: "onboarding@resend.dev",
        to: "jacobkevin0427@gmail.com",
        subject: "Hello World",
        react: <Email />,
      });
    }

    sendData();
  }, []);
  return (
    <>
      <Html>
        <Body>
          <Tailwind>
            <div className=" max-w-[800px] mx-auto mb-60">
              <p className="text-center flex items-center justify-center py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="210"
                  height="50"
                  viewBox="0 0 3126 638"
                  fill="none"
                >
                  <path
                    d="M1103.4 228.8C1101.4 213.6 1096.6 200.4 1089 189.2C1073.4 165.2 1047.6 153.2 1011.6 153.2C981.6 153.2 959.8 160 946.2 173.6C933.8 186.4 927.6 203.8 927.6 225.8C927.6 250.2 934.4 267 948 276.2C961.6 285.4 980.6 291 1005 293C1028.2 295 1047.8 298.2 1063.8 302.6C1079.8 306.6 1093.2 312.2 1104 319.4C1132.4 337 1146.6 364.6 1146.6 402.2C1146.6 417 1143.6 431 1137.6 444.2C1132 457.4 1123.8 469.2 1113 479.6C1088.6 503.6 1055.2 515.6 1012.8 515.6C970 515.6 936.2 503.8 911.4 480.2C890.2 460.6 877.4 434.2 873 401H914.4C918 421 926.4 437.4 939.6 450.2C956.8 466.2 981.4 474.2 1013.4 474.2C1040.6 474.2 1062.6 467.6 1079.4 454.4C1096.6 440.8 1105.2 423.4 1105.2 402.2C1105.2 388.6 1102.4 377.4 1096.8 368.6C1091.6 359.4 1081.4 352 1066.2 346.4C1051 340.8 1029.4 336.8 1001.4 334.4C924.6 327.6 886.2 291.4 886.2 225.8C886.2 209.4 888.8 194.4 894 180.8C899.6 166.8 907.4 154.8 917.4 144.8C939.4 122.8 970.6 111.8 1011 111.8H1011.6C1052.8 112.2 1084.2 123.6 1105.8 146C1127.8 168 1140.8 195.8 1144.8 229.4H1103.4V228.8ZM1226.16 384.2C1230.96 409.8 1243.56 431.2 1263.96 448.4C1284.36 465.2 1307.76 473.6 1334.16 473.6C1353.76 473.6 1371.76 469 1388.16 459.8C1404.56 450.6 1417.76 438 1427.76 422L1463.16 442.4C1449.56 464.4 1431.36 482 1408.56 495.2C1385.76 508.4 1360.96 515 1334.16 515C1306.96 515 1281.76 508.2 1258.56 494.6C1235.36 481 1216.96 462.6 1203.36 439.4C1189.76 416.2 1182.96 391 1182.96 363.8C1182.96 336.2 1189.76 311 1203.36 288.2C1216.96 265 1235.36 246.6 1258.56 233C1281.76 219.4 1306.96 212.6 1334.16 212.6C1361.36 212.6 1386.56 219.4 1409.76 233C1432.96 246.6 1451.36 265 1464.96 288.2C1478.56 311 1485.36 336.2 1485.36 363.8C1485.36 368.6 1484.96 375.4 1484.16 384.2H1226.16ZM1334.16 253.4C1316.56 253.4 1299.36 257.6 1282.56 266C1265.76 274 1252.16 285.2 1241.76 299.6C1231.36 313.6 1226.16 328.8 1226.16 345.2H1442.16C1442.16 328.8 1436.96 313.6 1426.56 299.6C1416.16 285.2 1402.56 274 1385.76 266C1369.36 257.6 1352.16 253.4 1334.16 253.4ZM1580.15 113V512H1539.35V113H1580.15ZM1680.93 113V512H1640.13V113H1680.93ZM1965.31 228.8C1963.31 213.6 1958.51 200.4 1950.91 189.2C1935.31 165.2 1909.51 153.2 1873.51 153.2C1843.51 153.2 1821.71 160 1808.11 173.6C1795.71 186.4 1789.51 203.8 1789.51 225.8C1789.51 250.2 1796.31 267 1809.91 276.2C1823.51 285.4 1842.51 291 1866.91 293C1890.11 295 1909.71 298.2 1925.71 302.6C1941.71 306.6 1955.11 312.2 1965.91 319.4C1994.31 337 2008.51 364.6 2008.51 402.2C2008.51 417 2005.51 431 1999.51 444.2C1993.91 457.4 1985.71 469.2 1974.91 479.6C1950.51 503.6 1917.11 515.6 1874.71 515.6C1831.91 515.6 1798.11 503.8 1773.31 480.2C1752.11 460.6 1739.31 434.2 1734.91 401H1776.31C1779.91 421 1788.31 437.4 1801.51 450.2C1818.71 466.2 1843.31 474.2 1875.31 474.2C1902.51 474.2 1924.51 467.6 1941.31 454.4C1958.51 440.8 1967.11 423.4 1967.11 402.2C1967.11 388.6 1964.31 377.4 1958.71 368.6C1953.51 359.4 1943.31 352 1928.11 346.4C1912.91 340.8 1891.31 336.8 1863.31 334.4C1786.51 327.6 1748.11 291.4 1748.11 225.8C1748.11 209.4 1750.71 194.4 1755.91 180.8C1761.51 166.8 1769.31 154.8 1779.31 144.8C1801.31 122.8 1832.51 111.8 1872.91 111.8H1873.51C1914.71 112.2 1946.11 123.6 1967.71 146C1989.71 168 2002.71 195.8 2006.71 229.4H1965.31V228.8ZM2311.28 461.6C2296.88 478.4 2279.68 491.6 2259.68 501.2C2240.08 510.4 2218.88 515 2196.08 515C2168.88 515 2143.68 508.2 2120.48 494.6C2097.28 481 2078.88 462.6 2065.28 439.4C2051.68 416.2 2044.88 391 2044.88 363.8C2044.88 336.6 2051.68 311.4 2065.28 288.2C2078.88 265 2097.28 246.6 2120.48 233C2143.68 219.4 2168.88 212.6 2196.08 212.6C2218.88 212.6 2240.08 217.4 2259.68 227C2279.68 236.2 2296.88 249.2 2311.28 266L2274.68 287C2264.68 276.6 2252.88 268.6 2239.28 263C2225.68 257 2211.28 254 2196.08 254C2176.08 254 2157.68 259 2140.88 269C2124.08 278.6 2110.68 291.8 2100.68 308.6C2090.68 325.4 2085.68 343.8 2085.68 363.8C2085.68 383.8 2090.68 402.2 2100.68 419C2110.68 435.8 2124.08 449.2 2140.88 459.2C2157.68 468.8 2176.08 473.6 2196.08 473.6C2211.28 473.6 2225.68 470.8 2239.28 465.2C2252.88 459.2 2264.68 451 2274.68 440.6L2311.28 461.6ZM2644.36 219.8V512H2602.96V456.8C2575.36 495.6 2538.56 515 2492.56 515C2464.96 515 2439.56 508.4 2416.36 495.2C2393.16 481.6 2374.76 463.2 2361.16 440C2347.96 416.8 2341.36 391.6 2341.36 364.4C2341.36 336.8 2347.96 311.4 2361.16 288.2C2374.76 265 2393.16 246.8 2416.36 233.6C2439.56 220 2464.96 213.2 2492.56 213.2C2520.96 213.2 2544.16 219.2 2562.16 231.2C2580.56 242.8 2594.16 255.4 2602.96 269V219.8H2644.36ZM2492.56 474.2C2512.56 474.2 2530.96 469.4 2547.76 459.8C2564.56 449.8 2577.76 436.4 2587.36 419.6C2597.36 402.8 2602.36 384.4 2602.36 364.4C2602.36 344.4 2597.36 326 2587.36 309.2C2577.76 292 2564.56 278.6 2547.76 269C2530.96 259 2512.56 254 2492.56 254C2472.56 254 2453.96 259 2436.76 269C2419.96 278.6 2406.56 292 2396.56 309.2C2386.96 326 2382.16 344.4 2382.16 364.4C2382.16 384.4 2386.96 402.8 2396.56 419.6C2406.56 436.4 2419.96 449.8 2436.76 459.8C2453.96 469.4 2472.56 474.2 2492.56 474.2ZM2745 113V512H2704.2V113H2745ZM2842.18 384.2C2846.98 409.8 2859.58 431.2 2879.98 448.4C2900.38 465.2 2923.78 473.6 2950.18 473.6C2969.78 473.6 2987.78 469 3004.18 459.8C3020.58 450.6 3033.78 438 3043.78 422L3079.18 442.4C3065.58 464.4 3047.38 482 3024.58 495.2C3001.78 508.4 2976.98 515 2950.18 515C2922.98 515 2897.78 508.2 2874.58 494.6C2851.38 481 2832.98 462.6 2819.38 439.4C2805.78 416.2 2798.98 391 2798.98 363.8C2798.98 336.2 2805.78 311 2819.38 288.2C2832.98 265 2851.38 246.6 2874.58 233C2897.78 219.4 2922.98 212.6 2950.18 212.6C2977.38 212.6 3002.58 219.4 3025.78 233C3048.98 246.6 3067.38 265 3080.98 288.2C3094.58 311 3101.38 336.2 3101.38 363.8C3101.38 368.6 3100.98 375.4 3100.18 384.2H2842.18ZM2950.18 253.4C2932.58 253.4 2915.38 257.6 2898.58 266C2881.78 274 2868.18 285.2 2857.78 299.6C2847.38 313.6 2842.18 328.8 2842.18 345.2H3058.18C3058.18 328.8 3052.98 313.6 3042.58 299.6C3032.18 285.2 3018.58 274 3001.78 266C2985.38 257.6 2968.18 253.4 2950.18 253.4Z"
                    fill="#75FF00"
                  />
                  <g clipPath="url(#clip0_118_403)">
                    <g filter="url(#filter0_d_118_403)">
                      <path
                        d="M644.798 213.769C641.466 217.333 637.784 220.835 633.883 224.161L554.596 291.329L545.138 299.332L540.567 250.164L540.165 246.455L539.179 239.877C538.568 236.498 537.805 233.049 536.583 228.429C534.57 221.019 531.776 213.61 528.278 206.32C528.167 206.056 528.014 205.792 527.875 205.528V205.515L535.792 198.818L577.151 163.782C578.554 162.594 579.983 161.221 581.205 159.954C590.094 150.459 594.539 138.281 593.772 125.644C592.995 112.991 587.091 101.383 577.148 92.9709C567.94 85.1656 556.289 80.9412 544.066 80.9412C543.066 80.9412 542.094 80.9809 541.109 81.0469C527.816 81.7597 515.61 87.3867 506.735 96.8289L470.71 135.287L463.737 142.736H463.723L401.449 209.254H401.435L393.089 218.168L362.953 250.326L354.509 259.333L248.765 250.498L257.195 241.504L288.695 207.881L297.042 198.98L366.83 124.495L375.163 115.608L443.187 42.9844C467.173 17.3773 500.197 2.18933 536.212 0.222346C572.195 -1.77104 606.874 9.69093 633.803 32.5125C660.732 55.321 676.69 86.7498 678.772 120.984C680.837 155.211 668.784 188.162 644.798 213.769Z"
                        fill="#75FF00"
                      />
                    </g>
                    <g filter="url(#filter1_d_118_403)">
                      <path
                        d="M465.865 366.487V366.5L456.407 374.503L425.324 400.81L415.978 408.734L337.593 475.15L328.233 483.074L208.821 584.221C189.378 600.69 165.115 608.786 140.921 608.786C112.784 608.786 84.745 597.825 64.5909 576.324C30.0509 539.44 30.0648 483.866 64.6325 447.047L169.696 334.9L178.127 325.906H178.14L283.857 334.741L275.413 343.761L128.142 500.971C122.405 507.087 122.405 516.331 128.156 522.459C134.407 529.129 145.183 529.71 152.183 523.78L317.411 383.817L326.785 375.88L405.17 309.464L414.544 301.514L447.071 273.979L456.529 265.963L465.865 366.487Z"
                        fill="#75FF00"
                      />
                    </g>
                    <path
                      d="M465.129 637.591C461.853 637.855 458.601 638 455.366 638C399.357 638 350.872 597.245 345.01 543.311L337.593 475.153L415.978 408.738L429.701 534.978C431.144 548.278 443.715 558.103 457.601 556.941C471.81 555.74 482.337 543.813 481.073 530.371L465.865 366.504V366.491L456.532 265.963V265.95L455.574 255.584L455.172 253.023C454.88 251.505 454.408 249.709 454.089 248.452C453.381 245.878 452.256 242.917 450.854 239.947C448.23 234.505 444.548 229.475 439.953 225.128C435.271 220.624 429.829 216.967 424.05 214.419C421.232 213.152 418.175 212.109 415.148 211.317C413.441 210.907 411.705 210.511 410.522 210.3L404.993 209.601L401.453 209.257L463.727 142.736H463.741C477.353 149.261 489.615 157.726 500.322 168.04C511.709 178.842 521.027 191.521 527.875 205.518V205.531C528.014 205.795 528.167 206.059 528.278 206.323C531.776 213.614 534.57 221.023 536.583 228.432C537.805 233.056 538.568 236.501 539.179 239.881L540.165 246.458L540.567 250.168L545.138 299.336V299.349L545.652 304.87L565.886 523.239C571.303 581.093 526.112 632.426 465.129 637.591Z"
                      fill="#EA5CF6"
                    />
                    <path
                      d="M405.173 309.464L326.789 375.879L324.082 351.104C323.249 343.51 316.873 337.513 308.831 336.827L283.86 334.741L178.144 325.906H178.13L105.427 319.817C74.68 317.243 46.8176 303.415 26.9862 280.897C7.15487 258.392 -2.26102 229.88 0.459974 200.617C3.11156 171.445 17.612 144.924 41.2784 126.053C64.7366 107.34 94.3864 98.3731 124.814 100.71H125.313L366.812 124.495H366.826L297.042 198.976L271.598 196.468L118.219 181.412C117.303 181.333 116.401 181.32 115.485 181.32C108.359 181.32 101.526 183.656 96.0003 188.069C89.7913 193.023 85.9735 200.006 85.2794 207.679C84.5436 215.471 87.0286 222.999 92.2519 228.917C97.4892 234.847 104.805 238.491 112.902 239.164L248.754 250.494H248.768L354.512 259.329L377.776 261.27C390.763 262.352 401.109 272.058 402.456 284.382L405.173 309.464Z"
                      fill="#EA5CF6"
                    />
                    <path
                      d="M326.789 375.877L403.924 297.953L405.173 309.465L326.789 375.877Z"
                      fill="#EA5CF6"
                    />
                    <path
                      d="M297.042 198.977L366.83 124.492L349.15 122.753L297.042 198.977Z"
                      fill="#EA5CF6"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_118_403"
                      x="244.765"
                      y="0"
                      width="438.235"
                      height="307.332"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_118_403"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_118_403"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d_118_403"
                      x="34.6963"
                      y="265.963"
                      width="435.169"
                      height="350.822"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_118_403"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_118_403"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_118_403">
                      <rect width="679" height="638" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <p className="text-4xl font-extrabold leading-0 text-center">
                Hristina Bell's Weekly Report
              </p>
              <p className="text-2xl leading-4 text-center">
                November 6, 2023 - November 14, 2023
              </p>
              <div className="flex flex-col gap-12 my-3">
                <div className="warming-report border-2 border-[#ffe5d5] rounded-lg">
                  <div className="bg-[#fff8f3] text-center rounded-t-lg flex items-center p-5">
                    <p className="flex justify-center w-full font-bold text-lg text-[#fb7400] gap-2 items-center">
                      <span className="text-base">🔥</span> Warming Report
                    </p>
                  </div>
                  <div className="border-b border-orange-50 p-3 flex items-center justify-center gap-4">
                    <p className="text-lg font-semibold flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-linkedin"
                        width="1.6rem"
                        height="1.6rem"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#fff"
                        fill="#228be6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line x1="8" y1="11" x2="8" y2="16"></line>
                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                        <line x1="12" y1="16" x2="12" y2="11"></line>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                      LinkedIn:
                    </p>
                    <p className="text-[18px] font-bold text-[#837f8a]">
                      warming 90 invites/week
                    </p>
                    <p className="bg-orange-50 px-3 py-1 rounded-full text-lg text-orange-600">
                      <span className="text-lg font-extrabold text-orange-600">
                        Next Week:
                      </span>
                      90 invites/week
                    </p>
                  </div>
                  <div className="p-3 px-5 flex justify-center items-center gap-4">
                    <p className="text-lg font-semibold flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail"
                        width="1.6rem"
                        height="1.6rem"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        fill="#228be6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <polyline points="3 7 12 13 21 7"></polyline>
                      </svg>
                      Email:
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                      warming 500 inboxes
                    </p>
                    <p className="bg-orange-50 px-3 py-1 rounded-full text-lg text-orange-600">
                      <span className="text-lg font-extrabold">Next Week:</span>
                      750 inboxes
                    </p>
                  </div>
                </div>
                <div className="text-gray-700 border-b-2 border-dashed border-gray-300 pb-[50px] px-0 md:px-30">
                  <p className="font-bold text-xl">Hi Hristina,</p>
                  <p className="font-medium text-xl">
                    Here is your weekly report. Any lunch scheduling with Miki?
                  </p>
                  <p className="font-medium text-xl">Last week, we:</p>
                  <ul className="list-disc ml-8 mt-0.5 text-xl font-medium">
                    <li>launched the US-focused MM DevOps campaign</li>
                    <li>started warming email</li>
                    <li>got a response from Mild</li>
                  </ul>
                  <p className="font-medium text-xl">Best,</p>
                  <p className="font-bold text-xl">Ishan</p>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="flex justify-center text-2xl font-semibold text-gray-700 gap-2 items-center">
                    <span className="text-lg">🔥</span> Your Active Campaigns
                  </p>
                  <div className="border-2 border-[#cfe5fe] bg-[#f4f9ff] px-5 py-5 flex justify-between items-center rounded-lg">
                    <div className="flex gap-4 items-center">
                      <p
                        style={{
                          background:
                            "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#0387f7 3%, #dedde1 0)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          color: "#838385",
                          fontWeight: "700",
                        }}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm text-gray-600 font-bold"
                      >
                        2%
                      </p>
                      <p className="font-semibold text-xl">AskEdith Partners</p>
                      <p className="bg-green-200 text-green-600 rounded-full px-3 py-0.5 text-sm font-semibold">
                        ACTIVE
                      </p>
                    </div>
                    <p className="bg-[#0387f7] text-white rounded-full px-4 py-1.5 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-linkedin"
                        width="1.3rem"
                        height="1.3rem"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#228be6"
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line x1="8" y1="11" x2="8" y2="16"></line>
                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                        <line x1="12" y1="16" x2="12" y2="11"></line>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                      Linkedin
                    </p>
                  </div>
                  <div className="border-2 border-[#cfe5fe] bg-[#f4f9ff] rounded-lg  px-5 py-5 flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <p
                        style={{
                          background:
                            "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#0387f7 3%, #dedde1 0)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          color: "#838385",
                          fontWeight: "700",
                        }}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm text-gray-600 font-bold"
                      >
                        0%
                      </p>
                      <p className="font-semibold text-xl">
                        Heads of Security...
                      </p>
                      <p className="bg-green-200 text-green-600 rounded-full px-3 py-0.5 text-sm font-semibold">
                        ACTIVE
                      </p>
                    </div>
                    <p className="bg-[#0387f7] text-white rounded-full px-4 py-1.5 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-linkedin"
                        width="1.3rem"
                        height="1.3rem"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#228be6"
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line x1="8" y1="11" x2="8" y2="16"></line>
                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                        <line x1="12" y1="16" x2="12" y2="11"></line>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                      Linkedin
                    </p>
                  </div>
                </div>
                <div className="pipeline">
                  <div className="relative">
                    <p className="flex justify-center items-center text-2xl font-semibold text-gray-700 gap-2">
                      <span className="text-lg">🚀</span> Your pipeline this
                      week
                    </p>
                    <div className="gragh-bg">
                      <div className="border-b-2 border-dashed border-gray-300 text-center h-[50px]"></div>
                      <div className="border-b-2 border-dashed border-gray-300 text-center h-[50px]"></div>
                      <div className="border-b-2 border-dashed border-gray-300 text-center h-[50px]"></div>
                      <div className="border-b-2 border-dashed border-gray-300 text-center h-[50px]"></div>
                      <div className="border-b-2 border-dashed border-gray-300 text-center h-[50px]"></div>
                      <div className="border-b-2 border-dashed border-gray-300 text-center h-[50px]"></div>
                      <div className="border-b-2 border-dashed border-gray-300 text-center h-[50px]"></div>
                    </div>
                    <div className="absolute grid grid-cols-4 bottom-0 items-end w-full justify-center">
                      <div className="bg-pink-500 w-[74px] h-[330px] mx-auto"></div>
                      <div className="bg-pink-500 w-[74px] h-[170px] mx-auto"></div>
                      <div className="bg-pink-500 w-[74px] h-[40px] mx-auto"></div>
                      <div className="bg-pink-500 w-[74px] h-[10px] mx-auto"></div>
                    </div>
                  </div>
                  <div className="content grid grid-cols-4 gap-x-4">
                    <div className="text-center">
                      <p className="font-bold text-2xl text-pink-500">+73</p>
                      <p className="text-lg text-gray-600">Sent Outreach</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-2xl text-pink-500">+8</p>
                      <p className="text-lg text-gray-600">Accepted</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-2xl text-pink-500">+2</p>
                      <p className="text-lg text-gray-600">Active Convos</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-2xl text-pink-500">+0</p>
                      <p className="text-lg text-gray-600">Demo Set</p>
                    </div>
                  </div>
                </div>
                <div className="positive-response flex flex-col gap-4">
                  <p className="flex justify-center items-center text-2xl font-semibold text-gray-700 gap-2">
                    <span className="text-lg">😍</span> Your Positive Responses
                  </p>
                  <div className="bg-lightgray border-2 border-gray-300 rounded-md text-center">
                    <div className="py-1 px-2 bg-white border-b-2 border-gray-300 flex justify-center items-center">
                      <p className="font-bold text-lg">
                        Miki Hayut
                        <span className="text-gray-600 text-lg">
                          @ OwnBackup
                        </span>
                        - Hristina Bell
                      </p>
                    </div>
                    <div className="py-5 px-7 bg-gray-100 text-lg italic">
                      "Hi yes. Can you please send me an email to
                      michael@abs.com, and I will forward it to the person who
                      is in charge of the selection process."
                    </div>
                  </div>
                </div>
                <div className="sample-prospects">
                  <p className="text-center flex justify-center items-center gap-3 text-gray-700 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      className="w-8 h-8 text-blue-500"
                      viewBox="0 0 128.000000 128.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                        fill="#45b2d0"
                        stroke="2"
                      >
                        <path d="M..." />
                      </g>
                    </svg>
                    Next Week's Sample Prospects
                  </p>
                  <p className="text-center text-gray-600">
                    If these prospects aren't good fits, please contact us
                    through Slack
                  </p>
                  <div className="border-2 border-gray-300 rounded-md text-center border-dashed border-blue-200">
                    <p className="text-center font-semibold text-lg">
                      Campaign:{" "}
                      <a href="#" className="text-blue-500">
                        Executive decision makers (435 prospects left)
                      </a>
                    </p>
                    <div>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p className="text-green-500 text-sm">VERY HIGH</p>
                        <p className="text-gray-600 text-sm">-</p>
                        <p className="font-semibold text-black text-lg">
                          Aaron Mackey,
                        </p>
                      </div>
                      <span className="text-gray-600 text-lg">
                        VP, Head of AI and ML @ Sonata Therapeutics
                      </span>
                    </div>
                    <br />
                    <div>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p className="text-green-500 text-sm">VERY HIGH</p>
                        <p className="text-gray-600 text-sm">-</p>
                        <p className="font-semibold text-black text-lg">
                          Abhay A Shukla,
                        </p>
                      </div>
                      <span className="text-gray-600 text-lg">
                        Director Molecular Research @ KSL Biomedical
                      </span>
                    </div>
                    <br />
                    <div>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p className="text-green-500 text-sm">VERY HIGH</p>
                        <p className="text-gray-600 text-sm">-</p>
                        <p className="font-semibold text-black text-lg">
                          Adam Elsesser,
                        </p>
                      </div>
                      <span className="text-gray-600 text-lg">
                        CEO @ Penumbra Inc
                      </span>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="prospect-list">
                  <p className="text-lg flex justify-center gap-1 leading-none text-gray-700 font-semibold items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="34"
                      height="34"
                      strokeWidth="2"
                      stroke="#45b2d0"
                      viewBox="0 0 128.000000 128.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                        fill="#45b2d0"
                        stroke="2"
                      >
                        <path d="M320 978 c-99 -50 -128 -168 -65 -262 l24 -36 -37 -16 c-96 -40 -124 -101 -120 -264 l3 -115 515 0 515 0 3 115 c4 163 -24 224 -120 264 l-37 16 24 36 c63 94 34 212 -65 262 -24 12 -60 22 -80 22 -20 0 -56 -10 -80 -22 -99 -50 -128 -168 -65 -262 l24 -36 -37 -15 c-20 -9 -47 -26 -59 -37 l-23 -21 -23 21 c-12 11 -39 28 -59 37 l-37 15 24 36 c63 94 34 212 -65 262 -24 12 -60 22 -80 22 -20 0 -56 -10 -80 -22z m140 -40 c36 -19 49 -32 64 -70 19 -48 19 -48 0 -95 -16 -39 -28 -52 -66 -71 -41 -21 -51 -22 -88 -12 -53 14 -86 46 -100 99 -9 35 -8 48 9 86 16 36 29 50 63 65 55 25 64 25 118 -2z m499 -5 c85 -63 75 -186 -20 -236 -92 -49 -208 33 -195 137 12 104 133 159 215 99z m-399 -318 c57 -34 74 -75 78 -192 l4 -103 -41 0 -41 0 0 100 c0 93 -1 100 -20 100 -19 0 -20 -7 -20 -100 l0 -100 -120 0 -120 0 0 100 c0 93 -1 100 -20 100 -19 0 -20 -7 -20 -100 l0 -100 -40 0 -40 0 0 83 c0 194 50 239 255 235 89 -3 117 -7 145 -23z m483 1 c59 -40 72 -71 76 -188 l3 -108 -41 0 -41 0 0 100 c0 93 -1 100 -20 100 -19 0 -20 -7 -20 -100 l0 -100 -120 0 -120 0 0 100 c0 93 -1 100 -20 100 -19 0 -20 -7 -20 -100 0 -92 -2 -100 -19 -100 -17 0 -19 10 -23 128 -4 116 -3 129 16 150 30 34 69 41 201 39 98 -2 125 -6 148 -21z" />
                      </g>
                    </svg>
                    Prospect List
                  </p>
                  <div className="border-2 border-gray-300 rounded-md text-center border-dashed p-[0px] px-10 pb-15">
                    <p className="text-lg font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="14"
                        height="14"
                        viewBox="0 0 225.000000 225.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                          fill="#777f8a"
                          stroke="2"
                        >
                          <path d="M213 2230 c-40 -24 -53 -48 -53 -98 0 -42 27 -87 59 -97 16 -5 19 -22 24 -133 10 -178 85 -1525 93 -1652 7 -117 24 -161 74 -203 17 -15 47 -31 68 -37 51 -14 1243 -14 1294 0 21 6 51 22 68 37 50 42 67 86 74 203 8 127 83 1474 93 1652 5 111 8 128 24 133 52 17 78 114 43 163 -38 54 -2 52 -951 52 -852 0 -879 -1 -910 -20z m1795 -62 c18 -18 14 -56 -7 -68 -27 -14 -1725 -14 -1752 0 -21 12 -25 50 -7 68 17 17 1749 17 1766 0z m-1598 -151 c0 -2 -10 -13 -23 -25 l-23 -22 -24 25 -23 25 46 0 c26 0 47 -1 47 -3z m245 -47 l50 -50 -73 -73 -72 -72 -72 72 -73 73 50 50 c45 46 53 50 95 50 42 0 50 -4 95 -50z m145 47 c0 -2 -10 -13 -23 -25 l-23 -22 -24 25 -23 25 46 0 c26 0 47 -1 47 -3z m245 -47 l50 -50 -73 -73 -72 -72 -72 72 -73 73 50 50 c45 46 53 50 95 50 42 0 50 -4 95 -50z m145 47 c0 -2 -10 -13 -23 -25 l-23 -22 -24 25 -23 25 46 0 c26 0 47 -1 47 -3z m245 -47 l50 -50 -73 -73 -72 -72 -72 72 -73 73 50 50 c45 46 53 50 95 50 42 0 50 -4 95 -50z m130 30 c-10 -11 -23 -20 -30 -20 -7 0 -20 9 -30 20 -18 20 -17 20 30 20 47 0 48 0 30 -20z m258 -28 l47 -48 -72 -72 -72 -73 -70 71 -71 70 50 50 c45 46 53 50 95 50 41 0 50 -5 93 -48z m117 34 c0 -26 -21 -29 -43 -7 l-21 21 32 0 c21 0 32 -5 32 -14z m-1500 -351 c-70 -69 -70 -70 -90 -50 -15 16 -21 40 -26 118 -7 93 -6 99 17 123 l23 25 73 -73 73 -73 -70 -70z m393 3 c-37 -38 -72 -68 -77 -68 -6 0 -41 30 -78 67 l-68 67 72 73 73 73 72 -72 73 -72 -67 -68z m390 0 c-37 -38 -72 -68 -77 -68 -6 0 -41 30 -78 67 l-68 67 72 73 73 73 72 -72 73 -72 -67 -68z m380 0 l-73 -73 -70 70 -70 69 72 73 73 73 70 -70 70 -70 -72 -72z m326 135 c-1 -43 -4 -106 -8 -141 l-6 -63 -68 69 -68 68 68 71 c37 38 71 71 76 72 4 0 6 -34 6 -76z m-1294 -193 l69 -70 -69 -70 -69 -70 -73 72 -73 72 67 68 c37 38 70 68 73 68 3 0 37 -31 75 -70z m390 0 l70 -70 -73 -73 -72 -72 -72 72 -73 73 70 70 c38 38 72 70 75 70 3 0 37 -32 75 -70z m388 2 l68 -68 -73 -72 -72 -73 -70 71 -71 70 70 70 c38 38 72 70 75 70 3 0 36 -31 73 -68z m390 0 l67 -68 -73 -72 -73 -72 -69 70 -69 70 69 70 c38 39 72 70 75 70 3 0 36 -30 73 -68z m-1362 -336 c-38 -38 -73 -66 -78 -63 -6 4 -13 61 -17 127 -10 168 -4 173 91 78 l73 -73 -69 -69z m389 -1 l-70 -70 -72 72 -73 73 70 70 69 70 73 -72 73 -73 -70 -70z m383 2 l-74 -71 -69 69 -70 69 72 73 73 73 71 -71 71 -70 -74 -72z m392 143 l70 -70 -73 -73 -72 -72 -70 71 -71 70 68 71 c37 38 70 71 73 72 3 0 37 -31 75 -69z m300 -70 l-8 -122 -61 61 -61 61 65 65 c35 35 66 63 68 60 2 -2 1 -58 -3 -125z m-497 -267 l-73 -73 -69 70 -70 69 69 74 70 73 73 -70 72 -71 -72 -72z m390 0 l-72 -73 -68 67 c-38 37 -68 72 -68 77 0 6 30 41 67 78 l67 68 73 -72 73 -73 -72 -72z m-1163 137 l69 -70 -69 -70 -69 -70 -73 72 -73 72 67 68 c37 38 70 68 73 68 3 0 37 -31 75 -70z m387 3 l67 -68 -69 -71 -69 -71 -70 71 -71 71 67 68 c38 37 70 67 73 67 3 0 36 -30 72 -67z m-577 -193 l70 -70 -67 -67 c-37 -37 -69 -65 -71 -63 -8 10 -17 270 -10 270 5 0 40 -32 78 -70z m452 -66 c2 -1 -29 -33 -69 -72 l-73 -71 -70 69 -70 70 70 70 69 70 70 -67 c39 -38 72 -68 73 -69z m318 -74 l-69 -70 -72 71 -71 70 71 69 71 69 70 -69 70 -70 -70 -70z m390 140 l70 -70 -73 -73 -72 -72 -72 72 -73 73 70 70 c38 38 72 70 75 70 3 0 37 -32 75 -70z m278 -62 c-3 -51 -8 -95 -10 -98 -2 -2 -25 17 -51 43 l-46 47 49 50 c27 27 53 50 57 50 4 0 5 -42 1 -92z m-1250 -270 l-73 -73 -70 70 -70 69 72 73 73 73 70 -70 70 -70 -72 -72z m386 140 l70 -73 -69 -70 -70 -70 -70 70 -70 69 68 72 c37 39 68 72 68 73 1 0 34 -32 73 -71z m391 -143 l-70 -70 -72 72 -73 73 70 70 69 70 73 -72 73 -73 -70 -70z m388 -2 l-72 -73 -68 67 c-38 37 -68 72 -68 77 0 6 30 41 67 78 l67 68 73 -72 73 -73 -72 -72z m-965 -51 l67 -68 -73 -72 -73 -72 -69 70 -69 70 69 70 c38 39 72 70 75 70 3 0 36 -30 73 -68z m382 -2 l69 -70 -69 -70 -69 -70 -73 72 -73 72 67 68 c37 38 70 68 73 68 3 0 37 -31 75 -70z m390 0 l70 -70 -70 -70 -70 -69 -73 71 -73 71 68 69 c37 37 70 68 73 68 3 0 37 -32 75 -70z m-1152 -8 l58 -58 -57 -57 c-32 -32 -58 -56 -59 -55 -6 8 -12 228 -6 228 3 0 33 -26 64 -58z m1409 -54 c-2 -40 -6 -75 -8 -77 -3 -3 -21 12 -42 32 l-36 37 39 40 c21 22 42 40 45 40 3 0 4 -33 2 -72z m-1227 -128 l70 -70 -73 -72 -72 -73 -70 70 -70 69 68 72 c37 39 69 72 72 73 3 0 37 -31 75 -69z m390 0 l70 -70 -73 -73 -72 -72 -72 72 -73 73 70 70 c38 38 72 70 75 70 3 0 37 -32 75 -70z m385 -145 l-70 -70 -72 72 -73 73 70 70 69 70 73 -72 73 -73 -70 -70z m440 70 c0 -12 -25 -46 -60 -80 l-60 -60 -72 73 -73 72 70 70 69 70 63 -62 c37 -36 63 -71 63 -83z m-1018 -122 l68 -67 -52 -53 c-46 -46 -57 -53 -92 -53 -35 0 -47 7 -93 52 l-53 52 67 68 c37 37 72 68 77 68 6 0 41 -30 78 -67z m390 0 l68 -67 -52 -53 c-46 -46 -57 -53 -92 -53 -35 0 -47 7 -93 52 l-53 52 67 68 c37 37 72 68 77 68 6 0 41 -30 78 -67z m383 -3 l69 -70 -49 -50 c-43 -43 -54 -50 -89 -50 -35 0 -47 7 -93 52 l-53 52 67 68 c37 37 70 68 73 68 3 0 37 -31 75 -70z m-1127 -97 c-29 -29 -34 -32 -47 -18 -9 9 -17 40 -19 82 l-4 68 51 -50 51 -49 -32 -33z m1357 20 l-6 -35 -25 23 -24 23 27 29 c32 33 40 21 28 -40z m-1245 -68 l23 -25 -46 0 c-51 0 -55 4 -30 32 21 23 25 23 53 -7z m382 8 c27 -25 22 -33 -22 -33 -44 0 -48 5 -23 32 20 22 22 22 45 1z m390 0 c28 -25 22 -33 -29 -33 l-46 0 23 25 c28 30 28 30 52 8z m392 -24 c-3 -5 -21 -9 -41 -9 l-36 0 23 25 c22 23 25 24 41 9 10 -9 16 -21 13 -25z" />
                        </g>
                      </svg>
                      Automatically removed 9 prospects from pipeline
                    </p>
                    <span className="text-gray-600 text-lg">
                      SellScale automatically removes prospects that are <br />
                      not good fits for your target ICP.
                    </span>
                  </div>
                </div>
                <div className="visit-dashboard">
                  <p className="text-lg flex justify-center items-center gap-3 text-gray-700 font-semibold">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <line x1="3.6" y1="9" x2="20.4" y2="9" />
                      <line x1="3.6" y1="15" x2="20.4" y2="15" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    Visit Dashboard
                  </p>
                  <div className="border-2 border-gray-300 rounded-md text-center border-dashed p-4">
                    <p className="text-xl text-gray-600 font-medium">
                      To view our dashboard and access more information,
                      <br />
                      please visit
                      <a href="#" className="text-black font-semibold">
                        SellScale.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer border-t-2 border-gray-300 py-4 justify-center flex text-lg font-semibold">
              <span className="text-center text-gray-600">
                Do not forward this Email/Link to someone else!
                <br />
                <span className="font-bold text-black">
                  They will be able to log in as you
                </span>
              </span>
            </div>
          </Tailwind>
        </Body>
      </Html>
    </>
  );
}
