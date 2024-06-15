import React, { useEffect, useState } from 'react'
import Inputss from '../components/ui/Inputss'
import CustomSelect from '../components/ui/CustomSelect'
import countries from '../data/countries.json'
import RangeSlider from '../components/ui/RangeSlider'

function Form2() {


    const [form, setForm] = useState({
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
    })
    const [rangeAmount, setRangeAmount] = useState(form.amount);


    function calculateSip(form) {
        const { amount, timePeriod, expectedResturnRate } = form;
        console.log("expectedReturnRate:", expectedResturnRate);
        // console.log(typeof(+amount));
        const monthlyInvestment = +amount;
        const rateOfInterest = +expectedResturnRate / 100 / 12; //
        const periods = +timePeriod * 12

        const InvestedAmount = monthlyInvestment * periods;
        const maturityAmount = monthlyInvestment * (((1 + rateOfInterest) ** periods - 1) / rateOfInterest) * (1 + rateOfInterest)
        const estimatedReturns = maturityAmount - (monthlyInvestment * periods);
   
        return { maturityAmount, estimatedReturns , InvestedAmount};

    }
    const handleChange = (e, key) => {

        setForm({ ...form, [key]: e.target.value })
        // console.log(form);
    }
    useEffect(() => {
        const { maturityAmount, estimatedReturns,InvestedAmount } = calculateSip(form);
      
        setForm({ ...form, InvestedAmount: InvestedAmount, estimatedReturns: estimatedReturns.toFixed(2), Totalvalue: maturityAmount.toFixed(2) })
    }, [form.amount, form.timePeriod, form.expectedResturnRate]);

    const handleRangeChange = (e) => {
        e.preventDefault();
        setRangeAmount(e.target.value);
        setForm({ ...form, amount: e.target.value });

    };
    return (
        <div className='h-screen w-full flex flex-col gap-2 justify-center items-center'>
            <Inputss type="text" placeholder="name" value={form.names} onChange={(e) => handleChange(e, "names")} />
            <CustomSelect value={form.countries} placeholder={'Select Country'}
                options={countries} onChange={(e) => handleChange(e, "countries")} />
            {form.countries === 'India' &&
                (<>
                    <Inputss type="number" placeholder="Age" value={form.age}
                        onChange={(e) => handleChange(e, "age")} />

                </>)}
            {+form.age >= 18 ? (<>
                <Inputss type="text" placeholder="PAN Number" value={form.pan}
                    onChange={(e) => handleChange(e, "pan")} />
            </>) : null
            }

            <hr />


            <p>Sip calculaor</p>
            <p>input</p>
            <Inputss id="amountInput" type="number" placeholder="amount" value={form.amount}
                onChange={(e) => handleChange(e, "amount")} />
            <RangeSlider id="rangeAmount" min={0} max={1000000} value={rangeAmount}
                onChange={handleRangeChange} />
            <p>percentage</p>
            <RangeSlider min={1.0} max={30} step={0.1} value={form.expectedResturnRate}
                onChange={(e) => handleChange(e, "expectedResturnRate")} />
            <p>year</p>
            <RangeSlider min={1} max={40} value={form.timePeriod}
                onChange={(e) => handleChange(e, "timePeriod")} />

            {console.log(form.InvestedAmount)}
            <h1>Invested amount {form.InvestedAmount}</h1>
            <h1>Est. returns {form.estimatedReturns}</h1>
            <h1>Total value {form.Totalvalue}</h1>


        </div>
    )
}
export default Form2