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
    {
      name: "gender",
      label: "What Gender you identify as?",
      type: "text",
      defaultValue: "male",
      helperText: `Should be 'male", 'female' or 'other'`,
    },
  ],
};
