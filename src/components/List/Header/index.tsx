type HeaderProps = { label?: string; totalCount: number };

export default function Header({ totalCount, label }: HeaderProps) {
  return (
    <div>
      총 {label} 수 {totalCount}
    </div>
  );
}