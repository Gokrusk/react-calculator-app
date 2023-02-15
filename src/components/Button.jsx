import React from 'react';

function Button(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };
  return (
    <div className={`btn-cont ${isOperator(props.children) ? 'op' : null}`.trimEnd()}>
      {props.children}
    </div>
  );
}

export default Button;
