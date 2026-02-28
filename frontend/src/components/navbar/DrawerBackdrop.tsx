export type DrawerBackdropProps = {
  open: boolean;
  onClick: () => void;
};

export function DrawerBackdrop({ open, onClick }: DrawerBackdropProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Fechar menu"
      className={[
        "absolute inset-0",
        "transition-opacity duration-200 ease-out",
        open ? "opacity-60" : "opacity-0 pointer-events-none",
        "bg-black",
      ].join(" ")}
    />
  );
}