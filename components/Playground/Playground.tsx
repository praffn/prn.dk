import React, { useEffect, useMemo } from "react";
import APlayground from "@agney/playground";

interface PlaygroundProps {
  initialSnippet: {
    markup: string;
    css: string;
    javascript: string;
  };
  defaultEditorTab?: "markup" | "css" | "javascript";
  defaultResultTab?: "result" | "console";
  react?: boolean;
}

function Playground({
  initialSnippet,
  defaultEditorTab,
  defaultResultTab,
  react = false,
}: PlaygroundProps) {
  return (
    <APlayground
      initialSnippet={initialSnippet}
      defaultEditorTab={defaultEditorTab}
      defaultResultTab={defaultResultTab}
      transformJs
      presets={react ? ["react"] : []}
      mode="light"
    />
  );
}

export default Playground;
