import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';

function App() {
  //Define the state
  const [amount, saveAmount] = useState(0);
  const [deadline, saveDeadline] = useState('');
  const [total, saveTotal] = useState(0);
  const [loading, saveLoading] = useState(false);

  let component;
  if (loading) {
    component = <Spinner />
  } else if(total === 0) {
    component = <Message />
  } else {
    component = <Result 
                  total={total}
                  deadline={deadline}
                  amount={amount}
                  />
  }

  return (
   <Fragment>
     <Header 
      title="Cotizador de préstamos"
     />
     <div className="container">
       <Form 
       amount={amount}
       saveAmount={saveAmount}
       deadline={deadline}
       saveDeadline={saveDeadline}
       saveTotal={saveTotal}
       saveLoading={saveLoading}
       />
      <div className="mensajes">
        {component}
      </div>
     </div>
   </Fragment>
  );
}

export default App;
