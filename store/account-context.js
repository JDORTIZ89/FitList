import { createContext, useReducer, useState } from "react";

export const AccountContext = createContext({
  accounts: [],
  addAccount: ({ description, amount, date }) => {},
  deleteAccount: (id) => {},
  updateAccount: (id, { description, amount, date }) => {},
});

function accountsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (account) => account.id === action.payload.id
      );
      const updatableExpense = state[updatableAccountIndex];
      const updatedItem = { ...updatableAccount, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableAccountIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((account) => account.id !== action.payload);
    default:
      return state;
  }
}

function AccountsContextProvider({ children }) {
  const [accountState, dispatch] = useReducer(accountsReducer, []);

  function addAccount(accountData) {
    dispatch({ type: "ADD", payload: accountData });
  }

  function deleteAccount(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateAccount(id, accountData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: accountData } });
  }

  const value = {
    account: accountState,
    addAccount: addAccount,
    deleteAccount: deleteAccount,
    updateAccount: updateAccount,
  };

  return (
    <AccountsContext.Provider value={value}>
      {children}
    </AccountsContext.Provider>
  );
}

export default AccountsContextProvider;
