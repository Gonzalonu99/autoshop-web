import styled from "styled-components";

export const FormSectionDiv = styled.div`
  height: 100vh;
  position: relative;
  top: 150px;
  background-color: #d3e5f1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  border: 0.2 solid #d3e5f1;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  @media (min-width: 657px) {
    top: -10px;
    height: 100vh;
  }
`;
export const FormH2 = styled.h2`
  color: #5a238b;
  position: absolute;
  /* color: #279be9; */
  font-size: 35px;
  font-weight: bolder;
  padding-top: 55px;
`;
export const StyledForm = styled.form`
  padding: 45px;
  position: relative;
  top: 140px;
  @media(min-width: 768px) and (max-width: 1024px){
    width: 70%;
    top:230px;
  }
  @media(min-width: 1024px){
    top: 120px;
  }
`;
export const FormInput = styled.input`
  padding:10px;
  margin-bottom: 25px;
  width:94%;
  border:1px solid transparent;
  border-radius:15px;
  :focus{
    outline: none;
  }
`;
export const FormTextArea = styled.textarea`
  width:94%;
  border:1px solid transparent;
  border-radius:15px;
  :focus{
    outline: none;
  }
`;
export const FormButton = styled.button`
  margin-top: 25px;
  background-color: #5a238b;
  color:#fff;
  font-size: 20px;
  width: 45%;
  border: 1px solid transparent;
  border-radius:30px;
  @media(min-width: 768px){
    margin-top: 35px;
    width: 35%;
  }
`;