const FlexCenter = ({ children, className }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center
	  ${className}
	  `}
    >
      {children}
    </div>
  );
};

const FlexCol = ({ children, className, center, between }) => {
  return (
    <div
      className={`flex flex-col
      ${center ? 'justify-center' : ''}
      ${between ? 'justify-between' : ''}
      ${className}`}
    >
      {children}
    </div>
  );
};

const FlexRow = ({ children, className, center, between }) => {
  return (
    <div
      className={`flex flex-row
      ${center ? 'justify-center' : ''}
      ${between ? 'justify-between' : ''}
      ${className}`}
    >
      {children}
    </div>
  );
};

export { FlexCol, FlexRow, FlexCenter };
