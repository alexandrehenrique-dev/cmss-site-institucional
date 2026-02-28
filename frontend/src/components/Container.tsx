type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      {children}
    </div>
  );
}