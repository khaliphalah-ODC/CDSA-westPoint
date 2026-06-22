import type { ReactNode } from "react"

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 md:px-16 ${className}`}>{children}</div>
}

export function SectionHeading({
  title,
  children,
  centered = false,
}: {
  title: string
  children?: ReactNode
  centered?: boolean
}) {
  return (
    <div className={centered ? "mx-auto mb-16 max-w-2xl text-center" : "mb-12"}>
      <h2 className="font-display text-[32px] font-semibold leading-[40px] text-cdsa-green dark:text-cdsa-lime md:text-[48px] md:leading-[56px]">
        {title}
      </h2>
      {children && (
        <div className="mt-4 text-[18px] leading-[28px] text-cdsa-foreground-muted">{children}</div>
      )}
    </div>
  )
}
