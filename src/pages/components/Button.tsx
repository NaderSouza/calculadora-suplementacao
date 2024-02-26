import { ComponentProps } from "react";
import { CheckCircle } from "lucide-react";

export type ButtonProps = ComponentProps<"button"> & {
  success?: boolean;
};

export function Button({ success = false, ...props }: ButtonProps) {
  const playSound = () => {
    const audio = new Audio("/bur.mp3");
    audio.play();
  };
  return (
    <button
      onClick={playSound}
      data-success={success}
      className={`rounded px-4 h-9 text-sm font-medium text-zinc-900 hover:bg-zinc-200 data-[success=true]:bg-emerald-500 data-[success=true]:hover:bg-emerald-600`}
      {...props}
    >
      {props.children}
      {success && <CheckCircle className="w-4 h-4 inline ml-1" />}
    </button>
  );
}
