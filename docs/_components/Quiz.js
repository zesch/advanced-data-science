import React, {useState} from 'react';
import CodeBlock from '@theme/CodeBlock';

export const MultipleChoice = ({code, codeLang, question, children}) => {

    const [checked, setChecked] = useState(children.map(c => false))
    const [show, setShow] = useState(children.map(c => false))
    
    const checkBoxClickHandler = (index) => {
        const newState = [...checked]
        newState[index] = !newState[index]
        setChecked(newState)
    }

    const submitHandler = () => {
        setShow([...checked]);
    }
    return (
        <div className="quiz multiple-choice-quiz card margin-bottom--md">
        <div className="card__header">
            <h3>{question}</h3> 
        </div>
        <div className="card__body">
            {code &&
                <CodeBlock className={`language-${codeLang}`}>{code}</CodeBlock>
            }
            {children.map((child, index) => {
                const childProps = {index, checked: checked[index], showExplanation: show[index], ...child.props}
                return <AnswerContainer key={index} clickHandler={checkBoxClickHandler} {...childProps}/>
            })}
        </div>
        <div className="card__footer">
            <button className="button button--primary" onClick={submitHandler}>Submit</button>
        </div>
        </div>

    )
}


const AnswerContainer = ({clickHandler, text, explanation, correct, showExplanation, index, checked}) => {

    return (<div className="answer" onClick={()=> clickHandler(index)}>
        <input type="checkbox" id="checkbox" checked={checked} onChange={()=> clickHandler(index)}/>
        <label htmlFor="checkbox">{text}</label>
        {showExplanation &&
            <div className={`alert alert--${correct ? 'success' : 'danger'}`} role="alert">
                {explanation}
            </div>
        }
    </div>)
}

export const Answer = () => {
    throw new Error(
        'The `Answer` component is not meant to be rendered! ' +
          "It's an abstract component that is only valid as a direct Child of the `MultipleChoice` Component. "
      );
      return <></>;
}