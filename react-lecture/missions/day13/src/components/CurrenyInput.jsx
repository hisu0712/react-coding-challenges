

const CurrenyInput = ( { currency, value, onChange } ) => {

    return (
        // <div>
        //     <div>
        //         <label>krw: </label>
        //         <input 
        //             value={price1}
        //             onChange={onChangeUSD}
        //             type="number"
        //         />
        //     </div>
        //     <div>
        //         <label>usd: </label>
        //         <input 
        //             value={price2}
        //             onChange={onChangeKRW}
        //             type="number"
        //         />
        //     </div>
        // </div>
        // <div>
        //     <label>{curreny}: </label>
        //     <input 
        //         type="number" 
        //         value={value}
        //         onChange={onChange((e) => {curreny, e.target.value})}
        //     />
        // </div>

        <div>
            <label>{currency}: </label>
            <input
            type="number"
            value={value}
            onChange={(e) => onChange(currency, e.target.value)}
            />
        </div>
    );
}

export default CurrenyInput;