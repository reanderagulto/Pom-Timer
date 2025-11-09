import { 
    useState,
    useReducer,
    useRef, 
    useEffect
} from 'react'
import Card from './components/Card'
import Button from './components/Button';

function App() {
    const [defaultTime, setDefaultTime] = useState();
    const [count, setCount] = useState(0)

    return (
        <Card 
            color="primary"
            border="large"
            className="main-card"
        >
            <Card
                color="white"
                border="small"
                className="text-center"
            >   
                <div className="timer">
                    <h1 className="timer__header">Session</h1>
                    <div className="timer__time">
                        25:00
                    </div>
                    <div className="timer__button-wrapper">
                        <Button className="outlined">
                            Start
                        </Button>
                        <Button className="outlined">
                            Reset
                        </Button>
                    </div>
                </div>
            </Card>
            <div className="timer__controls">
                <Card
                    color="gray"
                    border="small"
                    className="timer__controls--breaks"
                >
                    <Card 
                        color="primary"
                        className="boxed timer__controls--screen"
                    >
                        <div className="breaks-screen">
                            <span className="break-control">-</span>
                            <span className="break-times">5</span>
                            <span className="break-control">+</span>
                        </div>
                    </Card>
                    <div className="timer__controls--header">
                        Break Length
                    </div>
                    
                </Card>
                <Card
                    color="gray"
                    border="small"
                    className="timer__controls--breaks"
                >
                    <Card 
                        color="primary"
                        className="boxed timer__controls--screen"
                    >
                        <div className="breaks-screen">
                            <span className="break-control">-</span>
                            <span className="break-times">25</span>
                            <span className="break-control">+</span>
                        </div>
                    </Card>
                    <div className="timer__controls--header">
                        Session Length
                    </div>
                </Card>
            </div>
        </Card>
    )
}

export default App
