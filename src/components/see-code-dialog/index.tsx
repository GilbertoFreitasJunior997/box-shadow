import * as Dialog from "@radix-ui/react-dialog";
import { CodeIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../button";
import { useState } from "react";
import { Code } from "../code";

export const SeeCodeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          color="see-code"
          text={
            <div className="flex items-center gap-1">
              <CodeIcon /> See Code
            </div>
          }
          tooltip="See code"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed bg-black/50" />
        <Dialog.Content className="bg-slate-900 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] min-h-[10rem] p-6 focus:outline-none">
          <Dialog.Title className="m-0 text-xl flex justify-between items-center">
            <span>Generated CSS</span>
            <Dialog.Close asChild>
              <Button
                color="see-code"
                text={
                  <div className="flex items-center gap-1">
                    <Cross2Icon />
                  </div>
                }
                tooltip="See code"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </Dialog.Close>
          </Dialog.Title>
          <div className="mx-3 mt-2">
            <Code />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
