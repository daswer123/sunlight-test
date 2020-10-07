import React from "react";

const Context = React.createContext();

const initialState = {
    name : "Иванова Анна Михайловна",
    email : "ivanova@gmail.com",
    phone : "880005553535",
    editMode : false,
    confirmData : false,
    error : {
        name : false,
        email : false,
        phone : false
    },
    errorText : {
        name : "Вы неправильно ввели текст",
        email : "Вы неправильно ввели почту",
        phone : "Вы неправильно ввели номер телефона"
    },
}

const reducer = (state ,action) => {
    switch (action.type){
        case "SWITH_EDIT_MODE":
            return {
                ...state,
                editMode : !state.editMode
            }

        case "SWITH_CONFIRM_DATA":
            return {
                ...state,
                confirmData : !state.confirmData
            }

        case "INVALID_DATA":
            const name = action.name
            const isInvalid = action.isInvalid;
            
            const newError = {};
            newError[name] = isInvalid

            const newErrorObj = {
                ...state.error,
                ...newError
            }


            return {
                ...state,
                error : newErrorObj
            }

        case "PRELOAD_DATA":
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone
            }

        case "TEMP_DATA":
            return {
                ...state,
                temp : {...action.payload}
            }

        case "CHANGE_DATA":
            return {
                ...state,
                ...state.temp
            }
    }
}

export {
    Context,
    initialState,
    reducer
}