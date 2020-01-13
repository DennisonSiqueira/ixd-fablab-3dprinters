<?php ?>
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3d Printing IXD</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="radio.css">
</head>

<body>
    <div class="container">
        <div class="header">
            <h1 class="title">3D Printing in <span style="color:#A33641">IXD</span></h1>
        </div>
        <div class="printers">
            <h1 class="printers-title">Choose a printer below to reserve the time</h1>
            <h2 id="current-time"></h2>
            <div class="printer-container">
                <img src="svg/1.svg" alt="" class="printers-svg" id="p1">
                <h3 class="availability">Available at <p id="availability-1">3:00PM</p>
                </h3>
            </div>
        </div>
        <div class="occupied-text">
            <h2>Printers occupied?</h2>
            <h2><a href="https://fabrication.sheridanc.on.ca/servicedesk/tickets/new/3d_print">Print using the fabrication site.</a></h2>
        </div>
    </div>
    <script src="script.js"></script>

</body></html>