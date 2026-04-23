type SectionProps = {
  children: React.ReactNode;
};

export function Section({ children }: SectionProps) {
  return <section>{children}</section>;
}
