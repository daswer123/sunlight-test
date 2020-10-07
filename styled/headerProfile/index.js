import styled from "styled-components"
import HeaderAbout from "../../components/headerProfile";


const HeaderAboutBlock = styled.div`
    display : flex;
    position: relative;
    margin-right: 100px;
    margin-left: auto;
    width: 100px;
    margin-top: 20px;
    cursor: pointer;

    .separator{
        content: "";
        width: 2px;
        height : 35px;

        left:10px;

        background-color: white;
        position: absolute;
        display: block;

        left: 50px;
        top: 5px;
    }

    .profile-name{
        margin-left: 10px;
        margin-top: 10px;

        @media (max-width: 780px) {
            display: none;
          }
    }

    .avatar {
        margin-left: 35px;
        position: relative;
    }

`;

export default HeaderAboutBlock