const PrimaryButton = ({
  classes,
  onClick,
  icon,
  text,
  children,
  textClasses,
  disabled,
  type,
}) => {
  return (
    <button
      className={
        "px-5 py-2.5 text-md text-primary flex flex-row gap-2 uppercase items-center font-medium rounded-md transition-transform hover:scale-105 disabled:pointer-events-none" +
        ` ${classes}`
      }
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children ? (
        children
      ) : (
        <>
          {text && <p className={`text-sm ${textClasses}`}>{text}</p>}
          {icon && icon}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
