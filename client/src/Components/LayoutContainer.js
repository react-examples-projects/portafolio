import { Suspense, Fragment } from "react";
import Layout from "./Layout";
import PageLoader from "./Loaders/PageLoader";

export default function LayoutContainer({
  layout,
  component: Component,
  layoutClassName,
}) {
  const Container = layout ? Layout : Fragment;
  return (
    <Container className={layoutClassName}>
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    </Container>
  );
}
