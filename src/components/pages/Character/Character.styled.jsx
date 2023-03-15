import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 95%;
  margin: 20px auto;
  padding: 10px;
  box-shadow: ${p => p.theme.boxShadow};
`;

export const NavItem = styled(NavLink)`
  border: 1px solid ${p => p.theme.colors.primaryTextColor};
  border-radius: 5px;
  padding: 4px;
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  transition: color ${p => p.theme.transition},
    transform ${p => p.theme.transition};

  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.accentСolor};
    border: 1px solid ${p => p.theme.colors.accentСolor};
    transform: scale(1.04);
  }
`;
