/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

export default function EditProfile(props) {
  const { overrides, ...rest } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleClick=async () => {
    try {
        console.log('Login');
        console.log(email);
        console.log(password);    

        await Auth.signIn(email, password)

        props.updateAuthStatus(true)
        navigate('/screen1')
    } catch (err) { console.log(err) }
}
const buttonStyle = {
  backgroundColor: 'white',
  marginLeft: '51px',
  marginTop: '31px',
  fontSize: '26px',
  borderWidth: '4px',
  paddingInline: '34px',
  paddingBlock: '16px',
};
  
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditProfile")}
      {...rest}
    >
      <View
        width="1768px"
        height="1100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Desktop - 1")}
      >
        <View
          width="848px"
          height="1100px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="126px"
          left="974px"
          transformOrigin="top left"
          transform="rotate(90deg)"
          borderRadius="61px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(30,50,123,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="116px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="604px"
          height="54px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="586px"
          left="114px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Login here"
          {...getOverrideProps(overrides, "Login here")}
        ></Text>
        <Icon
          width="579px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 579.0009765625, height: 1 }}
          paths={[
            {
              d: "M0 -4.44089e-16L579.001 -4.44089e-16L579.001 -6L0 -6L0 -4.44089e-16Z",
              stroke: "rgba(30,50,123,1)",
              fillRule: "nonzero",
              strokeWidth: 6,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="510.5px"
          left="1138px"
          {...getOverrideProps(overrides, "Line 138463232")}
        ></Icon>
        <Icon
          width="579px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 579.0009765625, height: 1 }}
          paths={[
            {
              d: "M0 -4.44089e-16L579.001 -4.44089e-16L579.001 -6L0 -6L0 -4.44089e-16Z",
              stroke: "rgba(30,50,123,1)",
              fillRule: "nonzero",
              strokeWidth: 6,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="730px"
          left="1137px"
          {...getOverrideProps(overrides, "Line 138463236")}
        ></Icon>
        <input
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="400"
          color="rgba(30,50,123,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="392px"
          height="85px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="472px"
          left="1136px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          // children="Email Id"
          placeholder="Email Id"
          style={{
            position: "absolute",
            top: "500px",
            left: "1120px",
            height:"80px",
            width:"565px",
            fontSize:"xx-large"
          }}
          onChange={evt => setEmail(evt.target.value)}
          {...getOverrideProps(overrides, "Email Id")}
        />
        <input
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="400"
          color="rgba(30,50,123,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="469px"
          height="82px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="687px"
          left="1137px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          // children="password"
          placeholder="Password"
          style={{
            position: "absolute",
            top: "700px",
            left: "1120px",
            height:"80px",
            width:"565px",
            fontSize:"xx-large"
          }}
          type="password"
          onChange={evt => setPassword(evt.target.value)}
          {...getOverrideProps(overrides, "password")}
        />
        <View
          width="259px"
          height="127px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="847px"
          left="1297px"
          borderRadius="39px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(30,50,123,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        >
           <button className="btn mt-3" style={buttonStyle} onClick={handleClick}>Login</button>
           {/* <button class="btn mt-3" style="background-color: blue;margin-left: 51px;">register</button> */}
        </View>
        {/* <Text
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="149px"
          height="45px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="890px"
          left="1359px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Login"
          {...getOverrideProps(overrides, "Login")}
        ></Text> */}
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(30,50,123,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="569px"
          height="31px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="999px"
          left="1210px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="New user  Register here"
          {...getOverrideProps(overrides, "New user ? Register here")}
        >
          New user? <a href="/register">Register here</a>
        </Text>
      </View>
    </Flex>
  );
}
