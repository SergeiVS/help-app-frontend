import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClearIcon from "@mui/icons-material/Clear";

import Input from "../Input/Input";
import Button from "../../components/Button/Button";
import RadioButton from "../../components/RadioButton/RadioButton";
import RadioGroupComp from "../../components/radiogroup/RadioGroupComp";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";
import { alertActions } from "../../store/redux/AlertSlice/AlertSlice";

import {
  StyledLable,
  StyledPostForm,
  ButtonWraper,
  FileInputWrapper,
  PhotoPreviewWrapper,
  PhotoPreview,
  UploadButtonWraper,
} from "../../components/CreatePostForm/styles";
import { PagesPaths } from "../../components/Layout/types";
import { UploadButtonMessage } from "./types";

function CreatePostForm() {
  const userId: number = useAppSelector(signInSelectors.user).id;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState<File>();
  const [uploadButtonText, setButtonText] = useState<string>(
    UploadButtonMessage.UPLOAD
  );
  const [uploadButtonIcon, setIcon] = useState(<CloudUploadIcon />);
  const [showPhoto, setShowPhoto] = useState<boolean>(false);
  const[imagePath, setImagePath]= useState<string|undefined>(undefined)

  const validationSchema = Yup.object().shape({
    header: Yup.string()
      .required("Header is required field")
      .min(5, "Header should be longer as 5 symbols"),
    description: Yup.string()
      .required("Description is required field")
      .min(5, "Description should be longer as 5 symbols")
      .max(200, "Description should not be longer as 200 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      userId: { userId },
      subject: "",
      header: "",
      description: "",
      image: undefined,
    },

    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: async (values, helpers) => {
      try {
        const response = await axios.post(
          "/api/posts",
          {
            userId: userId,
            subject: values.subject,
            header: values.header,
            description: values.description,
            image: file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        dispatch(
          alertActions.setAlertStateOpen({
            isOpen: true,
            severity: "success",
            children: response.data.message,
          })
        );

        helpers.resetForm();
        navigate(PagesPaths.MYPOSTS);
      } catch (e: any) {
        const error = e.response.data;

        dispatch(
          alertActions.setAlertStateOpen({
            isOpen: true,
            severity: "error",
            children: error.errorMessage,
          })
        );
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(undefined)
      const selectedPhoto = Array.from(event.target.files);
      setFile(selectedPhoto[0]);
      formik.setFieldValue("image", file);
      setShowPhoto(true);
    } 
  };

  const handleUploadClick = () => {
    if (!showPhoto) {
      document.getElementById("photo-upload")?.click();
    } else {
      setFile(undefined);
    }
  };

  useEffect(() => {
    if (file) {
      setButtonText(UploadButtonMessage.REMOVE);
      setIcon(<ClearIcon />);
      setImagePath(URL.createObjectURL(file))
      setShowPhoto(true)
    } else {
      setButtonText(UploadButtonMessage.UPLOAD);
      setIcon(<CloudUploadIcon />);
      setImagePath(undefined)
      setShowPhoto(false)
    }
    console.log(showPhoto, file);
  }, [file]);

  return (
    <>
      <StyledPostForm onSubmit={formik.handleSubmit}>
        <StyledLable>Create Post</StyledLable>
        <RadioGroupComp row={true} name="subject" onChange={formik.handleChange}>

          <RadioButton value="NEED HELP" label="Need Help" />
          <RadioButton value="OFFER HELP" label="Offer Help" />

        </RadioGroupComp>

        <Input
          name="header"
          label="Headline"
          onChange={formik.handleChange}
          error={formik.errors.header}
          value={formik.values.header}
        />

        <Input
          name="description"
          label="Description..."
          onChange={formik.handleChange}
          multiline
          rows={5}
          error={formik.errors.description}
          value={formik.values.description}
        />

        <FileInputWrapper>
          <UploadButtonWraper>
            <Button
              isRegularButton
              type="button"
              onClick={handleUploadClick}
              disabled={!formik.dirty || formik.isSubmitting}
              icon={uploadButtonIcon}
            >
              {uploadButtonText}
            </Button>
          </UploadButtonWraper>
          <input
            id="photo-upload"
            name="image"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
            value={formik.values.image}
          />
          {showPhoto && (
            <PhotoPreviewWrapper>
              <PhotoPreview src={imagePath} />
            </PhotoPreviewWrapper>
          )}
        </FileInputWrapper>

        <ButtonWraper>
          <Button
            isRegularButton
            disabled={!formik.dirty || formik.isSubmitting}
            icon={<SendIcon />}
          >
            Send
          </Button>
        </ButtonWraper>
      </StyledPostForm>
    </>
  );
}

export default CreatePostForm;
