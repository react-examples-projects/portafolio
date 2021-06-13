export default function SocialLink({ text, href = "#", ...args }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...args}>
      {text}
    </a>
  );
}
