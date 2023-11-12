import React from 'react';

// import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Buttons/UserLogo/UserLogo';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import CloseMobileMenuBtn from 'components/Buttons/CloseMobileMenuBtn/CloseMobileMenuBtn';
import BurgerBtn from 'components/Buttons/BurgerBtn/BurgerBtn';
import {
  Container,
  HeaderCont,
  HeaderList,
  MainWrapper,
  HeaderItem,
  LastHeaderItem,
} from './Header.styled';
import LogoHeader from './LogoHeder';

const Header = ({ isOpenMobileMenu, toggleMobileMenu, toggleTheme }) => {
  return (
    <>
      <HeaderCont>
        <Container>
          <MainWrapper>
            <HeaderList>
              <HeaderItem>
                <LogoHeader />
              </HeaderItem>
              <HeaderItem>
                <Navigation />
              </HeaderItem>
              <HeaderItem className="push-right">
                <LastHeaderItem>
                  <ThemeToggler
                    isOpenMobileMenu={isOpenMobileMenu}
                    toggleTheme={toggleTheme}
                  />
                  {!isOpenMobileMenu && <UserLogo />}
                  {isOpenMobileMenu ? (
                    <CloseMobileMenuBtn toggleMobileMenu={toggleMobileMenu} />
                  ) : (
                    <BurgerBtn toggleMobileMenu={toggleMobileMenu} />
                  )}
                </LastHeaderItem>
              </HeaderItem>
            </HeaderList>
          </MainWrapper>
        </Container>
      </HeaderCont>
    </>
  );
};

export default Header;
