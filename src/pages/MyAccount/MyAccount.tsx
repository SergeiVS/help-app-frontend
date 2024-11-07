import {PageWrapper}from "../../styles/CommonCss"
import Account from "../../components/Account/Account"
import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";
import { PagesPaths } from "../../components/Layout/types";

function MyAccount() {
  const isLogged = useAppSelector(signInSelectors.isLoggedOn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate(PagesPaths.SIGNIN);
    }
  }, []);

  return (
    <>
      <PageWrapper>
        <Account />
      </PageWrapper>
    </>
  )
}

export default MyAccount
