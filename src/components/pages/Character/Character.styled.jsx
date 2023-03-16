import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 76px 10px 142px;

  @media screen and (min-width: 1200px) {
    max-width: 1020px;
  }
`;

export const Foto = styled.img`
  display: block;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

export const Name = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 32px;
  line-height: calc(56 / 48);
  margin: 0 0 48px 0;
  text-align: center;

  color: ${p => p.theme.colors.nameTextColor};

  @media screen and (min-width: 540px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.15px;
  text-align: center;
  margin: 0 0 48px 0;
  color: ${p => p.theme.colors.subtitleTextColor};
`;

export const CharacterInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: calc(24 / 16);
  width: 100%;
  max-width: 413px;

  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.nameTextColor};

  @media screen and (min-width: 1200px) {
    max-width: 413px;
  }

  & li {
    padding: 9px 0 0 16px;

    & h2 {
      margin: 0;
      padding: 0;
    }
    & p {
      margin: 0;
      padding: 0;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: calc(20 / 14);
      letter-spacing: 0.25px;
      color: ${p => p.theme.colors.accentСolor};
      padding-bottom: 11px;
      border-bottom: 1px solid rgba(33, 33, 33, 0.08);
    }
  }
`;

export const NavItem = styled(NavLink)`
  position: fixed;
  padding: 0;
  left: 50px;
  top: 21px;
  font-family: 'Karla';
  font-weight: 700;
  font-size: 18px;
  line-height: calc(21 / 18);
  color: ${p => p.theme.colors.primaryTextColor};
  fill: ${p => p.theme.colors.primaryTextColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.accentСolor};
    border: 1px solid ${p => p.theme.colors.accentСolor};
    fill: ${p => p.theme.colors.accentСolor};
    transform: scale(1.04);
  }
`;
