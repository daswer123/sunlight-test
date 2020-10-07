import styled from "styled-components";

const StyledUserHeader = styled.div`
    display: flex;
    background: linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%);

    margin-top: 32px;
    margin-bottom: 160px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom : 10px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    .avatar-user{
        margin-top: 10px;
        width: 70px;
        height: 70px;
    }

    .avatar-user-icon{
        font-size: 70px;
    }

    .user-name{
        font-size: 30px;
        margin-top: 25px;
        margin-left: 40px;
    }

    @media (max-width: 750px) {

    display: flex;
    background: linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%);

    margin-top: 22px;
    margin-bottom: 160px;
    padding-left: 14px;
    padding-top: 5px;
    padding-bottom : 10px;

    .avatar-user{
        margin-top: 10px;
        width: 50px;
        height: 50px;
    }

    .avatar-user-icon{
        font-size: 50px;
    }

    .user-name{
        font-size: 14px;
        text-transform : capitalize;
        margin-top: 25px;
        margin-left: 15px;
    }
    
`;

const EditLink = styled.div`
    display: flex;
    margin-left: auto;
    margin-right : 10px;

    button{
        outline: none;
    }


    .edit-link-button{
        text-transform uppercase;
        cursor: pointer;
        margin-right: 15px;
        border: 0;
        background-color: inherit;
        color: white;
        height: 50px;
        margin-top: 10px;
    }

    .edit-link-icon{
        margin-top: 20px;
        margin-left: 30px;
    }

    .edit-link-button span{
        margin: 0;
    }

    .close-link-button{
        height: 30px;
        margin-right : 60px;
        margin-top: 30px;
        position: relative;
    }

    .close-link-button::before,
    .close-link-button::after{
        content: "";
        position: absolute;
        display: block;

        width : 2px;
        height : 20px;
        background-color: white;

        right: -20px;
        top: 5px;

        transform: rotate(45deg);
    }

    .close-link-button::after{
        transform: rotate(-45deg);
    }

    @media (max-width: 650px) {

        .edit-link-button svg{
            margin-top: 8px;
        }
    
        .edit-link-button span{
            font-size:0;
        }
    
        .edit-link-icon{
            margin-top: 10px;
        }
    
        .close-link-button{
            font-size:0;
            height: 25px;
            width: 25px;
            margin-right : 10px;
            position: relative;

            margin-top:17px;
        }


    .close-link-button::before,
    .close-link-button::after{
        content: "";
        position: absolute;
        display: block;

        width : 2px;
        height : 20px;
        background-color: white;

        right: 50%;
        top: 25%;

        transform: rotate(45deg);
    }

    .close-link-button::after{
        transform: rotate(-45deg);
    }
    }

    
`;

export {
    StyledUserHeader,
    EditLink
}