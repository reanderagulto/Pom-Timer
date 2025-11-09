import { 
    useState,
    useReducer,
    useRef, 
    useEffect
} from 'react'
import Card from './components/Card'
import Button from './components/Button';

const ACTION_TYPES = {
    BREAK: 'break',
    LENGTH: 'length'
}

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const DEFAULT_VALUES = {
    BREAK: 5,
    LENGTH: 25
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 5 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 5 }
        default:
            return state
    }
}

function App() {
    const [timerState, dispatch] = useReducer(reducer, { count: 5 });

    const increment = (type) => {
        dispatch( { type: ACTIONS.INCREMENT } )   
    }

    const decrement = (type) => {
        const limit = type === ACTION_TYPES.BREAK ? DEFAULT_VALUES.BREAK : DEFAULT_VALUES.LENGTH;

        if(timerState.count > DEFAULT_VALUES.BREAK) {
            dispatch( { type: ACTIONS.DECREMENT } )   
        }
    }

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
                            <span 
                                className="break-control" 
                                onClick={() => decrement(ACTION_TYPES.BREAK)}
                            >
                                -
                            </span>
                            <span className="break-times">{timerState.count}</span>
                            <span 
                                className="break-control" 
                                onClick={() => increment(ACTION_TYPES.BREAK)}
                            >
                                +
                            </span>
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
