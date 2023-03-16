import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 86px 10px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 1040px;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 200px;

  @media screen and (min-width: 1200px) {
    width: 600px;
    height: 200px;
  }
`;

export const SectionTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
