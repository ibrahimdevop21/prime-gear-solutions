export const contactData = {
  mainContact: {
    email: "info@primegearsolutions.com",
    phone: "+966 11 234 5678",
    address: "King Salman Road, Riyadh, Saudi Arabia",
    workingHours: {
      mondayToThursday: "8:00 AM - 5:00 PM",
      friday: "10:00 AM - 2:00 PM",
      saturday: "Closed"
    }
  },
  locations: [
    {
      name: "Riyadh Office",
      address: "King Salman Road, Riyadh, Saudi Arabia",
      phone: "+966 11 234 5678",
      email: "riyadh@primegearsolutions.com",
      coordinates: {
        lat: 24.7136,
        lng: 46.6753
      }
    },
    {
      name: "Jeddah Office",
      address: "King Fahd Road, Jeddah, Saudi Arabia",
      phone: "+966 12 345 6789",
      email: "jeddah@primegearsolutions.com",
      coordinates: {
        lat: 21.4889,
        lng: 39.1887
      }
    },
    {
      name: "Dammam Office",
      address: "King Abdulaziz Road, Dammam, Saudi Arabia",
      phone: "+966 13 456 7890",
      email: "dammam@primegearsolutions.com",
      coordinates: {
        lat: 26.4301,
        lng: 50.1106
      }
    }
  ],
  contactForm: {
    fields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        required: true
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        required: true
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        required: true
      },
      {
        id: "subject",
        label: "Subject",
        type: "text",
        required: true
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        required: true
      }
    ],
    submitText: "Send Message"
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/primegearsolutions",
      icon: "FaLinkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/primegearsolutions",
      icon: "FaTwitter"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/primegearsolutions",
      icon: "FaInstagram"
    }
  ]
};
