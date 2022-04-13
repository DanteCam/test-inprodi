import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoginCall(api) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const call = (data, resolve, goTo) => {
    api
      .post("", data)
      .then((res) => resolve(res))
      .then(() => {
        navigate(goTo);
      })
      .catch((err) => {
        console.log(err.response.statusText);
        setError(err.response.statusText);
      });
  };

  return { call, error, setError };
}
