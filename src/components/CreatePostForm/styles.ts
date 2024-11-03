import { FormLabel } from "@mui/material";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { FormsCss } from "../../styles/CommonCss";

export const StyledPostForm = styled.form`
  ${FormsCss}
`;
export const StyledLable = styled(FormLabel)`
  color: ${colors.GREY};
  font-size: 22px;
`;
export const ButtonWraper = styled.div`
  align-self: center;
  width: 120px;
`;
export const UploadButtonWraper = styled.div`
  align-self: center;
  width: 240px;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 250px;
`;
export const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
  width: 100%;
`;

export const PhotoPreviewWrapper= styled.div`
/* align-self: center; */
height: 105px;
`
export const PhotoPreview = styled.img`
height: 100%;
`

