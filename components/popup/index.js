import {Context} from "../../reducer"
import {useContext, useState} from "react"
import {withSnackbar,useSnackbar } from 'notistack';
import PopupContainer from "../../styled/popup"

const Popup = () => {

    //Snack бар для удобного уведомления пользователя.
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const {state,dispath} = useContext(Context)
    const [loading,setLoading] = useState(false) 

    //Функция для скрытия модального окна
    const onDisagree = () => {
        document.body.style.overflow = "auto";
            dispath({
                type: "SWITH_CONFIRM_DATA"
            })
    }

    //Тоже функция для скрытия модального окна, но на этот раз для скрытие по нажитию на подложку
    const onClickPopup = (e) =>{
        document.body.style.overflow = "auto";
        if (e.target.parentNode.getAttribute("id") === "__next"){
            dispath({
                type: "SWITH_CONFIRM_DATA"
            })
        }
    }

    //Если пользователь нажал на подтвердить изменения
    const onConfirm = () => {
        setLoading(true);

        const data = {
            name :  state.temp.name,
            email : state.temp.email,
            phone : state.temp.phone,
        }

        //Определяем в локальное хранилище данные из временного стейта , а так же на основе этого готовим данные к отправке
        localStorage.setItem("name",state.temp.name)
        localStorage.setItem("email",state.temp.email)
        localStorage.setItem("phone",state.temp.phone)

        //Делаю запрос на сервер и обрабатываю успех и ошибку
        fetch("http://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "x-token-access" : "random",
            },
            body : JSON.stringify(data)
        })
        .then(() => {
            setLoading(false)
            enqueueSnackbar("Данные успешно сохранены",{variant: "success"})
        })
        .catch(() => {
            enqueueSnackbar("Произошла ошибка, попробуйте снова",{variant: "error"})
        })
        .finally(() => {
            //Убираю модальное окно, убираю режим редактирования и меняю данные с временных на постоянные
            dispath({
                type: "SWITH_CONFIRM_DATA" 
            })

            dispath({
                type: "SWITH_EDIT_MODE" 
            })

            dispath({
                type: "CHANGE_DATA"
            })

            document.body.style.overflow = "auto";
        })

    }

    const loadingText = loading ? "Сохраняю..." : "Сохранить";
    const loadingClass = " loading";

    return (
        <PopupContainer onClick={(e) => onClickPopup(e)}>
            <div className="popup">
              <button type="button" className="close-modal" onClick={() => {onDisagree()}}></button>
              <h2>Сохранить изменения?</h2>
              <button type="button" className={`confirm-btn confirm-do ${loadingClass}`} onClick={() => onConfirm()}>{loadingText}</button>
              <button type="button" className="confirm-btn confirm-undo" onClick={() => {onDisagree()}}>Не сохранять</button>
            </div>
        </PopupContainer>
        )
}

export default withSnackbar(Popup)
