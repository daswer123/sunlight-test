import styled from "styled-components";

const UserInfoContainer = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    color: black;

    @keyframes fadeout{
        from {opacity : 0.2}
        to {opacity 1}
    }
    
    animation-name : fadeout;
    animation-duration: 0.4s;

    margin-top: -140px;
    background-color: white;
    
    .user-info-list {
        padding-left: 77px;
        padding-top:10px;
        padding-bottom: 10px;
    }

    .user-icons{
        color: green;
        margin-right: 45px;
    }

    @media (max-width: 650px) {
        .user-info-list {
            padding-left: 10px;
            padding-top:10px;
            padding-bottom: 10px;
        }

        .user-icons{
            color: green;
            margin-right: 20px;
        }
        
    }
`
export default UserInfoContainer