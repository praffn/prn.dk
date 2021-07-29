interface SkipToContentProps {
  readonly label?: string;
  readonly href: string;
}

function SkipToContent({
  label = "Skip to main content",
  href,
}: SkipToContentProps) {
  return (
    <a
      className="absolute left-2 top-2 bg-gray-200 bg-opacity-80 px-6 py-8  transform translate-y-[-200%] focus:translate-y-0"
      href={href}
    >
      {label}
    </a>
  );
}

export default SkipToContent;
