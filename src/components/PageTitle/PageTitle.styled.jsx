import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 600;
  color: ${props => props.theme.color};
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;
