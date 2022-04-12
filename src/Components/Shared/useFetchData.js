// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../Reducers/AuthSlice";

import axios from "axios";

// export default function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async function () {
//       try {
//         setLoading(true);
//         const response = await axios.get(url);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [url]);

//   return { data, error, loading };
// }

export const loginCall = (formEmail, formPassword, dispatch) => {
  const formData = new FormData();
  formData.append("email", formEmail);
  formData.append("password", formPassword);
  axios
    .post("http://localhost:4000/api/login", formData)
    .then((res) => {
      console.log(res.data.user.name);
      dispatch(setUserName(res.data.user.name));
    })
    .then(() => {
      navigate("/desktop");
    })
    .catch((err) => message.error(err.response.data.err));
};
