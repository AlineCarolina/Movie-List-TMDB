import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWFkNWY3ODA2ODlhYjYyN2Y0YjEyY2NiMGY2YjlhYSIsIm5iZiI6MTc2MTA4MDk5NS42Nywic3ViIjoiNjhmN2Y2YTM5YTI3MmU2MzAyY2FjMjk0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ABl6wUl6EXupq420XMAm_TWAbEaBOoHCZ3x74Vqj7dQ"
  },
});

export default api;

