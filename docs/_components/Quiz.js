import React from 'react';

export const MultipleChoice = ({question, correct, wrong, children}) => {

    return (
        <div className="card">
            <div className="card__header">
                <h3>{question}</h3>
            </div>
           
            <div className="card__body">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">
                        Default radio
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label className="form-check-label" for="exampleRadios2">
                        Second default radio
                    </label>
                    </div>
                    <div className="form-check disabled">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                    <label className="form-check-label" for="exampleRadios3">
                        Disabled radio
                    </label>
                </div>
            </div>

            <div className="card__footer">
                <button className="button button--primary">Verify</button>
            </div>
            {children}
        </div>
    )
}