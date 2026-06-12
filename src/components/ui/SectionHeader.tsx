import { ReactNode } from "react";

export function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-20 md:mb-28">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-2 max-w-3xl leading-[1.1]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-neutral-400 text-base md:text-lg max-w-md font-light leading-relaxed lg:pb-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
