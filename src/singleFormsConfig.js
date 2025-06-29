const singleFormsConfig = [
  {
    title: 'General',
    inputs: [
      {
        title: 'fullName',
        id: 'full-name',
        type: 'text',
        label: 'Full Name',
        required: true,
        placeholder: 'e.g. Emrah Isovic',
      },
      {
        title: 'description',
        id: 'personal-description',
        type: 'textarea',
        label: 'Summary about yourself',
        required: false,
        placeholder: null,
      },
    ],
    key: 'general-form-group',
  },
  {
    title: 'Contact',
    inputs: [
      {
        title: 'emailAddress',
        id: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        placeholder: 'e.g.  emrahisovic20@gmail.com',
      },
      {
        title: 'phoneNumber',
        id: 'phone-number',
        type: 'tel',
        label: 'Phone Number',
        required: false,
        placeholder: 'e.g.  +123 456 7890',
      },
      {
        title: 'address',
        id: 'location-address',
        type: 'text',
        label: 'Address',
        required: false,
        placeholder: 'e.g.  Sarajevo, B&H',
      },
    ],
    key: 'contact-form-group',
  },
];

export default singleFormsConfig;
