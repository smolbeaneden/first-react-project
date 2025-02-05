//import ListGroup from './components/ListGroup';
//import Alert from './components/Alert';
import Button from './components/Button';
import Board from './components/Board';
import Badge from './components/Badge';
import { useState } from 'react';
import '/src/App.css';
import {random} from 'radash';


function App() {
    const [place, setPlace] = useState({x: 500, y:500});
    const [show, setShow] = useState(true);

    function handleClick() {
        setShow(false);
    }

    function changePlace() {
        setPlace({x:random(350, 1200), y:random(50, 700)});
    }

    return <>
        <body>

            <Board>

                <h1 className="heading">{show && "Will you be my valentine?"}</h1>
                {show &&
                 <Button color="light" onClick={() => handleClick()}>Yes</Button>
                }
                {!show &&
                    <img src={('./src/giphy.gif')} alt=""/>
                }

            </Board>
            {show &&
                <Badge x={place.x} y={place.y} color="secondary" hover={() => changePlace()}>No</Badge>
            }
        </body>
    </>
}

export default App;

/*
    const items = ["hey", "bye", "meow"];
    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    return <div><ListGroup items = {items} heading="Hello" onSelectItem={handleSelectItem}/></div>;
    */