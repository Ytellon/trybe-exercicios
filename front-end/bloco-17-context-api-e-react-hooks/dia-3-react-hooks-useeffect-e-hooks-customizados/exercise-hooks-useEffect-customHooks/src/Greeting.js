import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Greeting({ initialName }) {
  // 🐨 inicialize o estado com o valor que vem do localStorage
  const localStorageSave = localStorage.getItem('name') || initialName;
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = useState(localStorageSave);

  // 🐨 Utilize o hook useEffect para atualizar a
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);
  // propriedade `name` no localStorage quando o estado for alterado
  // 💰 window.localStorage.setItem('name', name)

  function handleChange({ target: { value } }) {
    setName(value);
  }

  return (
    <div>
      {/* Utilizamos o evento onSubmit e event.preventDefault() para evitar que
      a página recarregue ao pressionar a tecla Enter */}
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="name">
          Name:
          <input onChange={ handleChange } id="name" />
        </label>
      </form>
      { name ? <strong>{ `Hello ${name}` }</strong> : 'Please type your name' }
    </div>
  );
}

export default Greeting;

Greeting.propTypes = {
  initialName: PropTypes.string,
};

Greeting.defaultProps = {
  initialName: '',
};
