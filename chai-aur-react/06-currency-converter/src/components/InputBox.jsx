import React, {useId} from 'react'
function InputBox({
    title,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}){
    const amountInputId = useId()
    return( 
            
                  <div className = {`bg-white p-3 rounded-lg mb-2 flex ${className}`}>
                {/* From/To Value     */}
                <div className='w-1/2'>
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {title}
                </label>
                   
                    <input 
                    key={amountInputId}
                    className='w-full text-lg text-black-100'
                    
                    type="Number" 
                    value={amount}

                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                    />
                  
                </div>

                {/* Currency Type */}
                <div className='w-1/2 justify-end text-right'>
                <h1 className='text-lg  text-gray-400 mb-2'>Currency Type</h1>
                    <select 
                        className='text-lg text-black-100 select bg-gray-200 rounded-lg p-2'
                        value={selectCurrency}
                        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                        
                        >
                       
                         {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                    </select>
                </div>
                </div>
             
        
           
          
       
    )
}

export default InputBox;