import { StylesConfig } from "react-select";

export   const estiloConstumizado: StylesConfig<unknown, false> = {
    control: (styles) => ({
      ...styles,
      padding: "0px",
      backgrounColor: "transparent",
      border: "none",
      boxShadow: "1px 1px 5px #717f953a",
      borderRadius: ".8em",
      fontSize:'14px',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        cursor: isDisabled ? "not-allowed" : "default",
        backgroundColor: isFocused ? "#1CAF82": "default",
        color: isFocused ? "#fff": "default"
      };
    },
  };