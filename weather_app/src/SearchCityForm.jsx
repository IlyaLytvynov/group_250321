import { useState } from 'react';
const getUrl = (
  city
) => `https://api.openweathermap.org/data/2.5/weather?appid=103d2bea1f0fea90b85f7ca4c51dcc4f&units=metric
&q=${city}`;

const getErrorMessage = (res) => {
  switch (res.status) {
    case 404:
      return 'City not found';
    default: {
      return 'somethng goes wrong please reload app';
    }
  }
};

export const SearchCityForm = (props) => {
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    props.beforeSubmit();
    fetch(getUrl(city))
      .then((res) => {
        if (res.status >= 400) {
          const errorMessage = getErrorMessage(res);
          throw errorMessage;
        }

        return res.json();
      })
      .then((data) => {
        setErrorMessage('');
        props.onSuccessSubmit(data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e);
      });
  };

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={city} onChange={changeHandler} />
      <button>Search</button>
      {errorMessage}
    </form>
  );
};
