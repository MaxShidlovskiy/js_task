// 6. Создайте компонент, который отображает проверку почты (true, false) на
// валидность регулярному выражению. Валидатор состоит из Input для ввода почты
// и кнопки для запуска валидатора.

import { useSelector, useDispatch } from "react-redux";
import { fillInput, isValid } from "../slice/Validation";


export default function Task6() {
    const data = useSelector((state) => state.validation)
    const dispatch = useDispatch();

    function callFillInput(event) {
        dispatch(fillInput(event.target.value))
    }

    function callIsValidation() {
        dispatch(isValid())
    }
    return (
        <div>
            <p>____________________________6_______________________________________</p>

            <h1>{String(data.result)}</h1>
            <input type="text" onChange={callFillInput} />
            <button onClick={callIsValidation}>click</button>
        </div>
    )
}