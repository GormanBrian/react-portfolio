import { FieldHookConfig, useField } from "formik";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & FieldHookConfig<"input">;

const Input = ({ name }: InputProps) => {
  const [field] = useField(name);
  return (
    <>
      <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>{" "}
      <ChakraInput backgroundColor="gray.200" {...field} />
    </>
  );
};

export default Input;
