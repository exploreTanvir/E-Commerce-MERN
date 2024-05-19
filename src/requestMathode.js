import axios from "axios";

const BASE_URL = "http://localhost:3003/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzgyNjdlZTFkMzExZTRhYmU5MDcwZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTYwODI4NDIsImV4cCI6MTcxNjM0MjA0Mn0.78ITgkZFJskGOo7w_KpmleoSzDIykn8ELRi8F1__Sr8"
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});