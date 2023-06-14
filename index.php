<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="style.css" rel="stylesheet"/>
    <title>Black Jack</title>
</head>
<body>
<h1>Black Jack</h1>
<h1 class="winner">Winner iS :</h1>
<div class="game">
    <div class="player">
        <h2>Player Cards</h2>
        <div class="cards">
            <div class="card card-player1">Card 1</div>
            <div class="card card-player2">Card 2</div>
            <div class="sum-player">Sum = </div>
            <div class="hit-card">Hit Card</div>
        </div>
        <div class="buttons">
            <button class="hit">Hit</button>
            <button class="stand">Stand</button>
        </div>
    </div>
    <div class="computer">
        <h2>Computer Cards</h2>
        <h3 class="header3"></h3>
        <div class="cards">
            <div class="card card-computer1">Card 1</div>
            <div class="card card-computer2">Card 2</div>
            <div class="card card-computer3">HittedCard1</div>
            <div class="card card-computer4">HittedCard2</div>
            <div class="card card-computer5">HittedCard3</div>
            <div class="sum-computer">Sum = </div>
            <!-- Add more card elements for the computer as needed -->
        </div>
    </div>
</div>
<script type="module" src="script.js"></script>
</body>
</html>