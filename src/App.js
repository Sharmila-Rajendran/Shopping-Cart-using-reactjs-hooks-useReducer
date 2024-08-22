import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const InitialState={
  Balloons:0,
  Notebook:0,
  Chocolate:0,
  Icecream:0,
  IceCake:0,
};

function ShoppingCart(state,action){
  switch(action.category){
    case 'ADD_ITEM':
      return {...state,[action.product]:state[action.product]+1};
    case 'REMOVE_ITEM':
      return {...state,[action.product]:state[action.product]-1};
    default:
      throw('No actions performed');
  }
}

const App = () => {
  const [state,dispatch]=useReducer(ShoppingCart,InitialState);
  const Quantity=state.Balloons+state.Chocolate+state.IceCake+state.Icecream+state.Notebook;
  return (
    <div className='List'>
      <h1>Shopping Cart</h1>
      <ul>
        <li className='prod1'>
          Balloons
          <button type='submit' className='butt' onClick={()=>dispatch({category:'ADD_ITEM',product:'Balloons'})}>+</button>
          <p>{state.Balloons}</p>
          <button type='submit' className='butt' onClick={()=>dispatch({category:'REMOVE_ITEM',product:'Balloons'})}>-</button>
        </li>
        <li className='prod2'>
          Notebook
          <button type='submit' className='butt' onClick={()=>dispatch({category:'ADD_ITEM',product:'Notebook'})}>+</button>
          <p>{state.Notebook}</p>
          <button type='submit' className='butt' onClick={()=>dispatch({category:'REMOVE_ITEM',product:'Notebook'})}>-</button>
        </li>
        <li className='prod3'>
          Chocolate
          <button type='submit' className='butt' onClick={()=>dispatch({category:'ADD_ITEM',product:'Chocolate'})}>+</button>
          <p>{state.Chocolate}</p>
          <button type='submit' className='butt' onClick={()=>dispatch({category:'REMOVE_ITEM',product:'Chocolate'})}>-</button>
        </li>
        <li className='prod4'>
          Icecream
          <button type='submit' className='butt' onClick={()=>dispatch({category:'ADD_ITEM',product:'Icecream'})}>+</button>
          <p>{state.Icecream}</p>
          <button type='submit' className='butt' onClick={()=>dispatch({category:'REMOVE_ITEM',product:'Icecream'})}>-</button>
        </li>
        <li className='prod5'>
          IceCake
          <button type='submit' className='butt' onClick={()=>dispatch({category:'ADD_ITEM',product:'IceCake'})}>+</button>
          <p>{state.IceCake}</p>
          <button type='submit' className='butt' onClick={()=>dispatch({category:'REMOVE_ITEM',product:'IceCake'})}>-</button>
        </li>
        <div className='quantity'>
          <p>Total Quantity: {Quantity}</p>
        </div>
      </ul>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));

export default App;
