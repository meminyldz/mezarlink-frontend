import axios from "axios";

const api = axios.create({
  baseURL: "https://mezarlink-backend-production.up.railway.app/api",
  // ONEMLI: session cookie (JSESSIONID) tasimak icin gerekli.
  // Bu olmadan login basarili olsa da sonraki istekler 401 doner.
  withCredentials: true,
});

export default api;