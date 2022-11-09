import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const Container = styled.label`
  height: 2em;
  width: 5em;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 2em;

  &:hover {
    cursor: pointer;
  }

  & > input {
    visibility: hidden;
  }
`;

const Content = styled.span`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
  position: relative;
`;

interface SwitchProps {
  right: boolean;
}

const Switch = styled.div<SwitchProps>`
  position: absolute;
  height: 1.5em;
  width: 1.5em;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background};
  ${(props) =>
    props.right &&
    `
    transform: translate(170%, 0) rotate(180deg); 
    `}
  transition: all .5s ease-out;

  & > img {
    margin-top: 0.25em;
    margin-left: -0.25em;
  }
`;

interface DarkModeSwitchProps {
  value: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export default function DarkModeSwitch({ value, toggle }: DarkModeSwitchProps) {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    toggle(!!event.target.checked);
  }

  return (
    <Container>
      <Content>
        <Image src="/dark.svg" alt="dark" width={16} height={16} />
        <Image src="/light.svg" alt="light" width={16} height={16} />
        <Switch right={!value}>
          <Image src="/ellipse.svg" alt="ellipse" width={16} height={16} />
        </Switch>
      </Content>
      <input type="checkbox" defaultChecked={value} onChange={handleOnChange} />
    </Container>
  );
}
