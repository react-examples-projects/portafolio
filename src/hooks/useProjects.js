import { useState, useEffect } from "react";
import p from "../resources/projects.json";

export default function useProjects() {
  const [filter, setCurrentFilter] = useState("importants");
  const [projects, setProjects] = useState(p || []);

  const onFilter = (value) => {
    setCurrentFilter(value);
  };

  useEffect(() => {
    const FILTERS = {
      all() {
        return p.sort((p1, p2) => p2.rank - p1.rank);
      },
      importants() {
        return p.filter((p) => p.rank === 2);
      },
      casuals() {
        return p.filter((p) => p.rank === 1);
      },
      practice() {
        return p.filter((p) => p.rank === 0);
      },
    };
    
    const sorted = FILTERS[filter]();
    setProjects(sorted);
  }, [filter]);

  return { projects, filter, onFilter };
}
