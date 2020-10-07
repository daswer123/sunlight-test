import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import {EditLink, StyledUserHeader} from "../../styled/userHeader";
import { useContext } from "react"
import { Context } from "../../reducer";

const UserHeader = () => {
    
    const {state,dispath} = useContext(Context)

    //Определяем текст и иконку кнопки в зависимости от стейта
    const editText = !state.editMode ? 
            <EditLink>
                <button type="button" onClick={() => dispath({type: "SWITH_EDIT_MODE"})} className="edit-link-button">
                     <span>Редактировать</span>
                    <EditIcon className="edit-link-icon"/>
                </button>
            </EditLink>
            :
            <EditLink>
                <button type="button" onClick={() => dispath({type: "SWITH_EDIT_MODE"})} className="edit-link-button close-link-button">
                    Закрыть
                </button>
            </EditLink>


    return (
        <StyledUserHeader>
            <Avatar style={{backgroundColor : "purple"}} className="notification avatar-user">
                <PersonIcon className="avatar-user-icon" fontSize={"large"}/>
            </Avatar>
            <h2 className="user-name">{state.name}</h2>
            {editText}
        </StyledUserHeader>
    )
}

export default UserHeader