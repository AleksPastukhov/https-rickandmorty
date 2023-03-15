import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CharacterName = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px 5px;
  font-size: 16px;
`;

export const CharacterSpecies = styled.p``;

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0 0 20px 0;
`;

export const Card = styled.li`
  border-radius: 10px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.backgroundColor};
  transition: transform ${p => p.theme.transition};
  width: 240px;
  box-shadow: ${p => p.theme.boxShadow};
  border-radius: 4px;

  img {
    width: 240px;
  }

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.primaryTextColor};
  text-decoration: none;
`;
