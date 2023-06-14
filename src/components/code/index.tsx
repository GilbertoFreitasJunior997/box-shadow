import { CopyIcon } from "@radix-ui/react-icons";
import { useBoxStore } from "../../store";
import { cssShadows } from "../box/utils";
import { Button } from "../button";
import { useState } from "react";

export const Code = () => {
  const shadows = useBoxStore((s) => s.boxShadows);

  const [hasCopied, setHasCopied] = useState(false);

  const hasShadow = shadows.length;
  if (!hasShadow) {
    return <div> No shadow added! </div>;
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(fullText);
    setHasCopied(true);
  };

  const generatedShadow = cssShadows(shadows);
  const fullText = `box-shadow: ${generatedShadow};`;

  return (
    <div className="flex gap-1">
      <div className="flex-grow">{fullText}</div>
      <Button
        color="add"
        text={
          <div className="flex gap-1 items-center">
            {hasCopied ? (
              <>Copied!</>
            ) : (
              <>
                <CopyIcon /> Copy
              </>
            )}
          </div>
        }
        tooltip="Copy text"
        onClick={handleCopyText}
      />
    </div>
  );
};
