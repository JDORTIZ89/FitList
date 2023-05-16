import { createContext, useReducer, useState } from "react";


export const PlaylistsContext = createContext({
    playlists: [],
    addExpense: ({ description, amount, date }) => {},
    setExpenses: (expenses) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
});

function playlistsReducer(state, action){
    switch (action.type) {
        case "ADD":
          // const id = new Date().toString() + Math.random().toString();
          return [{ ...action.payload}, ...state];
        case "SET":
          const inverted = action.payload.reverse();
          return inverted;
        case "UPDATE":
          const updatableExpenseIndex = state.findIndex(
            (expense) => expense.id === action.payload.id
          );
          const updatableExpense = state[updatableExpenseIndex];
          const updatedItem = { ...updatableExpense, ...action.payload.data };
          const updatedExpenses = [...state];
          updatedExpenses[updatableExpenseIndex] = updatedItem;
          return updatedExpenses;
        case "DELETE":
          return state.filter((expense) => expense.id !== action.payload);
        default:
          return state;
      }

}

function PlaylistsContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);
  
    function setExpenses(expenses) {
      dispatch({ type: "SET", payload: expenses });
    }
  
    function addExpense(expenseData) {
      dispatch({ type: "ADD", payload: expenseData });
    }
  
    function deleteExpense(id) {
      dispatch({ type: "DELETE", payload: id });
    }
  
    function updateExpense(id, expenseData) {
      dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
    }
  
    const value = {
      expenses: expensesState,
      setExpenses: setExpenses,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      updateExpense: updateExpense,
    };
  
    return (
      <PlaylistsContext.Provider value={value}>
        {children}
      </PlaylistsContext.Provider>
    );
  }
  
  export default PlaylistsContextProvider;