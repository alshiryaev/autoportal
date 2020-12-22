import * as React from 'react';

import './AddDetail.scss';

function AddDetail() {
    const [name, setName] = React.useState<string>(''); 
    const [price, setPrice] = React.useState<number>(0); 
    const [isValid, setIsValid] = React.useState<boolean>(false);

    function  nameInputChange(event) {
        const {value} = event.target;
        setName(value);
        setCommonValid();
    }

    function  priceInputChange(event) {
        const {value} = event.target;
        console.log(value)
        setPrice(value);
        setCommonValid();
    }

    function setCommonValid(): void {
        setIsValid(!!name && !!price);
    }

    function submitForm() {
        event.preventDefault();
         const obj = {
            name,
            price
        }

        fetch('http://127.0.0.1/api/details', {
            method: "post",
            body: JSON.stringify(obj)
        })
    }


    return(
        <div className="add-form">
            <h1>Добавить деталь</h1>
            <form autoComplete="off" onSubmit={submitForm} method="post">
                <h3>Название детали: </h3>
                <input value={name} onChange={nameInputChange} type="text" name="name"/>
                <div></div>
                <h3>Цена детали: </h3>
                <input value={price} onChange={priceInputChange} type="number" name="price"/>
                <div></div>
                <button disabled={!isValid} type="submit">Добавить</button>
            </form>
        </div>
    )
}

export default AddDetail;