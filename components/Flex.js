const FlexCenter = ({ children, className, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center
	  ${className}
	  `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const FlexCol = ({ children, className, center, between, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className={`flex flex-col
      ${center ? 'justify-center' : ''}
      ${between ? 'justify-between' : ''}
      ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const FlexRow = ({ children, className, center, between, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className={`flex flex-row
      ${center ? 'justify-center' : ''}
      ${between ? 'justify-between' : ''}
      ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { FlexCol, FlexRow, FlexCenter };
