import Skeleton, { SkeletonTheme } from "react-skeleton-loading";
import Col from "react-bootstrap/Col";
const items = Array(6).fill(null);

function ProjectLoader() {
  return (
    <div
      className="bg-white shadow-sm mb-3"
      style={{
        borderRadius: "10px",
      }}
    >
      <SkeletonTheme color="#D2D2D2">
        <div className="w-100 skeleton-loader-project">
          <Skeleton height="140px" width="100%" />
        </div>
        <div className="p-3">
          <Skeleton height="10px" width="140px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default function ProjectsLoader() {
  return (
    <div className="w-100 row">
      {items.map((_, i) => (
        <Col md={6} lg={4} className="mb-3 px-2" key={i}>
          <ProjectLoader />
        </Col>
      ))}
    </div>
  );
}
