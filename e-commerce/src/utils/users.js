import { v4 as uuidv4 } from "uuid";
import { getLS, setLS } from "./localstorage";

const users = [
  {
    id: uuidv4(),
    name: "Franco",
    lastname: "Diaz",
    email: "franco@franco.com",
    password: "Franco123",
    role: "admin",
  },
  {
    id: uuidv4(),
    name: "Franco",
    lastname: "Toledo",
    email: "francot@franco.com",
    password: "Franco123",
    role: "admin",
  },
  {
    id: uuidv4(),
    name: "Mauro",
    lastname: "Solorzano",
    email: "mauro@mauro.com",
    password: "Mauro123",
    role: "buyer",
  },
];

function usersSeeder() {
  const data = getLS("users");
  if (data?.length) return;
  setLS("users", users);
}

export { usersSeeder };
