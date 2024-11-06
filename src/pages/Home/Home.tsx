import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  AboutUs,
  AboutUsTitle,
  AboutUsText,
  Picture,
  ButtonContainer,
  PictureControl,
} from "./styles";

import Button from "../../components/Button/Button";

function Home() {
  const navigate = useNavigate();

  const goToSignIN = () => {
    navigate("/signin");
  };

  return (
    <>
      <PageWrapper>
        <AboutUs>
          <AboutUsTitle>Lorem ipsum dolor sit amet.</AboutUsTitle>
          <AboutUsText>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </AboutUsText>
          <ButtonContainer>
            <Button isRegularButton onClick={goToSignIN}>
              Sign In
            </Button>
          </ButtonContainer>
        </AboutUs>
        <PictureControl>
          <Picture src="https://demo-shop-files.fra1.digitaloceanspaces.com/help-app-images/dd9e55a2-a573-42bc-aa82-e59675dddc0b..jpg"></Picture>
        </PictureControl>
      </PageWrapper>
    </>
  );
}

export default Home;
