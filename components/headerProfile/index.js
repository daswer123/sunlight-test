import Avatar from '@material-ui/core/Avatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonIcon from '@material-ui/icons/Person';
import HeaderAboutBlock from "../../styled/headerProfile"
import {useContext} from "react";
import { Context } from "../../reducer"

//Получаем имя и обрезаем его до Имени и первой буквы фамилии
const getShortName = (name) => {
    name = name.split(" ");
    name = name[0]+"."+name[1][0]+".";
    return name
}


const HeaderAbout = () => {

    const {state,dispath} = useContext(Context)
    return (
        <HeaderAboutBlock>
            <NotificationsNoneIcon fontSize={"large"} className="notification"/>
            <i className="separator"/>
            <Avatar style={{backgroundColor : "purple"}} className="notification avatar">
                <PersonIcon fontSize={"large"}/>
            </Avatar>
            <p className="profile-name">{getShortName(state.name)}</p>
        </HeaderAboutBlock>
    )
}


export default HeaderAbout