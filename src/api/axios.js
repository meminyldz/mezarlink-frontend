import axios from "axios";

// Localde Vite dev server (5173) ile Spring Boot (8080) ayri portlarda
// calistigi icin localhost:8080'e dogrudan gidiyoruz.
// Production'da ise Vercel'in vercel.json'daki rewrite kurali sayesinde
// /api/* istekleri ayni domain (mezarlink-frontend.vercel.app) uzerinden
// Railway'e yonlendiriliyor. Bu sayede tarayici istegi "ayni site" (first-party)
// olarak gorur ve JSESSIONID cookie'si third-party cookie engeline
// yakalanmadan calisir.
const baseURL = import.meta.env.DEV
  ? "http://localhost:8080/api"
  : "/api";

const api = axios.create({
  baseURL,
  // ONEMLI: session cookie (JSESSIONID) tasimak icin gerekli.
  withCredentials: true,
});

export default api;