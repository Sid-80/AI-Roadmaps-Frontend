import { USER } from "@/types";
import axios from "axios";

export const createNewUser = async (User: USER) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/v1/user/signin`,
      User,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
