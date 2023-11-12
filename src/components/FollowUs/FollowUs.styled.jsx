import styled from 'styled-components';
import { ReactComponent as FacebookSvg } from '../../assets/images/link_icons/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../assets/images/link_icons/instagram.svg';
import { ReactComponent as YoutubeSvg } from '../../assets/images/link_icons/youtube.svg';

export const FollowUsList = styled.ul`
  display: flex;
  gap: 14px;
  align-items: center; 

  @media screen and (min-width: 768px) {
    gap: 16px;
    
  }
`;
export const FollowUsListItem = styled.li``;
export const FollowUsLink = styled.a`
  display: flex;
  width: 38px;
  height: 38px;

  border-radius: 10px;
  border: 1px solid var(--white-twenty-color);
  align-items: center;
  justify-content: center;

  transition: transform var(--transition), border var(--transition);
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: solid 1px var(--white-color);
    
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const FacebookIcon = styled(FacebookSvg)`
  fill: var(--white-color);
  // fill: ${props => props.isInFooter === 'true' ? props.theme.color : props.theme.backgroundColor}
  width: 22px;
  height: 22px;
  padding: 8px;
  box-sizing: content-box;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    padding: 10px;
  }
`;

export const InstagramIcon = styled(InstagramSvg)`
  fill: var(--white-color);
  // fill: ${props => props.isInFooter === 'true' ? props.theme.color : props.theme.backgroundColor}
  width: 22px;
  height: 22px;
  padding: 8px;
  box-sizing: content-box;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export const YoutubeIcon = styled(YoutubeSvg)`
  fill: var(--white-color);
  // fill: ${props => props.isInFooter === 'true' ? props.theme.color : props.theme.backgroundColor}
  width: 22px;
  height: 22px;
  padding: 8px;
  box-sizing: content-box;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;


