const btn = document.getElementById("btn")
const jokeElement = document.getElementById("joke")

function getjoke() {
    const jokes = [
        "What does a storm cloud wear under his raincoat? Thunderwear.",    
        "What do kids play when their mom is using the phone? Bored games.",
        "Why are snails slow? Because they're carrying a house on their back.",
        " Why are snails slow? Because they're carrying a house on their back.",
        " What is fast, loud and crunchy? A rocket chip.",
        " How does the ocean say hi? It waves!",
        " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
        " Why did the teddy bear say no to dessert? Because she was stuffed.",
        " Why did the soccer player take so long to eat dinner? Because he thought he couldn't use his hands.",
    ]

    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        const ramdomIndex = Math.floor(Math.random()*jokes.length)
        const ramdomJoke = jokes[ramdomIndex]

    if (ramdomJoke) {
        resolve(ramdomJoke)
    } else{
    reject("Failed to fetch joke")
   }
    },2000);
    })
}
    btn.addEventListener("click",() =>{
    jokeElement.textContent = "Fetching joke..."
    getjoke().then((joke) =>{
   jokeElement.textContent = joke
    }).catch((error) =>{
        jokeElement.textContent = error
    })
})