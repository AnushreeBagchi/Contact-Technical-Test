export const DETAILS = {
  textFields: [
    {
      name: "name",
      label: "What's your full legal name?",
      type: "text",
      defaultValue: "Homer Simpson",
    },
    {
      name: "email",
      label: "What's your email address?",
      type: "text",
      defaultValue: "homer@example.com",
      helperText: "We will use this to contact you about your application."
    },
   
    {
      name: "height",
      label: "How tall are you?",
      type: "number",
      required: true,
      defaultValue: 175,
      helperText: "This should be between 150 and 200cm",
    },
  ],
};

export const EMP_STATUS_LABEL = "Employment Status";
export const TITLE_LABEL = "Title";
export const TITLE_DROPDOWN = ["Mr", "Mrs", "Ms"];
export const EMP_STATUS_DROPDOWN = ["Full Time", "Part Time", "Student"];
export const HOME_BTN_TEXT = "Navigate to Home";
export const NO_CARD_TEXT = "No Card Selected";
export const INCOME_REQUIRED_MSG = "Required";
export const MIN_LENGTH_MSG = "Length must be atleast 3 characters long! ";

export const FETCH_CARDS_FAILED_MSG = "Fetch Cards Action Failed";
export const FETCH_AVAILABLE_CARDS_FAILED_MSG = "Fetch Available Card Failed";

export const baseURL = "http://localhost:3000";
