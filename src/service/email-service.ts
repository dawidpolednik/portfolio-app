import axios from 'axios';

const sendEmail = async ({ name, email, message }: FormMailerValues) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: {
      email,
      name,
      message,
    },
  });
};

export default sendEmail;
