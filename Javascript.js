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
