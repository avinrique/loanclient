import clsx from "clsx";

export default function SectionWrapper({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={clsx("py-20 px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
