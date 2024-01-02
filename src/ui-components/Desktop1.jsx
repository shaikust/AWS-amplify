/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Input, Text, View } from "@aws-amplify/ui-react";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../graphql/mutations';

export default function Desktop1(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate()
  const [name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const buttonStyle = {
    backgroundColor: 'white',
    marginLeft: '55px',
    marginTop: '18px',
    fontSize: '26px',
    borderWidth: '4px',
    paddingInline: '34px',
    paddingBlock: '16px',
  };

  async function createUserDetails(name, email, password) {
    try {
      const userDetails = {
        name,
        email,
       password
      };
  
      const newUser = await API.graphql(graphqlOperation(createUser, { input: userDetails }));
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }
  const handleClick= async()=>{
    
    // console.log(email)
    // console.log(password)
    // console.log(username)
    // navigate('/validate')
    try {
      console.log(name)
      console.log(password)
      console.log(email)

      const { user } = await Auth.signUp({
          username: name,
          password: password,
          attributes: {
              email: email,
          }
      });
      const newUser = await createUserDetails(name, email, password);
      console.log('User created:', newUser);

      navigate('/validate')            
  } catch (err) { console.log(err) }
};

  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Desktop1")}
      {...rest}
    >
      <View
        width="699px"
        height="974px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        left="calc(50% - 349.5px - 17.5px)"
        borderRadius="70px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(28,102,212,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Icon
        width="500px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 500.0039978027344, height: 1 }}
        paths={[
          {
            d: "M0 0L500.004 0L500.004 -1L0 -1L0 0Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="382px"
        left="470px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Icon
        width="500px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 500.0039978027344, height: 1 }}
        paths={[
          {
            d: "M0 0L500.004 0L500.004 -1L0 -1L0 0Z",
            stroke: "rgba(198,217,244,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="552px"
        left="470px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Icon
        width="500.04px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 500.0364685058594, height: 1 }}
        paths={[
          {
            d: "M0 0L500.036 0L500.036 -1L0 -1L0 0Z",
            stroke: "rgba(236,241,248,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="722px"
        left="470px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="48.409088134765625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="407px"
        height="94px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="159px"
        left="calc(50% - 203.5px - 4.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Register Here!"
        {...getOverrideProps(overrides, "Register Here!")}
      ></Text>
      <input
  // type="text"
  // fontFamily="Inter"
  // fontSize="60px"
  // fontWeight="400"
  // color="rgba(255,255,255,1)"
  // lineHeight="36.30681610107422px"
  // textAlign="left"
  // display="block"
  // direction="column"
  // justifyContent="unset"
  // width="298px"
  // height="34px"
  // gap="unset"
  // alignItems="unset"
  placeholder="Enter Email"
  style={{
    position: "absolute",
    top: "385px",
    left: "480px",
    height:"45px",
    width:"450px",
    fontSize:"x-large"
  }}
  // You can set the initial value here
  onChange={evt => setEmail(evt.target.value)}
/>

      <input
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="36.30681610107422px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="364px"
        height="27px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="512px"
        left="394px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        // children="New Password"
        placeholder="Enter New Password"
        style={{
          position: "absolute",
          top: "485px",
          left: "480px",
          height:"45px",
          width:"450px",
          fontSize:"x-large"
        }}
        onChange={evt => setPassword(evt.target.value)}
        {...getOverrideProps(overrides, "New Password")}
      />
      <input
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="36.30681610107422px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="266px"
        height="50px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="682px"
        left="467px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        // children="Confirm Password"
        placeholder="User Name"
        style={{
          position: "absolute",
          top: "585px",
          left: "480px",
          height:"45px",
          width:"450px",
          fontSize:"x-large"
        }}
        onChange={evt => setUserName(evt.target.value)}
        {...getOverrideProps(overrides, "User Name")}
      />
      <View
        width="281px"
        height="106px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="799px"
        left="562px"
        borderRadius="61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,248,248,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      >
         <button className="btn mt-3" style={buttonStyle} onClick={handleClick}>Register</button>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(28,102,212,1)"
        lineHeight="36.30681610107422px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="189px"
        height="47px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="860px"
        left="605px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="click here to login"
        {...getOverrideProps(overrides, "Register")}
      >
         <a href="/">go back to login</a>
      </Text>
    </View>
  );
}
