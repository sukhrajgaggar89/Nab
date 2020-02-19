export const textRequired = value => {
    if (!value) return "Required";
  };
  
  export const checkboxRequired = value => {
    if (!value) return "Required";
  };
  
  export const addressValidation = value => {
    if (!value) return;
    if (value.length > 50) return "address should not exceed 50 characters";
  };
  
  export const descriptionValidation = value => {
    if (!value) return ;
    if (value.length > 200 || value.length < 10)
      return "Description should be between 10 and 200 words";
  };
  
  export const selectValidation = value => {
    if (!value) return "Required";
    if (value === "Select one") return "Required";
  };
  