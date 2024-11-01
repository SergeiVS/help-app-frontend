import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"

import {
  StyledModal,
  StyledAlert,
  LayoutWrapper,
  Header,
  LogoDiv,
  LogoName,
  LogoImg,
  NavigationContainer,
  Link,
  ButtonControl,
  Main,
  IconControl,
  Icon,
  Footer,
} from "./styles"

import Button from "../../components/Button/Button"

import myaccount from "../../assets/myaccount.png"
import myposts from "../../assets/myposts.png"
import newpost from "../../assets/createpost.png"

import { LayoutProps, PagesPaths } from "./types"
import logo from "../../assets/logo.png"

import CloseIcon from "@mui/icons-material/Close"
import { alertSelectors, alertActions } from "../../store/redux/AlertSlice/AlertSlice"
import {
  signInActions,
  signInSelectors,
} from "../../store/redux/SignInFormSlice/SignInFormSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { IconButton } from "@mui/material"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isLoggedOn = useAppSelector(signInSelectors.isLoggedOn)
  const [modalOpen, setModalOpen] = useState(false)

  const isModalOpen = useAppSelector(alertSelectors.isOpen)
  const severity = useAppSelector(alertSelectors.severity)
  const message = useAppSelector(alertSelectors.cildren)


  useEffect(() => {
    if (isModalOpen) {
      setModalOpen(true)
      setTimeout(() => dispatch(alertActions.closeAlert()), 5000)
    } else {
      setModalOpen(false)
    }
  }, [isModalOpen])

  const closeModal = () => {
    setModalOpen(false)
    dispatch(alertActions.closeAlert())
  }

  const goToHomePage = () => {
    navigate(PagesPaths.HOME)
  }

  const goToSignUp = () => {
    navigate("/signup")
  }

  const signOut = () => {
    dispatch(signInActions.logOut())
    navigate("/home")
  }

  return (
    <LayoutWrapper>
      <StyledModal open={modalOpen} onClose={closeModal}>
        <StyledAlert severity={severity}>
          {message}
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </StyledAlert>
      </StyledModal>
      <Header>
        <LogoDiv onClick={goToHomePage}>
          <LogoImg src={logo}></LogoImg>
          <LogoName>Help a hand</LogoName>
        </LogoDiv>
        {isLoggedOn ? (
          <NavigationContainer>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.ALLPOSTS}
            >
              All Posts
            </Link>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.MYACCOUNT}
            >
              <IconControl>
                <Icon src={myaccount} />
              </IconControl>
              <p>My Account</p>
            </Link>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.MYPOSTS}
            >
              <IconControl>
                <Icon src={myposts} />
              </IconControl>
              My Posts
            </Link>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.CREATEPOST}
            >
              <IconControl>
                <Icon src={newpost} />
              </IconControl>
              Create Post
            </Link>
            <ButtonControl>
              <Button isRegularButton onClick={signOut}>
                Sign Out
              </Button>
            </ButtonControl>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.ALLPOSTS}
            >
              All Posts
            </Link>
            <Link
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesPaths.SIGNIN}
            >
              Sign In
            </Link>
            <ButtonControl>
              <Button isRegularButton onClick={goToSignUp}>
                Sign Up
              </Button>
            </ButtonControl>
          </NavigationContainer>
        )}
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>Legal Stuff</p>
        <p>-</p>
        <p>Privacy Policy</p>
        <p>-</p>
        <p>Security</p>
        <p>-</p>
        <p>Website Accessibility</p>
        <p>-</p>
        <p>Manage Cookies</p>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
