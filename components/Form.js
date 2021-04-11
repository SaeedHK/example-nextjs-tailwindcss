import { FlexCenter, FlexCol, FlexRow } from './Flex';

const Field = ({ label }) => {
  return (
    <div className="relative w-full">
      <FlexRow className="w-full h-11">
        <label className="w-32 h-full px-3 text-green-800 bg-green-300 rounded-l-xl">
          <FlexCenter className="h-full">{label}</FlexCenter>
        </label>
        <input className="w-full px-2 text-black bg-gray-200 border-0 rounded-r-lg focus:outline-none" />
      </FlexRow>
    </div>
  );
};

const Form = () => {
  return (
    <form className="w-2/5">
      <FlexCol className="space-y-5">
        <Field label="Name" />
        <Field label="Family" />
        <Field label="Address" />
      </FlexCol>
    </form>
  );
};

export default Form;
export { Field };
