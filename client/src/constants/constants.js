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
      defaultValue: 175,
      helperText: "This should be between 150 and 200cm",
    },
  ],
};

export const FETCH_CARDS_FAILED_MSG = "Fetch Cards Action Failed";
export const FETCH_AVAILABLE_CARDS_FAILED_MSG = "Fetch Available Card Failed";

export const baseURL = "http://localhost:3000";
