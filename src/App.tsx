import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/Layout/Layout";
import { PagesPaths } from "./components/Layout/types";
import Home from "./pages/Home/Home";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  signInSelectors,
  signInActions,
} from "./store/redux/SignInFormSlice/SignInFormSlice";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import CreatePost from "./pages/CreatePost/CreatePost";
import MyAccount from "./pages/MyAccount/MyAccount";
import AllPosts from "./pages/AllPosts/AllPosts";
import MyPosts from "./pages/MyPosts/MyPosts";

function App() {
  const dispatch = useAppDispatch();
  const isLoggedOn = useAppSelector(signInSelectors.isLoggedOn);

  useEffect(() => {
    if (isLoggedOn) {
      dispatch(signInActions.getUser());
    }
  }, [isLoggedOn]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path={PagesPaths.HOME} element={<Home />}></Route>
          <Route path={PagesPaths.SIGNIN} element={<SignIn />}></Route>
          <Route path={PagesPaths.SIGNUP} element={<SignUp />}></Route>
          <Route path={PagesPaths.CREATEPOST} element={<CreatePost />}></Route>
          <Route path={PagesPaths.MYACCOUNT} element={<MyAccount />}></Route>
          <Route path={PagesPaths.ALLPOSTS} element={<AllPosts />}></Route>
          <Route path={PagesPaths.MYPOSTS} element={<MyPosts />}></Route>
        </Routes>
      </Layout>
    </>
  );
}
export default App;
