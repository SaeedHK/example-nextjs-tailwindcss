import { useState } from 'react';
import { FlexCenter, FlexCol, FlexRow } from './Flex';

const Field = ({ label, ToolTip }) => {
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

      {ToolTip && (
        <div
          className={
            'p-3 text-sm text-gray-500 mt-1 w-full bg-gray-200 rounded-b-lg border-t-2 border-green-400 transition duration-500 delay-1000 absolute ' +
            (tooltipIsActive ? 'opacity-100 z-20' : 'opacity-0 invisible')
          }
        >
          <ToolTip />
        </div>
      )}
    </div>
  );
};

const Form = () => {
  const ToolTip1 = () => (
    <div>
      Eros. Praesent dictum. Maecenas pharetra odio ut dui. Pellentesque ut orci. Sed lobortis,
      velit at laoreet suscipit, quam est sagittis nibh, id varius ipsum quam ac metus. Phasellus
      est nibh, bibendum non, dictum sed, vehicula in, sem.
    </div>
  );

  const ToolTip2 = () => (
    <div>
      Integer lacinia. Praesent blandit elementum sapien. Praesent enim mauris, suscipit a, auctor
      et, lacinia vitae, nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Praesent lacus diam, auctor quis, venenatis in, hendrerit at.
    </div>
  );

  const ToolTip3 = () => (
    <FlexRow className="space-x-3">
      <img src="/user.svg" className="w-1/3" />
      <FlexCenter className="text-xs">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Praesent lacus diam, auctor quis, venenatis in, hendrerit at. Eros. Praesent
        dictum. Maecenas pharetra odio ut dui. Pellentesque ut orci. Sed lobortis, velit at laoreet
        suscipit, quam est sagittis nibh, id varius ipsum quam ac metus. Phasellus est nibh,
        bibendum non, dictum sed, vehicula in, sem.
      </FlexCenter>
    </FlexRow>
  );

  return (
    <form className="w-2/5">
      <FlexCol className="space-y-5">
        <FlexRow className="space-x-5">
          <Field label="Name" ToolTip={ToolTip1} />
          <Field label="Family" ToolTip={ToolTip2} />
        </FlexRow>
        <FlexRow className="space-x-5">
          <Field label="Email" ToolTip={ToolTip2} />
          <Field label="Tel" ToolTip={ToolTip1} />
        </FlexRow>
        <Field label="Address" ToolTip={ToolTip3} />
      </FlexCol>
    </form>
  );
};

export default Form;
export { Field };
