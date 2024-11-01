import styled from "@emotion/styled"
import { NavLink, Link as SimpleLink } from "react-router-dom"
import { Alert, ButtonGroup, Modal } from "@mui/material"

import { colors } from "../../styles/colors"

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 20%;
  width: 450px;
  height: fit-content;
`

export const StyledAlert= styled(Alert)`

width: 100%;
height: 100%;
`

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-attachment: fixed;
  background-color: ${colors.BACKGROUND_BLUE};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`

export const Header = styled.div`
  display: flex;
  z-index: 2;
  min-height: 130px;
  padding: 10px;
  background-color: ${colors.LIGHTBLUE};
  gap: 10px;
  box-shadow: 0px 25px 20px -20px rgba(0, 0, 0, 0.45);
  padding-left: 120px;
  padding-right: 120px;
  align-items: center;
  justify-content: space-between;
`

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: fit-content;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`

export const LogoName = styled.p`
  color: ${colors.GREY};
  font-size: 38px;
  font-weight: bold;
  text-decoration: none;
`

export const LogoImg = styled.img`
  height: 40px;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  width: fit-content;
  align-items: center;
`

export const Link = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: anchor-center;
  color: ${colors.GREY};
  font-size: 24px;
  font-weight: normal;
  text-decoration: none;
`

export const ButtonControl = styled.div`
width: fit-content;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  min-height: 700px;
`

export const NavigationMenu = styled.nav`
  display: flex;
  position: absolute;
  margin-top: 30px;
  right:15px;
  margin-right: 100px;
  margin-left: 100px;
  flex-direction: column;
  background-color: ${colors.DARK_GREY};
  border-radius: 8px;
  min-width: 200px;
  max-height: fit-content;
  padding: 20px;
  gap: 15px;
`

export const IconControl = styled.div`
  width: 30px;
`

export const Icon = styled.img`
  width: 100%;
`

export const Footer = styled.footer`
  display: flex;
  height: 80px;
  padding-left: 40px;
  padding-right: 40px;
  gap: 15px;
  background-color: white;
  border-top: 1px solid black;
  justify-content: space-between;
  padding-left: 130px;
  padding-right: 130px;
  align-items: center;
`


