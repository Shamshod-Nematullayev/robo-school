import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Text = styled.div`
  font-size: 50px;
  color: ${theme.colors.secondary};
  margin-bottom: 50px;
  font-weight: 600;
`;

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Heading;