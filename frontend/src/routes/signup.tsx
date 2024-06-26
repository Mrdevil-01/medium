import { useState } from 'react';
import InputData from "../components/input";
import ButtonData from "../components/button";
import Heading from "../components/heading";
import SubHeading from "../components/subheadling";
import LoginReview from "../components/login-review";
import { SignupType } from "@rohitnpmdata/common-data-app";

function Signup() {
  return (
  

      <div className="flex max-md:flex-col md:justify-between items-center h-screen bg-grey-500">
        <div className="mx-md: w-full md:w-1/2 h-screen flex justify-center items-center bg-[#fefffe]">
          <div>
            <Heading headline="Create an account" />
            <SubHeading subheading="Already have an account?" link={"Signin"} linkPath="signin"/>
            <div className=" flex justify-center">
            <div className="w-full">
                <InputField />
                </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 max-md:hidden flex justify-center bg-[#f2f4f7] h-screen items-center">
          <div className="w-9/12">
            <LoginReview />
          </div>
        </div>
      </div>

  );
}

function InputField() {
  const [inputProps, setInputProps] = useState<SignupType>({
    name: "",
    email: "",
    password: ""
  });
  return (
    <>
      <InputData onchange={(e)=>{
        setInputProps({
          ...inputProps,
          name:e.target.value
        })}} placeholder="Enter your name" type="text" label="name" />
      <InputData onchange={(e)=>{
        setInputProps({
          ...inputProps,
          email:e.target.value
        })
        console.log(e.target.value)
      }} placeholder="example@gmail.com" type="text" label="email" />
      <InputData onchange={(e)=>{
        setInputProps({
          ...inputProps,
          password:e.target.value
        })}}
         placeholder="******" type="password" label="password" />
      <ButtonData 
        name={inputProps.name} 
        email={inputProps.email} 
        password={inputProps.password} 
        button="Sign up" 
        mode="signup" 
      />
    </>
  );
}

export default Signup;
