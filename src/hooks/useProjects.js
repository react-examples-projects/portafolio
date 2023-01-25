import { useState, useEffect } from "react";
import p from "../resources/projects.json";

export default function useProjects() {
  const [filter, setCurrentFilter] = useState("importants");
  const [projects, setProjects] = useState(p || []);

  const onFilter = (value) => {
    setCurrentFilter(value);
  };

  useEffect(() => {
    const filterProjects = (rank) => {
      if(rank === undefined) return p.sort((p1, p2) => p2.rank - p1.rank);
      return p
        .filter((p) => p.rank === rank)
        .sort((p1, p2) => p2.rank - p1.rank);
    };
    const FILTERS = {
      all        : _ => filterProjects(),
      importants : _ => filterProjects(2),
      casuals    : _ => filterProjects(1),
      practice   : _ => filterProjects(0),
    };

    const sorted = FILTERS[filter]();
    setProjects(sorted);
  }, [filter]);

  return { projects, filter, onFilter };
}
