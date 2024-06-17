import React, { useEffect, useReducer } from 'react'
import Inputss from '../components/ui/Inputss';
import {convertToIndianCurrency} from '../utils/convertToIndianCurrency';

function reducer(state = {}, { type, payload }) {
    switch (type) {
        case 'rangeInput':
            return { ...state, rangeInput: payload };
        case 'rateOfReturn':
            return { ...state, rateOfReturn: payload };
        case 'timePeriod':
            return { ...state, timePeriod: payload };
        case 'estimatedReturn':
            return { ...state, estimatedReturn: payload };
        case 'totalValue':
            return { ...state, totalValue: payload };


        default:
            return state;
    }
}
function Form() {
    const initialState = {
        sampel:'',
        rangeInput: '500',
        rateOfReturn: '1',
        timePeriod: '1',
        estimatedReturn: 0,
        totalValue: '0'
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const calculateMFReturns = () => {
        console.log("calculateMFReturns");
        const { timePeriod, rangeInput, rateOfReturn } = state;
        const presentValue = parseFloat(rangeInput);
        const toatalReturns = (presentValue * (1 + (rateOfReturn / 100)) ** timePeriod).toFixed(2);
        const estimatedReturn = (toatalReturns) - presentValue
        return { estimatedReturn, toatalReturns }
    }
    const handleInputChange = (event, type) => {
        dispatch({
            type: type,
            payload: event.target.value,
        });
    };

    useEffect(() => {
        console.log("useEffect");
        const { estimatedReturn, toatalReturns } = calculateMFReturns();
        dispatch({
            type: "estimatedReturn",
            payload: estimatedReturn.toFixed(2),
        });
        dispatch({
            type: "totalValue",
            payload: toatalReturns,
        });
    }, [state.rangeInput, state.timePeriod, state.rateOfReturn])


    return (
        <div className='flex flex-col justify-center items-center h-screen gap-3 '>
            {/* <Inputss type="text" value={state.sampel} onChange={(e) => handleInputChange(e,"sampel")}/> */}
            <Inputss id="rangeinput" type='text' value={state.rangeInput} onChange={(e) => handleInputChange(e, "rangeInput")} />
            <Inputss type='range' min='500' max="100000" value={state.rangeInput} step="500"
                onChange={(e) => handleInputChange(e, "rangeInput")}
            />
            <p>Rate Of Return {state.rateOfReturn}</p>
            <Inputss type='range' min='1.0' max="100" value={state.rateOfReturn} step="0.1"
                onChange={(e) => handleInputChange(e, "rateOfReturn")}
            />
            <p>Time Period {state.timePeriod}</p>
            <Inputss type='range' min='1' max="30" value={state.timePeriod} step="1"
                onChange={(e) => handleInputChange(e, "timePeriod")}
            />
            {/*  */}
            <div>Invested Amount {convertToIndianCurrency(state.rangeInput)}</div>
            <div>Est Return {convertToIndianCurrency(state.estimatedReturn)}</div>
            <div>Total value {convertToIndianCurrency(state.totalValue)}</div>
        </div>
    )
}

export default Form