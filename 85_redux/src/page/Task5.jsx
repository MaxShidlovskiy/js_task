// 5. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
// При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
// скрывается.

import { useSelector, useDispatch } from "react-redux"
import { showText, hideText } from "../slice/displayText"

export default function Task5() {
    const data = useSelector((state) => state.displayText);
    const dispatch = useDispatch();
    function callDisplayShow() {
        dispatch(showText())
    }
    function callDisplayHide() {
        dispatch(hideText())
    }

    return (
        <div>
            <p>____________________________5_______________________________________</p>
            <p>{data.result}</p>
            <button onClick={callDisplayShow}>showText</button>
            <button onClick={callDisplayHide}>hideText</button>
        </div>
    )
}