// 3. Создайте компонент текстового поля, который позволяет пользователю вводить
// текст и отображает его в реальном времени.

import { useSelector, useDispatch } from "react-redux";
import { fillInput } from "../slice/InputValue";

export default function Task3() {
    const data = useSelector((state) => state.inputValue);
    const dispatch = useDispatch();

    function showData(event) {
        dispatch(fillInput(event.target.value))
    }
    return (
        <div>
            <p>____________________________3_______________________________________</p>
            <h1>{data}</h1>
            <input type="text" onChange={showData} />
        </div>
    )
}
