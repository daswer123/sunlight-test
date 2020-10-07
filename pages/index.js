import HeaderAbout from "../components/headerAbout"
import HeaderProfile from "../components/headerProfile"
import Grid from "@material-ui/core/Grid"
import UserHeader from "../components/userHeader";
import UserInfo from "../components/userInfo"
import UserEdit from "../components/userEdit";
import Popup from "../components/popup"
import { SnackbarProvider } from 'notistack';

import {StyledContainer, GridBG} from "../styled"

import {Context,reducer, initialState} from "../reducer";
import { useEffect, useReducer } from "react";

export default function App(){

  // С помощью хуков создаём редьюсер 
  const [state,dispath] = useReducer(reducer,initialState);

  //Если пользователь в первый раз зашел , то мы создаём фейковые данные
  function writeFakeData(){
    const name = "Иванова Анна Михайловна";
    const email = "ivanova@gmail.com"
    const phone = "880005553535";

    
  //Если данных нет, то мы записываем фековые, если же есть, то диспатчим существующие в стейт
    if (!localStorage.getItem("name") && !localStorage.getItem("email") && !localStorage.getItem("phone")){
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("phone",phone);
    } else {
      dispath({
        type : "PRELOAD_DATA",
        payload : {
          name : localStorage.getItem("name",name),
          email : localStorage.getItem("email",email),
          phone : localStorage.getItem("phone",phone),
        }
      })
    }
  }

  useEffect(() => {
    writeFakeData();
  },[])

  const userView = state.editMode ?  <UserEdit/> :  <UserInfo/> 
  const popup = state.confirmData ? <Popup/> : ""

  return (
    <Context.Provider value= {{dispath,state}}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
      <StyledContainer>
        <GridBG container>
          <Grid item xs={8}>
            <HeaderAbout/>
          </Grid>
          <Grid item xs={4}>
            <HeaderProfile/>
          </Grid>
          <Grid item xs={12}>
            <UserHeader/>
            {userView}
          </Grid>
        </GridBG>    
      </StyledContainer>
      {popup}
      </SnackbarProvider >
    </Context.Provider>
  )
}




