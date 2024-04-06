import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { createComponent } from "@lit/react";
import { RoundSlider } from "round-slider";
import { hToMS, msToH } from "../../../../../../../utils/utils";
import * as S from "./NightTimeSlider.styles";

// const RoundSliderComponent = createComponent(
//   React,
//   "round-slider",
//   RoundSlider,
//   {
//     onValueChanged: "value-changed",
//     onChange: "value-changing",
//   }
// );

// const RoundSliderComponent = createComponent({
//   tagName: "round-slider",
//   elementClass: RoundSlider,
//   react: React,
//   events: {
//     onValueChanged: "value-changed",
//     onChange: "value-changing",
//   },
// });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSlider = (event, onLow, onHigh) => {
  const entries = event.detail && Object.entries(event.detail)[0];

  const value = entries && entries[1];

  if (entries) {
    if (entries[0] === "high") {
      onHigh(value);
    } else {
      onLow(value);
    }
  }
};

export const NightTimeSlider = ({ from, to, setNightTime }) => {
  const [fromValue, setFromValue] = useState(msToH(from));
  const [toValue, setToValue] = useState(msToH(to));

  const { t } = useTranslation();

  return (
    <>
      <S.Wrapper>
        {/* <RoundSliderComponent
          min={0}
          max={23}
          handleSize={12}
          step={1}
          arcLength={360}
          startAngle={-90}
          low={fromValue}
          high={toValue}
          onChange={(event) => handleSlider(event, setFromValue, setToValue)}
          onValueChanged={(event) =>
            handleSlider(
              event,
              (value) => setNightTime([hToMS(value), to]),
              (value) => setNightTime([from, hToMS(value)])
            )
          }
        /> */}
        <S.ShadowWrapper />

        <S.BackgroundWrapper>
          <S.TopText>24</S.TopText>

          <S.RightText>6</S.RightText>

          <S.CenterText>
            {toValue > fromValue
              ? toValue - fromValue
              : 24 - fromValue + toValue}
            {t("header.nightMode.h")}
          </S.CenterText>

          <S.BotText>12</S.BotText>

          <S.LeftText>18</S.LeftText>
        </S.BackgroundWrapper>
      </S.Wrapper>

      <S.TimeRow>
        <S.TimeWrapper>
          <S.Text>{t("header.nightMode.from").toUpperCase()}</S.Text>
          <S.NumberInput
            type="number"
            size="small"
            min={0}
            max={24}
            value={fromValue}
            onChange={(value) => setFromValue(Number(value === 24 ? 0 : value))}
          />
        </S.TimeWrapper>

        <S.TimeWrapper>
          <S.Text>{t("header.nightMode.to").toUpperCase()}</S.Text>
          <S.NumberInput
            type="number"
            size="small"
            min={0}
            max={24}
            value={toValue}
            onChange={(value) => setToValue(Number(value === 24 ? 0 : value))}
          />
        </S.TimeWrapper>
      </S.TimeRow>
    </>
  );
};
