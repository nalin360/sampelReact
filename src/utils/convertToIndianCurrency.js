export const convertToIndianCurrency = (value) => { 
    return parseInt(value).toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });
 }