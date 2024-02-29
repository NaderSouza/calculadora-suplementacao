import { ComponentProps } from "react";
import { CheckCircle } from "lucide-react";

export type ButtonProps = ComponentProps<"button"> & {
  success?: boolean;
};

export function Button({ success = false, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded px-4 h-9 text-sm font-medium text-zinc-900 bg-emerald-500 hover:bg-emerald-600`}
      {...props}
    >
      {props.children}
      {success && <CheckCircle className="w-4 h-4 inline ml-1" />}
    </button>
  );
}

export function ButtonModal({ success = false, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded px-4 h-9 text-sm font-medium text-zinc-900 bg-yellow-500 hover:bg-yellow-600`}
      {...props}
    >
      {props.children}
      {success && <CheckCircle className="w-4 h-4 inline ml-1" />}
    </button>
  );
}
