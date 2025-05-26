import axios from "axios";

const API_URL = "/api/todos";

const todoservice = {
  getAllTodos: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {}
  },

  getTodoById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {}
  },
};

export default todoservice