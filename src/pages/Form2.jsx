import React, { useEffect, useReducer, useState } from 'react'
import Inputss from '../components/ui/Inputss'
import CustomSelect from '../components/ui/CustomSelect'
import countries from '../data/countries.json'
import RangeSlider from '../components/ui/RangeSlider'
import { convertToIndianCurrency } from '../utils/convertToIndianCurrency'


const reducerform2 = (state = {}, { type, payload }) => {
    switch (type) {
        case 'names':
            return { ...state, names: payload };
        case 'show':
            return { ...state, show: payload };
        case 'age':
            return { ...state, age: payload };
        case 'pan':
            return { ...state, pan: payload };
        case 'amount':
            return { ...state, amount: payload };
        case 'inputAmount':
            return { ...state, inputAmount: payload };
        case 'countries':
            return { ...state, countries: payload };
        case 'expectedResturnRate':
            return { ...state, expectedResturnRate: payload };
        case 'timePeriod':
            return { ...state, timePeriod: payload };
        case 'estimatedReturns':
            return { ...state, estimatedReturns: payload };
        case 'InvestedAmount':
            return { ...state, InvestedAmount: payload };
        case 'Totalvalue':
            return { ...state, Totalvalue: payload };
        default:
            return state;
    }
}

function Form2() {

    const initialState = {
        names: "",
        show: "",
        countries: "",
        age: "",
        pan: "",
        amount: 0,
        inputAmount: 0,
        expectedResturnRate: 1.0,
        timePeriod: 1,
        estimatedReturns: 0,
        InvestedAmount: 0,
        Totalvalue: 0
    }
    const [state, dispatch] = useReducer(reducerform2, initialState)
    function calculateSip(form) {
        const { amount, timePeriod, expectedResturnRate } = form;
        const monthlyInvestment = +amount;
        const rateOfInterest = +expectedResturnRate / 100 / 12; //
        const periods = +timePeriod * 12

        const InvestedAmount = monthlyInvestment * periods;
        const maturityAmount = monthlyInvestment * (((1 + rateOfInterest) ** periods - 1) / rateOfInterest) * (1 + rateOfInterest)
        const estimatedReturns = maturityAmount - (monthlyInvestment * periods);

        return { maturityAmount, estimatedReturns, InvestedAmount };

    }
    const handleChange = (e, type) => {

        dispatch({
            type: type,
            payload: e.target.value
        })
    }

    useEffect(() => {
        const { maturityAmount, estimatedReturns, InvestedAmount } = calculateSip(state);
        dispatch({
            type:"InvestedAmount",
            payload:InvestedAmount.toFixed(2)
        })
        dispatch({
            type:"estimatedReturns",
            payload:estimatedReturns.toFixed(2)
        })
        dispatch({
            type:"Totalvalue",
            payload:maturityAmount.toFixed(2)
        })
        
    }, [state.amount, state.timePeriod, state.expectedResturnRate]);

    return (
        <div className='h-screen w-full flex flex-col gap-2 justify-center items-center'>
            <Inputss type="text" placeholder="name" value={state.names} onChange={(e) => handleChange(e, "names")} />
            <CustomSelect value={state.countries} placeholder={'Select Country'}
                options={countries} onChange={(e) => handleChange(e, "countries")} />
            {state.countries === 'India' &&
                (<>
                    <Inputss type="number" placeholder="Age" value={state.age}
                        onChange={(e) => handleChange(e, "age")} />

                </>)}
            {+state.age >= 18 ? (<>
                <Inputss type="text" placeholder="PAN Number" value={state.pan}
                    onChange={(e) => handleChange(e, "pan")} />
            </>) : null
            }

            <hr />


            <p>Sip calculaor</p>
            <p>input</p>
            <Inputss id="amountInput" type="number" placeholder="amount" value={state.amount}
                onChange={(e) => handleChange(e, "amount")} />
            <RangeSlider id="rangeAmount" min={"500"} max={"1000000"} value={state.amount}
            step={"500"}
                onChange={(e) => handleChange(e,'amount')} />
            <p>percentage</p>
            <RangeSlider min={1.0} max={30} step={0.1} value={state.expectedResturnRate}
                onChange={(e) => handleChange(e, "expectedResturnRate")} />
            <p>year</p>
            <RangeSlider min={1} max={40} value={state.timePeriod}
                onChange={(e) => handleChange(e, "timePeriod")} />

            {/* {console.log(form.InvestedAmount)} */}
            <h1>Invested amount {convertToIndianCurrency(state.InvestedAmount)}</h1>
            <h1>Est. returns {convertToIndianCurrency(state.estimatedReturns)}</h1>
            <h1>Total value {convertToIndianCurrency(state.Totalvalue)}</h1>


        </div>
    )
}
export default Form2