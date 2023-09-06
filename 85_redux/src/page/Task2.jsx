// 2. Создайте компонент, который будет отображать числовое значение и кнопки "+1"
// и "-1". При нажатии на кнопку увеличивать и уменьшать значения счетчика.

import { increment, decrement } from '../slice/Counter2';
import { useDispatch, useSelector } from "react-redux";

export default function Task2() {
    const count = useSelector((state) => state.counter2);
    const dispath = useDispatch()

    function callReducerInc() {
        dispath(increment());
    }
    function callReducerDec() {
        dispath(decrement());
    }

    return (
        <div>
            <p>____________________________2_______________________________________</p>
            <p>{count}</p>
            <button onClick={callReducerInc}>+1</button>
            <button onClick={callReducerDec}>-1</button>
        </div>
    )
}