import React, { Fragment, useState } from 'react'
import { calculateTotal } from '../helpers'

const Form = (props) => {

    const {amount, saveAmount, deadline, saveDeadline, saveTotal, saveLoading} = props;

    //Define the state 
    const [error, saveError] = useState(false);

    //When user clicks on submit
    const calculateLending = e => {
        e.preventDefault();

    //Validate
        if(amount === 0 || deadline === '') {
            saveError(true);
            return;
    }
    //Delete the previous error
    saveError(false);

    //Habilitar el spinner
    saveLoading(true)

    setTimeout( () => {
        const total = calculateTotal(amount, deadline);

        //Una vez calculado, saveTotal
        saveTotal(total);

        //Deshabilitar el spinner
        saveLoading(false)
    }, 3000);

    } 

    return ( 
        <Fragment>
        <form onSubmit={ calculateLending }>
          <div className="row">
              <div>
                  <label>Cantidad de préstamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000"
                      onChange={ e => saveAmount( parseInt( e.target.value ) ) }
                  />
              </div>
              <div>
                  <label>Plazo para pagar</label>
                  <select 
                      className="u-full-width"React Developer Tools
                      onChange={ e => saveDeadline( parseInt( e.target.value ) ) }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
         </form>

        { (error) ? <p className="error">Todos los campos son obligatorios</p> : null }         
        
        </Fragment>
    );
};
 
export default Form;