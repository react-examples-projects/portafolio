export function blobToUrl(blob, cb) {
  if (!blob) return cb(null);
  const fr = new FileReader();
  fr.onload = () => cb(fr.result);
  fr.readAsDataURL(blob);
}

export const route = (
  path,
  { component, redirect = false, layout = true, ...args }
) => ({
  path,
  component,
  exact: true,
  layout,
  redirect,
  ...args,
});
