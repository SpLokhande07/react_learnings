
import { useState } from "react";
import "./App.css";
import {InputBox} from "./components";
import image from "./constants/image";

import useCurrencyInfo from "./hooks/useCurrencyHooks";
function App() {
  ///

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const currencyOptions = Object.keys(currencyInfo);

  const convertSwap = () =>{
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => setConvertedAmount((amount * currencyInfo[toCurrency]));

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-lg border mx-auto border-gray-500 rounded-md shadow-lg backdrop-blur-xl p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
             
          }}
          >
          <div className="w-full max-w-lg mx-auto">
            <InputBox 
            title="From" 
            amount={amount}
            onAmountChange={(amount)=>setAmount(amount)}
            onCurrencyChange={(currency) => setFromCurrency(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={fromCurrency}
            />
          </div>

          <div className="relative w-full h-0.5">
            <button 
            onClick= {() => convertSwap()}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
              Swap
            </button>
          </div>
          <div className="w-full max-w-lg mx-auto">
            <InputBox 
            title="To" 
            amount={convertedAmount}
            amountDisable = {true}
            onCurrencyChange={(currency) => setToCurrency(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={toCurrency}
            />
          </div>
          </form>
          <button 
          onClick={convert}
          className=" rounded-md bg-blue-600 text-white w-full mt-2 px-2 py-1.5">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
