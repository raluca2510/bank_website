import React from "react";
import { stats } from "../../constants";
import * as S from "./styles";

const Stats = () => {
  return (
    <S.Section>
      {stats.map((stat) => (
        <S.Stat key={stat.id}>
          <S.StatNum>{stat.value}</S.StatNum>
          <S.StatTitle>{stat.title}</S.StatTitle>
        </S.Stat>
      ))}
    </S.Section>
  );
};

export default Stats;
