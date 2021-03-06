import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TextField from '@material-ui/core/TextField';
import UserEditContainer from "../../styled/userEdit";

import {Context} from "../../reducer"
import { useContext, useState, useEffect } from "react";
import {withSnackbar,useSnackbar } from 'notistack';


const UserEdit = () => {


    //Snack бар для удобного уведомления пользователя.
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function createAction(name,isInvalid){
        dispath({
            type : "INVALID_DATA",
            name,
            isInvalid
        })
    }

    const {state,dispath} = useContext(Context)
    const [name,setName] = useState(state.name);
    const [email,setEmail] = useState(state.email);
    const [phone,setPhone] = useState(state.phone);


    // Определения невалидного имени через регулярные выражения
    const onNameInput = (e) => {
        let text = e.target.value
        const regExp = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig

        // Если пользователь стер данные с формы , то она не валидируется
        if (text === ""){
            createAction("name",false)
            return
        }

        if (text.match(regExp)){
            createAction("name",false)
        } else {
            createAction("name",true)
        }
        setName(text)

    }

    // Определения невалидной почты через регулярные выражения
    const onEmailInput = (e) => {
        let text = e.target.value
        const regExp = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm

        // Если пользователь стер данные с формы , то она не валидируется
        if (text === ""){
            createAction("email",false)
            return
        }

        if (text.match(regExp)){
            createAction("email",false)
        } else {
            createAction("email",true)
        }
        setEmail(text)
    }

    // Определения невалидного номера телефона через регулярные выражения
    const onPhoneInput = (e) => {
        let text = e.target.value
        const regExp = /^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}/ig

        // Если пользователь стер данные с формы , то она не валидируется
        if (text === ""){
            createAction("phone",false)
            return
        }

        if (text.match(regExp)){
            createAction("phone",false)
        } else {
            createAction("phone",true)
        }
        setPhone(text)
    }


    // Когда мы нажимаем изменить данные вызавается этот метод
    const onSubmitData = (e) => {
        e.preventDefault();
        
        //Если есть невалидная форма, то пользователь не пройдет дальше
        for (let key in state.error){
            if (state.error[key] === true) {
                enqueueSnackbar("Пожалуйста введите данные правильно",{variant: "info"})
                return
            }
        }

        // Если пользователь не ввел вообще никаких данных, то мы ему об этом скажем и выведем ошибку
        if (phone === state.phone && email === state.email && name === state.name){ 
            enqueueSnackbar("Мы не можем изменить ваш профиль на ничего, пожалуйста измените хоть что-то",{variant: "error"})
            return
        }

        //Создаем временное хранилище и если пользователь отменит свои изменения, то с перезагрузкой эти данные исчезнут
        dispath({
            type: "TEMP_DATA",
            payload : {name,email,phone}
        })

        //Скролим окно пользователя на самый верх и блокируем ему overflow стандартный приём
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        dispath({
            type : "SWITH_CONFIRM_DATA"
        })
    }

    return (
        <>
        <UserEditContainer>
            <form action="#" method="POST" onSubmit={(e) => onSubmitData(e)}>
                <div className="edit-data">
                    <label htmlFor="name" className="edit-input">
                        <AssignmentIndIcon className="user-icon"/>
                        <TextField 
                             id="name" 
                             error = {state.error.name === true}
                             helperText={state.error.name ? state.errorText.name : ""} 
                             variant="outlined" 
                             label="Фамилия и имя" 
                             name = "name" 
                             InputLabelProps={{shrink: true}} 
                             placeholder="Укажите ваши фамилию и имя" 
                             onChange={(e) => onNameInput(e)}/>
                    </label>
                    <label htmlFor="email" className="edit-input">
                        <AlternateEmailIcon className="user-icon"/>
                        <TextField  
                            error = {state.error.email === true}
                            helperText={state.error.email ? state.errorText.email : ""} 
                            type="email"
                            name = "email" 
                            id="email" 
                            variant="outlined" 
                            label="E-mail" 
                            InputLabelProps={{shrink: true}} 
                            placeholder={state.email} 
                            onChange={(e) => onEmailInput(e)}/>
                    </label>
                    <label htmlFor="phone" className="edit-input">
                        <PhoneIcon className="user-icon"/>
                        <TextField  
                            error = {state.error.phone === true}
                            helperText={state.error.phone ? state.errorText.phone : ""} 
                            id="phone" 
                            name = "phone" 
                            variant="outlined" 
                            label="Номер телефона" 
                            InputLabelProps={{shrink: true}} 
                            placeholder="Укажите ваш номер телефона" 
                            onChange={(e) => onPhoneInput(e)}/>
                    </label>
                </div>
                <button className="edit-btn" type="submit">Сохранить Изменения</button>
            </form>
        </UserEditContainer>
        </>
    )
}

export default withSnackbar(UserEdit)