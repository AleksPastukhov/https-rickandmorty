import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CharacterName = styled.h2`
  margin: 0;
  padding: 0;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(30 / 20);
  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.87);
`;

export const CharacterSpecies = styled.p`
  margin: 0;
  padding: 0;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  line-height: calc(21 / 14);
  letter-spacing: 0.25px;

  color: rgba(0, 0, 0, 0.6);
`;

export const InfoBox = styled.div`
  padding: 12px 16px;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
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
  box-shadow: ${p => p.theme.boxShadow};
  border-radius: 4px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    width: 240px;
  }

  img {
    @media screen and (min-width: 1200px) {
      width: 240px;
    }
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
