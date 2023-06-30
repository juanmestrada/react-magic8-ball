import React, {useState} from 'react';
import './EightBall.css';
import answers from './answers'

const EightBall = () => {
    const [answer, setAnswer] = useState("Think of a question");
    const [activeAnswer, setActiveAnswer] = useState(true);
    const [activeEffect, setActiveEffect] = useState(false);
    
    const answerQuestion = () => {
        // disable clicking while effect is taking place
        if(activeEffect) return;

        // Effect is active
        setActiveEffect(true);
        
        // random index for answer
        const randIdx = Math.floor(Math.random() * answers.length);
        
        // toggle active answer
        setActiveAnswer(false);

        // update activeEffect after magic ball effects is done running
        setTimeout(() => {
            setActiveEffect(false);
        }, 5000);

        // hide answer triangle before displaying next answer
        setTimeout(() => {
            setAnswer(answers[randIdx].msg);
            setActiveAnswer(true);
        }, 2500)
        
    }
    return (
        <div className={`Eightball ${activeEffect ? 'active' : ''}`} onClick={answerQuestion}>
            <div className='Eightball-window'>
                <div className={`Eightball-triangle ${activeAnswer ? 'show' : ''}`}><span>{answer}</span></div>
            </div>
        </div>
    )
}

export default EightBall;