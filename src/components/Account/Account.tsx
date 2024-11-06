import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

import Input from "../Input/Input";
import Button from "../../components/Button/Button";

import {
  StyledAccount,
  StyledLable,
  ButtonContainer,
  ButtonsWrapper,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";
import { alertActions } from "../../store/redux/AlertSlice/AlertSlice";
import { InputTypes } from "../Input/types";
import { User } from "../../store/redux/SignInFormSlice/types";

function Account() {
  const dispatch = useAppDispatch();
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [isSendButtonDisabled, setSendButtonDisabled] = useState(true);
  const [isEditButtonDisabled, setEditButtonDisabled] = useState(false);

  const onEditButton = () => {
    setInputDisabled(false);
    setSendButtonDisabled(false);
    setEditButtonDisabled(true);
    console.log(isInputDisabled);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Firstname could not be empty"),
    lastName: Yup.string().required("Lastname could not be empty"),
    email: Yup.string()
      .email("Data should be in email format")
      .required("Firstname could not be empty"),
  });

  const user: User = useAppSelector(signInSelectors.user);

  const formik = useFormik({
    initialValues: {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },

    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: async (values) => {
      try {
        const response = await axios.put(
          "/api/users/update",
          {
            userId: values.userId,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
          },
          {
            headers: {
              "Content-Type": "application/JSON",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        dispatch(
          alertActions.setAlertStateOpen({
            isOpen: true,
            severity: "info",
            children: response.data.message,
          })
        );

        setInputDisabled(true);
        setSendButtonDisabled(true);
        setEditButtonDisabled(false);
        getNewValues();
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

  const getNewValues = () => {
    formik.values.userId = user.id;
    formik.values.firstName = user.firstName;
    formik.values.lastName = user.lastName;
    formik.values.phoneNumber = user.phoneNumber;
    formik.values.email = useAppSelector(signInSelectors.user).email;
  };

  return (
    <>
      <StyledAccount onSubmit={formik.handleSubmit}>
        <StyledLable>My Account</StyledLable>
        <Input
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          disabled={isInputDisabled}
        />
        <Input
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          disabled={isInputDisabled}
        />
        <Input
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          disabled={isInputDisabled}
        />
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          //Input is disabled because it leads to Authentication Error
          disabled
          type={InputTypes.EMAIL}
        />
        <ButtonsWrapper>
          <ButtonContainer>
            <Button
              type="button"
              onClick={onEditButton}
              disabled={isEditButtonDisabled}
            >
              <EditIcon />
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button isRegularButton disabled={isSendButtonDisabled}>
              Send
            </Button>
          </ButtonContainer>
        </ButtonsWrapper>
      </StyledAccount>
    </>
  );
}

export default Account;
