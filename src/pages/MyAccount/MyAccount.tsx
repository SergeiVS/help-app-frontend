import {PageWrapper}from "../../styles/CommonCss"
import Account from "../../components/Account/Account"
import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";

function MyAccount() {
  const isLogged = useAppSelector(signInSelectors.isLoggedOn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/singin");
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
