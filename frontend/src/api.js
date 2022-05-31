import axios from 'axios';

const API_URL = 'http://localhost:3001';

class Api {
  static async getAllUsers() {
    const res = await axios.get(`${API_URL}/users`);
    return res.data;
  }
  static async getUser(id) {
    const res = await axios.get(`${API_URL}/users/${id}`);
    return res.data;
  }
  static async registerUser(data) {
    const res = await axios({
      method: 'POST',
      url: `${API_URL}/users`,
      data: { ...data },
    });
    return res.data;
  }
}

export default Api;
