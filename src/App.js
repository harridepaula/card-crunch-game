// Import the 'useState' hook from the 'react' module and CSS files
import { useState } from 'react'
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

    // Define a function that shuffles the 'cardImages' array, duplicates it, assigns a random ID to each card, and sets the resulting array as the new state of 'cards'
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages] // Duplicate the array
        .sort(() => Math.random() - 0.5) // Shuffle the array randomly
        .map((card) => ({ ...card, id: Math.random() })) // Assign a random ID to each card object

        // Set the shuffled cards and reset the number of turns to 0
        setCards(shuffledCards)
        setTurns(0)
    }

    console.log(cards, turns) // Log the current 'cards' and 'turns' state variables to the console

    // Render the App component
    return (
        <div className="App">
            <h1>Enchanted Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {/* Map over the 'cards' state variable and render a 'SingleCard' component for each card */}
                {cards.map(card => (
                    <SingleCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
}

// Export the App component as the default export of this module
export default App;