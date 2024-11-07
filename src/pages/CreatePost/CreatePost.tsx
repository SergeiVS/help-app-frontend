import { PageWrapper } from "../../styles/CommonCss";

import { useAppSelector } from "../../store/hooks";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";
import { StyledErrorMessage } from "../../styles/CommonCss";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";

function CreatePost() {
  const isLogged = useAppSelector(signInSelectors.isLoggedOn);
  const loginAccessRender = isLogged ? (
    <CreatePostForm />
  ) : (
    <StyledErrorMessage>Access denied</StyledErrorMessage>
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
