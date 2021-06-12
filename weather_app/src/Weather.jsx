export const Weather = (props) => {
  return (
    <div>
      <h1>City: {props.city}</h1>
      <h2>Current: {props.temp}</h2>
      <h2>Max: {props.max}</h2>
      <h2>Main: {props.min}</h2>
      <h3>Feels like: {props.feelsLike}</h3>
    </div>
  );
};
