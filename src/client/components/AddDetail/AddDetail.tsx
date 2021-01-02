import * as React from 'react';

import './AddDetail.scss';

function AddDetail() {
  const [name, setName] = React.useState<string>('');
  const [price, setPrice] = React.useState<number>(0);
  const [isValid, setIsValid] = React.useState<boolean>(false);

  function nameInputChange(event) {
    const { value } = event.target;
    setName(value);
    setCommonValid();
  }

  function priceInputChange(event) {
    const { value } = event.target;
    setPrice(value);
    setCommonValid();
  }

  function setCommonValid(): void {
    setIsValid(!!name && !!price);
  }

  function submitForm(event) {
    event.preventDefault();
    fetch('/api/details', {
      method: 'POST',
      body: JSON.stringify({
        name,
        price,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }

  return (
    <React.Fragment>
      <header className="page-header">Новая деталь</header>
      <form className="detail-form" autoComplete="off" onSubmit={submitForm}>
        <label className="detail-form__label">
          <span>Наименование:</span>
          <input
            className="detail-form__input"
            value={name}
            onChange={nameInputChange}
            type="text"
            name="name"
          />
        </label>
        <label className="detail-form__label">
          <span>Стоимость:</span>
          <input
            className="detail-form__input"
            value={price}
            onChange={priceInputChange}
            type="number"
            name="price"
          />
        </label>
        <button
          className="button detail-form__submit-button"
          disabled={!isValid}
          type="submit"
        >
          Добавить
        </button>
      </form>
    </React.Fragment>
  );
}

export default AddDetail;
