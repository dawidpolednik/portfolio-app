import { FormValues } from '@/models/FormValues';
import axios from 'axios';

const sendEmail = async ({ name, email, message }: FormValues) => {
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
