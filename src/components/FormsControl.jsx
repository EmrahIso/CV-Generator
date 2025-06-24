import Form from './Form';

function FormsControl() {
  const allFormsInfo = [
    {
      title: 'General Information',
      inputs: [
        {
          title: 'fullName',
          id: 'full-name',
          type: 'text',
          label: 'Full Name',
          required: true,
          placeholder: 'Emrah Isovic',
          key: crypto.randomUUID(),
        },
        {
          title: 'description',
          id: 'personal-description',
          type: 'textarea',
          label: 'Summary about yourself',
          required: false,
          placeholder: null,
          key: crypto.randomUUID(),
        },
      ],
      key: crypto.randomUUID(),
    },
    {
      title: 'Contact Information',
      inputs: [
        {
          title: 'emailAddress',
          id: 'email',
          type: 'email',
          label: 'Email',
          required: true,
          placeholder: 'emrahisovic20@gmail.com',
          key: crypto.randomUUID(),
        },
        {
          title: 'phoneNumber',
          id: 'phone-number',
          type: 'tel',
          label: 'Phone Number',
          required: false,
          placeholder: '+123 456 7890',
          key: crypto.randomUUID(),
        },
        {
          title: 'address',
          id: 'location-address',
          type: 'text',
          label: 'Address',
          required: false,
          placeholder: 'Sarajevo, B&H',
          key: crypto.randomUUID(),
        },
      ],
      key: crypto.randomUUID(),
    },
    {
      title: 'Skills',
      inputs: [
        {
          title: 'skill',
          id: 'technical-skill',
          type: 'text',
          label: 'Technical Skill',
          required: true,
          placeholder: 'Software Engineer',
          key: crypto.randomUUID(),
        },
        {
          title: 'skillsDescription',
          type: 'textarea',
          label: 'Description of your skills',
          required: false,
          placeholder: null,
          key: crypto.randomUUID(),
        },
      ],
      key: crypto.randomUUID(),
    },
    {
      title: 'Education',
      inputs: [
        {
          title: 'university',
          type: 'text',
          label: 'University',
          placeholder: 'Enter university or school',
          required: false,
          key: crypto.randomUUID(),
        },
        {
          title: 'degree',
          type: 'text',
          label: 'Degree',
          placeholder: 'Enter your Degree title',
          required: false,
          key: crypto.randomUUID(),
        },
        {
          title: 'educationStartDate',
          type: 'date',
          label: 'Start Date',
          placeholder: null,
          required: false,
          key: crypto.randomUUID(),
        },
        {
          title: 'educationEndDate',
          type: 'date',
          label: 'End Date',
          placeholder: null,
          required: false,
          key: crypto.randomUUID(),
        },
        {
          title: 'gpa',
          type: 'text',
          label: 'Your GPA',
          placeholder: null,
          required: false,
          key: crypto.randomUUID(),
        },
      ],
      key: crypto.randomUUID(),
    },
    {
      title: 'Experience',
      inputs: [
        {
          title: 'company',
          type: 'text',
          label: 'Company Name',
          placeholder: 'Enter Company Name',
          required: true,
          key: crypto.randomUUID(),
        },
        {
          title: 'jobTitle',
          type: 'text',
          label: 'Job Title',
          placeholder: 'Enter Job Title',
          required: true,
          key: crypto.randomUUID(),
        },
        {
          title: 'jobStartDate',
          type: 'date',
          label: 'Start Date',
          placeholder: null,
          required: false,
          key: crypto.randomUUID(),
        },
        {
          title: 'jobEndDate',
          type: 'date',
          label: 'End Date',
          placeholder: null,
          required: false,
          key: crypto.randomUUID(),
        },
        {
          title: 'jobDescription',
          type: 'textarea',
          label: 'Summary about your Job',
          required: false,
          placeholder: null,
          key: crypto.randomUUID(),
        },
      ],
      key: crypto.randomUUID(),
    },
  ];

  return (
    <div>
      {allFormsInfo.map((formInfoObj) => {
        return (
          <div key={formInfoObj.key}>
            <h2>{formInfoObj.title}</h2>
            <Form inputs={formInfoObj.inputs} />
          </div>
        );
      })}
    </div>
  );
}

export default FormsControl;
