import Highlight, { defaultProps, Language } from "prism-react-renderer";

interface StaticCodeSnippetProps {
  code: string;
  language?: Language;
}

const StaticCodeSnippet = ({ code, language }: StaticCodeSnippetProps) => {
  return (
    <Highlight {...defaultProps} code={code} language={language ?? "markup"}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })}></span>
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default StaticCodeSnippet;

function mdxCodeClassNameToLanguage(className: string): Language {
  switch (className) {
    case "language-js":
      return "javascript";
    case "language-ts":
      return "typescript";
    default:
      return "markup";
  }
}

export const MDXStaticCodeSnippet: React.FC = (props) => {
  const codeblock = props.children as any;
  const language = mdxCodeClassNameToLanguage(codeblock.props.className);
  const code = codeblock.props.children;
  return <StaticCodeSnippet code={code} language={language} />;
};
