// store.js
import { createStore } from "redux";

const initialState = {
  

  email: "",
  name:"",
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "POSTNAME":
      return {
        ...state,
        name: action.payload,
      };
   
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;