<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Team Picker</title>
    <link rel="stylesheet" href="style/normalize.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/style.css" />
    <script src="js/script.js" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
<svg id="apply-page-bg--right" viewBox="0 0 887 1963" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.3" d="M378.502 -779C558.952 -779 705.568 -720.734 818.349 -606.082C931.13 -489.551 987.521 -339.187 987.521 -151.233C987.521 -10.2676 959.325 102.505 901.055 187.084C842.785 271.664 778.875 344.966 709.327 405.111C639.778 465.256 573.989 523.522 513.839 578.029C453.689 632.535 425.494 698.319 425.494 773.501C425.494 824.249 440.531 867.478 466.847 906.948C495.042 946.419 528.877 984.01 570.23 1019.72C611.583 1055.43 656.696 1093.02 705.567 1132.49C756.319 1171.96 801.432 1217.07 840.905 1265.94C882.258 1316.69 916.093 1374.95 944.288 1444.5C972.483 1514.04 985.641 1596.74 985.641 1692.6C985.641 1790.33 972.483 1873.03 944.288 1940.7C916.092 2010.24 882.258 2068.5 840.905 2119.25C799.552 2170 754.439 2213.23 705.567 2250.82C654.816 2288.41 609.703 2326 570.23 2361.71C528.877 2397.42 495.042 2435.02 466.847 2472.61C438.652 2510.2 425.494 2553.43 425.494 2604.17C425.494 2741.38 504.441 2810.92 660.455 2810.92L833.386 2810.92L833.386 3252.62L636.019 3252.62C457.449 3252.62 310.833 3194.35 198.052 3079.7C83.3907 2963.17 27.0001 2812.8 27.0001 2624.85C27.0001 2483.88 57.075 2371.11 115.345 2284.65C175.495 2198.19 239.405 2124.89 310.833 2064.75C380.381 2004.6 446.171 1946.33 502.561 1893.71C560.831 1841.08 589.027 1777.18 589.027 1701.99C589.027 1626.81 560.832 1562.91 502.561 1512.16C444.291 1461.41 380.381 1405.03 310.833 1344.88C241.285 1284.74 175.495 1213.31 115.345 1126.85C55.1954 1040.4 27.0002 925.744 27.0002 782.899C27.0002 685.163 40.1579 602.463 68.3533 534.799C96.5486 465.256 130.383 406.991 171.736 356.243C213.089 305.495 258.202 262.266 307.074 224.675C357.825 187.084 402.938 149.493 442.411 113.782C483.764 78.0708 517.599 40.48 545.794 2.88916C573.989 -34.7017 587.147 -77.9312 587.147 -128.679C587.147 -265.885 510.08 -335.428 357.825 -335.428L184.894 -335.428L184.894 -779L378.502 -779Z" fill="#CAB1FD"></path>
    <circle cx="749" cy="1333" r="15.5" stroke="#9262FB" stroke-width="3"></circle>
    <g style="mix-blend-mode:multiply">
        <circle cx="644.5" cy="1359.5" r="32.5" fill="#2B1266"></circle>
    </g>
</svg>
<svg id="apply-page-bg--left" viewBox="0 0 1717 2139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3">
        <path d="M-1918.69 1191.19C-1958.29 1100.11 -1918.69 989.22 -1827.61 945.657L1439.31 -666.173C1534.35 -713.697 1649.19 -674.094 1696.7 -579.047C1744.22 -484.001 1704.62 -369.153 1609.59 -321.63L-1657.33 1286.24C-1752.37 1333.76 -1867.21 1294.16 -1914.73 1199.11C-1914.73 1199.11 -1918.69 1195.15 -1918.69 1191.19Z" fill="#CAB1FD"></path>
        <path d="M-1091.05 -1248.33C-1130.65 -1339.41 -1091.05 -1450.3 -999.975 -1493.86C-904.937 -1541.39 -790.1 -1501.78 -742.581 -1406.74L869.099 1860.49C916.618 1955.53 877.019 2070.38 781.981 2117.91C686.943 2165.43 572.106 2125.83 524.587 2030.78L-1087.09 -1236.45C-1087.09 -1240.41 -1091.05 -1244.37 -1091.05 -1248.33Z" fill="#CAB1FD"></path>
    </g>
</svg>
<section class="container content">
    <div class="row">
        <div class="col">
            <h1>Team Picker</h1>
        </div>
    </div>
    <div class="row">
        <div class="col col-12 col-md-10">
            <form>
                <div id="victimProcessing" class="d-flex flex-column">
                    <input type="text" class="victim" placeholder="Baron Humbert von Gikkingen..." />
                </div>
        </div>
        <div class="col col-12 col-md-2 d-flex flex-column">
            <button id="addVictim" class="btn button">+</button>
            <button id="removeVictim" class="btn button disabled">-</button>
        </div>
    </div>
    <div class="row my-3">
        <div class="col col-12 col-md-6 d-flex flex-column">
            <input type="number" id="numberOfTeams" placeholder="Number of teams..." />
        </div>
        <div class="col col-12 col-md-6 d-flex justify-content-center align-content-center">
            <button id="determineFates" type="submit" class="btn button">Generate Teams</button>
            </form>
        </div>
    </div>
    <div class="row col errors justify-content-center text-center mx-2">
    </div>
    <div class="row results d-flex justify-content-evenly">
    </div>
</section>
</body>
</html>
