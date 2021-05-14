export default function SocialLink({ text, href = "#" }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
