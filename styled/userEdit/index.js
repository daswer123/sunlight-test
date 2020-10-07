import styled from "styled-components";


const UserEditContainer = styled.section`

box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
color: black;

margin-top: -130px;
background-color: white;
form {
    display : flex;
    flex-direction: column;
}

.edit-data {
    display: flex;
    justify-content: space-around;
}

.edit-input{
    font-size: 14px;
    display : flex;
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
}

.edit-input input {
    width: 200px;
}

.edit-input input::placeholder{
    font-size: 12px;
}

.edit-input::after{
    content: "";
    position: absolute;
    display: block;
    width: 1px;
    height: 70px;
    background-color: #CAE7FE;
    left : -10%;
    top: -10px;
}

.edit-input:first-child::after{
    background-color:inherit;
}

.user-icon{
    margin-top: 13px;
    font-size: 35px;
    width: 30px;
    height : 30px;
    margin-right: 25px;
}

.edit-btn{
    margin: 0 auto;
    padding: 18px 28px;
    width: 212px;
    color: white;
    cursor: pointer;
    margin-bottom: 40px;

    font-weight: bold;

    border: 0;
    background: #01BDA7;
    border-radius: 36px;
}

@media (max-width: 1100px) {
    .edit-input::after{
        width: 0px;
        height: 0px;
    }
}


@media (max-width: 950px) {
    .edit-data {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .edit-input{
        margin-left: auto;
        margin-right: auto;
    }

    .edit-input input {
        width: 250px;
    }

    .edit-input::after{
        width: 0;
        height: 0;
    }
}

@media (max-width: 450px){
    .edit-data svg {
        display : none;
    }
}

@media (max-width: 350px) {

    .edit-input{
        width: 230px;
    }
    
}

`;

export default UserEditContainer