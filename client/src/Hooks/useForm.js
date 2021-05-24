import { useMutation } from "react-query";
import { sendForm } from "../Helpers/utils";

export default function useForm() {
  const mutation = useMutation((e) => sendForm(e));
  return mutation;
}
