import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from '@material-ui/core/Divider';
import UserInfoContainer from "../../styled/userInfo"
import { Context } from "../../reducer";
import { useContext } from "react"

const UserInfo = () => {

    const {state,dispath} = useContext(Context)
    
    return (
        <UserInfoContainer>
         <List className="user-info-list" component="nav" aria-label="user-data">
             <ListItem className="user-info-item">
               <AlternateEmailIcon className="user-icons email-icon"/>
               <p>{state.email}</p>
             </ListItem>
             <Divider />
             <ListItem className="user-info-item" >
                 <PhoneIcon className="user-icons phone-icon"/>
                 <p>{state.phone ? state.phone :  "Укажите номер телефона"}</p>
             </ListItem>
         </List>
        </UserInfoContainer>
    )
}


export default UserInfo