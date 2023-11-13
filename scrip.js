async function convertCurrency() {
    const amount = document.getElementById('inputAmount').value;
    const currency = document.getElementById('inputCurrency').value;
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    const data = await response.json();
    const conversionRate = data.rates[currency];
    const output = document.getElementById('output');
    output.textContent = `${amount} USD = ${(amount * conversionRate).toFixed(2)} ${currency}`;
}