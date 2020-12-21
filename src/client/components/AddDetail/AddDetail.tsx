import * as React from 'react';
import './AddDetail.scss';

function AddDetail() {
    return(
        <div className="add-form">
            <h1>Добавить деталь</h1>
            <form method="post">
                <h3>Название детали: </h3>
                <input type="text" name="name"/>
                <div></div>
                <h3>Цена детали: </h3>
                <input type="number" name="price"/>
                <div></div>
                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}

export default AddDetail;