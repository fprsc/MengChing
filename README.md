<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I Ching Bunny Readings</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>Welcome to Bunny I Ching Readings</h1>
        <button id="getReading">Get Your Reading</button>
        <div id="reading"></div>
    </div>
    <script src="app.js"></script>
 body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f8ff;
    padding: 20px;
}
#app {
    max-width: 600px;
    margin: 0 auto;
}
button {
    padding: 10px 20px;
    font-size: 16px;
}
#reading {
    margin-top: 20px;
}
   
</body>
</html>
document.getElementById('getReading').addEventListener('click', function() {
    const hexagrams = [
        { number: 1, name: "The Creative", interpretation: "Leap confidently into new adventures. Trust your instincts to lead the way. Embrace opportunities with enthusiasm." },
        { number: 2, name: "The Receptive", interpretation: "Be patient and open to possibilities. Find strength in gentleness. Allow things to unfold naturally." },
        // Add other hexagrams here...
        { number: 64, name: "Before Completion", interpretation: "Stay alert and attentive near the finish line. Approach completion with care. Trust that success is within reach." }
    ];
    const randomHexagram = hexagrams[Math.floor(Math.random() * hexagrams.length)];
    
    document.getElementById('reading').innerHTML = `
        <h2>Hexagram ${randomHexagram.number}: ${randomHexagram.name}</h2>
        <p>${randomHexagram.interpretation}</p>
    `;
});
