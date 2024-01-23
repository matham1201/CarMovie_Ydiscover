const questions = [
    "Quelle est cette voiture ?",
    "En quelle année est sorti cette voiture ?",
    "Quelle est cette voiture ?",
    "Quel est le constructeur ?",
    "Dans quel film est présente cette voiture ?",
    "Son moteur est un :",
    "Cette voiture consomme :",
    "Combien de cheveaux a-t-elle ?",
    "Cette voiture c'est :",
    "Quel est le constructeur ?"
]

const images = [
    "../static/images/Aston_Martin_DB5.png",
    "../static/images/Chevrolet_Corvette_Grand_Sport-1963.png",
    "../static/images/Dodge-charger-rt.png",
    "../static/images/Toyota_Supra_MK_IV.png",
    "../static/images/Nissan_Skyline_GT-R.png",
    "../static/images/Jensen_Interceptor.png",
    "../static/images/F-Bomb_Camaro-1973.png",
    "../static/images/Ford_Mustang_Shelby_GT500.png",
    "../static/images/Fiat-Multipla-2002.png",
    "../static/images/Chevrolet_Corvette_Stingray.png"
]

const options = [
    ["Aston Martin DBS", "Aston Martin V8 Vantage", "Aston Martin DB5", "Aston Martin DBS Superleggera"],
    ["1961", "1963", "1966", "1970"],
    ["Dodge Charger RT", "Dodge Challenger Hellcat", "Dodge Journey", "Dodge Durango"],
    ["Ford", "Dodge", "Toyota", "Mercedes"],
    ["Fast and Furious 4", "La Soupe aux Choux", "Transformers", "Oggy et les Cafards"],
    ["V5", "V6", "V8", "W16"],
    ["5 litres", "13 litres", "21 litres", "29 litres"],
    ["295", "320", "370", "400"],
    ["Le GOAT", "La Batmobile", "Une Fiat Multipla", "Je sais pas, elle pu !"],
    ["Porsche", "Chevrolet", "Nissan", "Plymouth"]
]

const correctAnswers = [2, 1, 0, 2, 0, 2, 2, 3, 0, 1]
let currentQuestion = 0
let score = 0

function loadQuestion(){
    
    const questionContainer = document.getElementById("question")
    questionContainer.innerText = questions[currentQuestion]

    const image = document.createElement("img")
    image.src = images[currentQuestion]
    questionContainer.appendChild(image)

    const optionsContainer = document.getElementById("options")
    optionsContainer.innerHTML = ""

    options[currentQuestion].forEach((option, index) => {
        const button = document.createElement("button")
        button.innerText = option
        button.classList.add("option")
        button.onclick = () => checkAnswer(index)
        optionsContainer.appendChild(button)
    })
}

function checkAnswer(selectedIndex){
    const selectedButton = document.getElementById("options").querySelectorAll(".option")[selectedIndex]

    if (selectedIndex === correctAnswers[currentQuestion]){
        selectedButton.style.backgroundColor = "#689F38"
        score++

    } else {
        selectedButton.style.backgroundColor = "#D32F2F"
    }

    disableButtons()
}

function loadNextQuestion(){

    if(currentQuestion < questions.length - 1){
        currentQuestion++
        loadQuestion()

    } else {
        document.getElementById("next").style.display = "none"
        document.getElementById("question").classList.add("text-center")
        document.getElementById("question").innerText = "Quiz terminé!"
        document.getElementById("options").innerHTML = ""
        document.getElementById("score").classList.add("text-center")
        document.getElementById("score").innerText = score + "/" + questions.length
    }
}

function disableButtons(){

    const allButtons = document.querySelectorAll(".option")
    allButtons.forEach(button => {
        button.disabled = true
    })
}

loadQuestion()
