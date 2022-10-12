import axios from 'axios';
export default async function api<T>(url: string) {
  try {
    const { data, status } = await axios.get<T>(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    if (status !== 200) {
      return status;
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
