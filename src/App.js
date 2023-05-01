// Import the 'useState' hook from the 'react' module and CSS files
import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

// Define an array of objects that contains the image sources for the memory cards
const cardImages = [
    { "src": "/img/butterfly.png" },
    { "src": "/img/flower.png" },
    { "src": "/img/moon.png" },
    { "src": "/img/moth.png" },
    { "src": "/img/timer.png" },
    { "src": "/img/unicorn.png" },
]

// Define the main App component
function App() {
    // Define two state variables: 'cards' to store the shuffled cards and 'turns' to store the number of turns taken
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    // Define a function that shuffles the 'cardImages' array, duplicates it, assigns a random ID to each card, and sets the resulting array as the new state of 'cards'
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages] // Duplicate the array
        .sort(() => Math.random() - 0.5) // Shuffle the array randomly
        .map((card) => ({ ...card, id: Math.random() })) // Assign a random ID to each card object

        // Set the shuffled cards and reset the number of turns to 0
        setCards(shuffledCards)
        setTurns(0)
    }

    // Handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //Compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.src === choiceTwo.src) {
                console.log("those cards match!!")
                resetTurn()
            } else {
            console.log("those cards do not match")
            resetTurn()
            }
        }
    }, [choiceOne, choiceTwo])

    // Reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
    }

    // Render the App component
    return (
        <div className="App">
            <h1>Enchanted Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                    />
                ))}
            </div>
        </div>
    );
}

// Export the App component as the default export of this module
export default App;