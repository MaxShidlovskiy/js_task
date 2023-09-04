// 1. Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
// котором отображается значение (первоначальное значение 1). Ваша задача так
// реализовать функционал, чтобы при клике на кнопку автоматически
// прибавлялась +1 к значению параграфа

import { increment } from "../slice/Counter1"
import { useDispatch, useSelector } from "react-redux"

function Task1() {
    const count = useSelector((state) => state.counter);
    const dispath = useDispatch()

    function callReducer() {
        dispath(increment());
    }

    return (
        <div>
            <p>____________________________1_______________________________________</p>
            <p>{count}</p>
            <button onClick={callReducer}>+1</button>
        </div>
    )
}

export default Task1