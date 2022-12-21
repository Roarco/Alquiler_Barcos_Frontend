import React from 'react';

function Form(props) {
  const inputs = props.inputs;
  const labelClasess = props.classes.label;
  const inputClasess = props.classes.input;
  const titleForm = props.titleForm;

  return (
    <h1>{titleForm}</h1>
    // <form>
    //   <fieldset>
        
    //     {/* <h2>{titleForm}</h2>
    //       {inputs.map(input => (
    //           <label For={input.id} className={labelClasess}>{input.label}</label>
    //           <input id={input.id} className={inputClasess} type={input.type}/>
    //       ))}
    //     <input type="submit">Save</input> */}
    //   </fieldset>
    // </form>
  );
}

export default Form;