import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/register",
      authData
    );

    dispatch({ type: "REGİSTER", payload: data });

    window.location = "/";
  } catch (error) {
    toast(error.response?.data?.msg || "Kayıt olurken bir hata oluştu.", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/login", authData);

    dispatch({ type: "LOGIN", payload: data });

    window.location = "/home";
  } catch (error) {
    toast(error.response?.data?.msg || "Giriş yaparken bir hata oluştu.", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
