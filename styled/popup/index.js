

import styled from "styled-components"

const PopupContainer = styled.div`
width: 100%;
height: 100%;

position: absolute;
display: flex;
top:0;
z-index: 10;
background-color: rgba(0,0,0,0.4);


justify-content: center;
align-items: center;

.popup{
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  padding-top: 70px;
  border-radius: 10px;


  @keyframes fadeout{
    from {opacity : 0.2}
    to {opacity 1}
  }

  animation-name : fadeout;
  animation-duration: 0.4s;
}

h2{
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: rgba(49, 49, 49, 0.7);

  margin: 0 auto;
  margin-bottom: 32px;
}

.loading{
  background-color : #01BDA7;
  color:white;
}


.confirm-btn{
    margin: 0 auto;
    margin-bottom : 28px;
    padding: 18px 28px;
    width: 212px;
    color: white;
    cursor: pointer;
    margin-bottom: 40px;

    font-weight: bold;
    background-color: inherit;
    color: #01BDA7;

    border: 1px solid #00BFA5;
    border-radius: 36px;

}

.confirm-btn:hover,
.confirm-btn:active,
.confirm-btn:focus{
  background-color : #01BDA7;
  color:white;
}

.confirm-undo{
  margin-bottom: 50px;
}

.close-modal{
  width: 25px;
  height: 25px;
  cursor: pointer;

  border: 0;
  background-color: inherit;
  position: absolute;

  top: 30px;
  right: 30px;
}

.close-modal::before,
.close-modal::after{
    content: "";
    position: absolute;
    display: block;
    background: #828282;


    width : 2px;
    height : 25px;
    background-color: black;

    top:0;
    right: 50%;


    transform: rotate(45deg);
}

.close-modal::after{
  transform: rotate(-45deg);
}


@media (max-width: 600px) {
    @keyframes fromBottom{
      from {transform: translateY(1000px)}
      to {transform: translateY(0px)}
    }

    
    width: 100%;
    height: 100%;
    
    align-items: flex-end;

    .popup{
      background-color: white;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 600px;
      height: 500px;
      border-radius: 10px;

      animation-name : fromBottom;
      animation-duration: 0.6s;
    }

}

`;

export default PopupContainer