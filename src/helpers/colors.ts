import { useColorModeValue } from "@chakra-ui/react";

export const useTextColor = () => useColorModeValue("gray.600", "gray.200");
export const useSecondaryTextColor = () =>
  useColorModeValue("gray.600", "white");
export const useHeadingColor = () => useColorModeValue("gray.800", "white");
export const useBorderColor = () => useColorModeValue("gray.200", "gray.900");
export const useBackgroundColor = () => useColorModeValue("white", "gray.800");
