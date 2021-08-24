import React from 'react'

const Result = ({ total, deadline, amount }) => (
        <div className="u-full-width resultado">
           <h2>Resumen</h2>
           <p>La cantidad solicitada es: ${amount}</p> 
           <p>A pagar en: {deadline} meses</p>
           <p>Su pago mensual es de: ${(total / deadline).toFixed(2)}</p>
           <p>Total a pagar: ${(total).toFixed(2)}</p>
        </div>
    );

export default Result;