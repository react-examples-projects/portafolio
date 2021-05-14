export function blobToUrl(blob, cb) {
  if (!blob) return null;
  const fr = new FileReader();
  fr.onload = () => {
    cb(fr.result);
  };

  fr.readAsDataURL(blob);
}
