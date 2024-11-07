import { PageWrapper } from "../../styles/CommonCss";

import { useAppSelector } from "../../store/hooks";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";

function CreatePost() {
  const isLogged = useAppSelector(signInSelectors.isLoggedOn);
  const loginAccessRender = isLogged ? (
    <CreatePostForm />
  ) : (
    <p style={{ color: "red", fontSize: "larger" }}>Access denied</p>
  );

  return (
    <>
      <PageWrapper>
        {/* <CreatePostForm /> */}
        {loginAccessRender}
      </PageWrapper>
    </>
  );
}

export default CreatePost;
