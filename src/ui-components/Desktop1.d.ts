/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, InputMode, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop1OverridesProps = {
    Desktop1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Register Here!"?: PrimitiveOverrideProps<TextProps>;
    "Email Id"?: PrimitiveOverrideProps<InputMode>;
    "New Password"?: PrimitiveOverrideProps<TextProps>;
    "Confirm Password"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Register?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Desktop1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Desktop1OverridesProps | undefined | null;
}>;

export default function Desktop1(props: Desktop1Props): React.ReactElement
