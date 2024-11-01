import { ReactNode } from "react"

export interface LayoutProps {
  children?: ReactNode
}

export enum PagesPaths {
  HOME = "/home",
  SIGNIN = "/signin",
  SIGNUP = "/signup",
  ALLPOSTS = "/viewposts",
  MYACCOUNT = "/myaccount",
  MYPOSTS = "/myposts",
  CREATEPOST = "/createpost",
}
