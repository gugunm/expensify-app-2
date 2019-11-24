import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
// komunikasi dengan redux store
export const addExpense = (expense) => ({ //buat return object soalnya pak! 
  type : 'ADD_EXPENSE',
  expense
});

// Start Add expense
// komunikasi dengan firebase
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt};
    // ini bisa jalan jika menggunakan tools redux-thunk, karena men-dispatch function
    database.ref('expenses').push(expense).then((ref) => { 
      dispatch(addExpense({
        id : ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// START SET EXPENSES
export const startSetExpenses = () => {
  return (dispatch) => {
    // harus direturn lagi data yang ada di dalem ini
    return database.ref('expenses').once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id : childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};