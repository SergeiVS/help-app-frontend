import { useAppSelector } from "../../store/hooks";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../styles/CommonCss";
import { PagesPaths } from "../../components/Layout/types";

function CreatePost() {
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
        <CreatePostForm />
      </PageWrapper>
    </>
  );
}

export default CreatePost;
