import styled from 'styled-components';

export const Title = styled.h1`
color: ${props => props.theme.color};
  font-size: 32px;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${props => props.theme.color};

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    width: 860px;
  }
`;
