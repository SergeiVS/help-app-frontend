import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
} from "../../components/CreatePostForm/styles";
import { PagesPaths } from "../../components/Layout/types";

function CreatePostForm() {
  const userId: number = useAppSelector(signInSelectors.user).id;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState<File>(); 
  const [fileName, setFileName] = useState<string>();

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

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const selectedPhoto = Array.from(event.target.files);
      setFile(selectedPhoto[0]);
      const names = selectedPhoto[0].name;
      setFileName(names);
      formik.setFieldValue("image", file);
    }
  };
  const handleUploadClick = () => {
    document.getElementById("photo-upload")?.click();
  };

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

        {/* Кнопка загрузки файлов */}
        <label htmlFor="photo-upload" style={{ display: "inline-block" }}>
          <Button
            isRegularButton
            type="button"
            onClick={handleUploadClick}
            disabled={!formik.dirty || formik.isSubmitting}
          >
            Upload Photo
          </Button>
          <input
            id="photo-upload"
            name="image"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
            value={formik.values.image}
          />
          {}
        </label>

        {/* Отображение имен загруженных файлов*/}
        {fileName !== undefined && (
          <div style={{ padding: "10px" }}>
            <strong>Uploaded Photo:</strong>
            <ul>{fileName}</ul>
          </div>
        )}

        <ButtonWraper>
          <Button
            isRegularButton
            disabled={!formik.dirty || formik.isSubmitting}
          >
            Send
          </Button>
        </ButtonWraper>
      </StyledPostForm>
    </>
  );
}

export default CreatePostForm;
