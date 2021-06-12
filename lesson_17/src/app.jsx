import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  return (
    <div>
      <h1 onClick={() => console.log('TEST')}>HELLO</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque fuga,
        dolorem reiciendis nulla ipsa ad est cupiditate ipsam nemo. Sequi
        obcaecati ullam voluptas laudantium iusto at sint nisi et tenetur?
      </p>
    </div>
  );
};
const root = document.querySelector('#root');
console.log(root);
ReactDOM.render(<App />, root);
