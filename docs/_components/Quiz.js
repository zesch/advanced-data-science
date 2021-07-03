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
        <div className="quiz multiple-choice">
        <h3>{question}</h3>
        {code &&
            <CodeBlock className={`language-${codeLang}`}>{code}</CodeBlock>
        }
        {children.map((child, index) => {
            const childProps = {index, checked: checked[index], showExplanation: show[index], ...child.props}
            return <AnswerContainer clickHandler={checkBoxClickHandler} {...childProps}/>
        })}
        <button class="button button--primary" onClick={submitHandler}>Submit</button>
        </div>

    )
}


const AnswerContainer = ({clickHandler, text, explanation, correct, showExplanation, index, checked}) => {

    return (<div className="answer" onClick={()=> clickHandler(index)}>
        <input type="checkbox" id="checkbox" checked={checked} onChange={()=> clickHandler(index)}/>
        <label for="checkbox">{text}</label>
        {showExplanation &&
            <div className={`alert alert--${correct ? 'success' : 'danger'}`} role="alert">
                {explanation}
            </div>
        }
    </div>)
}

export const Answer = () => {
    throw new Error(
        'ReactBootstrap: The `Tab` component is not meant to be rendered! ' +
          "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " +
          'For custom tabs components use TabPane and TabsContainer directly',
      );
      // Needed otherwise docs error out.
      return <></>;
}