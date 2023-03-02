import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
`;

export const AppLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  img {
    width: 75px;
    margin-bottom: 10px;
  }
  p {
    letter-spacing: -1px;
    font-weight: 400;
  }
  h1 {
    font-size: ${({ theme }) => theme.font.lg};
    font-weight: 900;
  }
`;

export const LinkTo = styled.ul`
  width: 100%;
  margin-top: 30px;
  li {
    font-size: ${({ theme }) => theme.font.xs};
  }
  li + li {
    margin-top: 8px;
  }
  li:last-child {
    float: right;
    margin-top: -14px;
  }
  a {
    position: relative;
    margin-left: 5px;
    &:after {
      content: '';
      width: 100%;
      height: 0.5px;
      bottom: 1px;
      left: 0;
      background: #343434;
      position: absolute;
    }
  }
`;
