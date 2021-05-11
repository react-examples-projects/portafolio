import { useQuery } from "react-query";
import { getProjects } from "../Helpers/requests";

export default function useProjects() {
  const query = useQuery("projects", () => getProjects());
  return query;
}
