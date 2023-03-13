import React, { PropsWithChildren } from "react";
import { CommonProps } from "../../../../types";
import IconReplacer from "../IconReplacer";

import { Container } from "./styles";

const replaceRegExpTitle = new RegExp(".+(?<=_)", "gi");
const replaceRegExpIcons = new RegExp("(?=_).+", "gi");

const CardTitle: React.FC<PropsWithChildren<CommonProps>> = ({
  dataTestId = `card-title_${Date.now()}`,
  children
}) => <>
  <Container data-testid={dataTestId}>
    {(children as string).replaceAll(replaceRegExpTitle, "").replaceAll("-"," ")}<br />
    <h2 style={{ margin: "1%" }}><IconReplacer text={(children as string).replaceAll(replaceRegExpIcons, "")} darker={true}/></h2>
  </Container>
</>;

export default CardTitle;