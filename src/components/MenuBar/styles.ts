import styled from "styled-components";
import { COLORS, SCREEN_SIZE } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 20px 60px;
  border-bottom: 1px solid #ddd;
`;

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface TabProps {
  isActive: boolean;
}

export const Tab = styled.div<TabProps>`
  margin: 0 10px;
  border: none;
  border-bottom: 3px solid;
  border-bottom-color: ${(props) =>
    props.isActive ? COLORS.RED : "transparent"};
  padding-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  color: black;
  transition: 0.3s ease;

  &:hover {
    color: ${COLORS.RED};
    cursor: pointer;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media ${SCREEN_SIZE.md} {
    display: inline;
  }
`;

export const HamburgerIconWrap = styled.div`
  padding: 10px;
  position: relative;
  width: 25px;

  &:hover {
    cursor: pointer;
  }

  span {
    transition: 0.2s ease;
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: red;
    border-radius: 1px;

    &:first-child {
      top: 0;
    }

    &:nth-child(2),
    :nth-child(3) {
      top: 8px;
    }

    &:nth-child(4) {
      top: 16px;
    }
  }
`;
