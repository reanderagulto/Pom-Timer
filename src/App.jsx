import { useState } from 'react'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0)

    return (
        <Card 
            color="primary"
        >
            <Card
                color="white"
            >
                <h1>Session</h1>
                
            </Card>
        </Card>
    )
}

export default App
