import { useState } from 'react';
import { FlexCenter, FlexCol, FlexRow } from './Flex';

const Field = ({ label, toolTip }) => {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);
  return (
    <div className="relative w-full">
      <FlexRow
        className="w-full h-11"
        onMouseEnter={() => {
          setTooltipIsActive(true);
        }}
        onMouseLeave={() => setTooltipIsActive(false)}
      >
        <label className="w-32 h-full px-3 text-green-800 bg-green-300 rounded-l-xl">
          <FlexCenter className="h-full">{label}</FlexCenter>
        </label>
        <input className="w-full px-2 text-black bg-gray-200 border-0 rounded-r-lg focus:outline-none" />
      </FlexRow>

      {toolTip && (
        <div
          className={
            'p-3 text-sm text-gray-500 mt-1 w-full bg-gray-200 rounded-b-lg border-t-2 border-green-400 transition duration-500 delay-1000 absolute ' +
            (tooltipIsActive ? 'opacity-100 z-20' : 'opacity-0 invisible')
          }
        >
          {toolTip}
        </div>
      )}
    </div>
  );
};

const Form = () => {
  const toolTip = ` Vestibulum rhoncus congue lacus. Vivamus euismod,
		felis quis commodo viverra, dolor elit dictum ante, et mollis
	eros augue at est. Class aptent taciti sociosqu ad litora torquent per
	    conubia nostra, per inceptos himenaeos. Nulla lectus sem, tristique
		sed, semper in, hendrerit non, sem. Vivamus dignissim massa in
		ipsum. Morbi fringilla ullamcorper ligula. Nunc turpis. Mauris
		vitae sapien. Nunc luctus bibendum velit.

Morbi faucibus volutpat sapien. Nam ac mauris at justo adipiscing facilisis.
		Nunc et velit. Donec auctor, nulla id laoreet volutpat, pede
	erat feugiat ante, auctor facilisis dui augue non turpis. Suspendisse
	mattis metus et justo. Aliquam erat volutpat. Suspendisse potenti. Nam.
		`;
  return (
    <form className="w-2/5">
      <FlexCol className="space-y-5">
        <Field label="Name" toolTip={toolTip} />
        <Field label="Family" toolTip={toolTip} />
        <Field label="Address" toolTip={toolTip} />
      </FlexCol>
    </form>
  );
};

export default Form;
export { Field };
