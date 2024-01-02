/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditProfileOverridesProps = {
    EditProfile?: PrimitiveOverrideProps<FlexProps>;
    "Desktop - 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Login here"?: PrimitiveOverrideProps<TextProps>;
    "Line 138463232"?: PrimitiveOverrideProps<IconProps>;
    "Line 138463236"?: PrimitiveOverrideProps<IconProps>;
    "Email Id"?: PrimitiveOverrideProps<TextProps>;
    password?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Login?: PrimitiveOverrideProps<TextProps>;
    "New user ? Register here"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EditProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EditProfileOverridesProps | undefined | null;
}>;
export default function EditProfile(props: EditProfileProps): React.ReactElement;
