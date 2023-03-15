import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 61px;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);

  & button {
    display: inline-block;
    width: 42px;
    height: 24px;
    padding: 0;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity ${p => p.theme.transition};
    background-color: inherit;
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 1;
    }
    & svg {
      width: 24px;
      height: 24px;
    }
  }

  & input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 16px;
    line-height: calc(24 / 16);
    border: none;
    outline: none;
    padding: 0;
    ::placeholder {
      font: inherit;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`;
