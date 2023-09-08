// ; 4. Создайте компонент формы. По клику на кнопку собрать данные из input и
// ; проверить вводимую строку на палиндром

import { useSelector, useDispatch } from "react-redux";
import { fillInput, isPolindrom } from "../slice/Polindrom";

export default function Task4() {
    const data = useSelector((state) => state.polindrom)
    const dispatch = useDispatch()

    function callFellInput(event) {
        dispatch(fillInput(event.target.value))
    }

    function callIsPolindrom() {
        dispatch(isPolindrom())
    }

    return (
        <div>
            <p>____________________________4_______________________________________</p>
            <input type="text" onChange={callFellInput} />
            <button onClick={callIsPolindrom}></button>
            <h1>{String(data.result)}</h1>
        </div>
    )
}