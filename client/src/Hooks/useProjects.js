import { useQuery } from "react-query";
import { getProjects } from "../Helpers/requests";
import { useState, useEffect } from "react";

export default function useProjects() {
  const query = useQuery("projects", () => getProjects());
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(query.data || []);
  }, [query.data]);

  return {
    ...query,
    projects,
    setProjects,
  };
}
