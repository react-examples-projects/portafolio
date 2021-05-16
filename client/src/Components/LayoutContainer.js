import { Suspense } from "react";
import Layout from "./Layout";
import PageLoader from "./Loaders/PageLoader";

export default function LayoutContainer({
  layout,
  component: Component,
  layoutClassName,
}) {
  const Container = ({ children, ...args }) =>
    layout ? <Layout {...args}>{children} </Layout> : <>{children}</>;

  return (
    <Container className={layoutClassName}>
      <Suspense fallback={<PageLoader />} delayMs={500}>
        <Component />
      </Suspense>
    </Container>
  );
}
