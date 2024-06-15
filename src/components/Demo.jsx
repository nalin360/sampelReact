import React from 'react';
import customUseReducer from '../hook/customUseReducer';
import Buttons from './ui/Buttons';
function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }
    switch (action.type) {
        case 'incremented_age':
            return {
                age: state.age + 1
            };
        case 'decremented_age':
            return {
                age: state.age - 1
            };
        default:
            throw Error('Unknown action.');
    }
  
}
export default function Demo() {

    const { state, dispatch } = customUseReducer(reducer, { age: 42 })
    return (
        <>
            <Buttons onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </Buttons>
            <p>Hello! You are {state.age}.</p>
            <Buttons onClick={() => {
                dispatch({ type: 'decremented_age' })
            }}>
                decrement age
            </Buttons>
        </>
    )
}



// const ListItem = props => {
//   return (
//     <li
//       className="text-white p-2 mt-2 mb-2 border-none rounded-lg bg-blue-500"
//       key={props.item.id}
//     >
//       <h2 className="text-lg font-bold">{props.item.title}</h2>
//       <p>{props.item.body}</p>
//     </li>
//   );
// };

// export ListItem;
