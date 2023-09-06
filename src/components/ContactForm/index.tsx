/* eslint-disable no-control-regex */
import { Form, withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { Box, Button, Stack, Text } from "@chakra-ui/react";

import Input from "./Input";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Box p={24}>
      <Form
        action="https://formsubmit.co/briangorman99@gmail.com"
        method="POST"
      >
        <Stack>
          <Stack>
            <Input name="name" />
            {touched.name && errors.name && (
              <Text color="red.500">{errors.name}</Text>
            )}
          </Stack>
          <Stack>
            <Input name="email" />
            {touched.email && errors.email && (
              <Text color="red.500">{errors.email}</Text>
            )}
          </Stack>
          <Stack>
            <Input name="message" />
            {touched.message && errors.message && (
              <Text color="red.500">{errors.message}</Text>
            )}
          </Stack>
        </Stack>

        <Button type="submit" disabled={isSubmitting} mt={"6"}>
          Submit
        </Button>
      </Form>
    </Box>
  );
};

interface ContactFormProps {}

const ContactForm = withFormik<ContactFormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  validationSchema: () =>
    Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(
          /^[-'a-zA-ZÀ-ÖØ-öø-ſ]+$/,
          "Cannot contain special characters or numbers"
        ),
      email: Yup.string()
        .required("Email is required")
        .matches(
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          "Invalid email address"
        ),
      message: Yup.string().required("Message is required"),
    }),

  handleSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm();
  },
})(InnerForm);

export default ContactForm;
