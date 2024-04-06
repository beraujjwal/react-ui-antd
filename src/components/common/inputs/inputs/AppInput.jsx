import React from "react";
import { Input as AntInput } from "antd";
import * as S from "./AppInput.styles";

export const { AppTextArea, AppSearch } = AntInput;

export const AppInput = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <S.Input ref={ref} className={className} {...props}>
      {children}
    </S.Input>
  )
);
