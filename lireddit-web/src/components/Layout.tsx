import React from "react";
import { Wrapper, WrapeperVariant } from "./Wrapper";
import { NavBar } from "./NavBar";

interface LayoutProps {
  variant?: WrapeperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={variant}> {children} </Wrapper>
    </>
  );
};
