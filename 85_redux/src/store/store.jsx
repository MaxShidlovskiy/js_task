import { configureStore } from '@reduxjs/toolkit';
import counter1 from '../slice/Counter1';
import counter2 from '../slice/Counter2';
import inputValue from '../slice/InputValue';
import polindrom from '../slice/Polindrom';
import displayText from '../slice/displayText';
import validation from '../slice/Validation';


const store = configureStore({
    reducer: {
        counter1: counter1,
        counter2: counter2,
        inputValue: inputValue,
        polindrom: polindrom,
        displayText: displayText,
        validation: validation
    }
});

export { store }















































export default store

