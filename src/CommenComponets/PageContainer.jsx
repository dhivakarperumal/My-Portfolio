const PageContainer = ({ children, className = "", fullWidth = false }) => {
  const widthClass = fullWidth ? "max-w-none" : "max-w-[1280px]";

  return (
    <div
      className={`page-container mx-auto w-full ${widthClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;