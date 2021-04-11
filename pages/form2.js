import { useState } from 'react';
import { FlexCol, FlexRow, FlexCenter } from '../components/Flex';
import { Field, Submit } from '../components/Form';
import Layout from '../components/Layout';

const FIELD_NAMES = {
  name: 'name',
  family: 'family',
  email: 'email',
  tel: 'tel',
  address: 'address',
};

const DescField = ({ fieldName, children, activeField }) => (
  <div
    className={`transform origin-top-left ${
      activeField === fieldName ? 'text-green-600 scale-105' : ''
    } transition duration-500`}
  >
    {children}
  </div>
);

const Desc = ({ activeField }) => {
  return (
    <FlexCol className="w-2/3 py-10 px-16 border-2 border-green-300 rounded-xl space-y-5 transition duration-500">
      <DescField fieldName={FIELD_NAMES.name} activeField={activeField}>
        Ea commodo consequat.
      </DescField>
      <DescField fieldName={FIELD_NAMES.family} activeField={activeField}>
        Duis splople autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
        consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
        odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
        nulla facilisi.
      </DescField>
      <DescField fieldName={FIELD_NAMES.email} activeField={activeField}>
        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
        mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in
        iis qui facit eorum claritatem.
      </DescField>
      <DescField fieldName={FIELD_NAMES.tel} activeField={activeField}>
        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
      </DescField>
      <DescField fieldName={FIELD_NAMES.address} activeField={activeField}>
        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
        est.
      </DescField>
    </FlexCol>
  );
};

const FormWithDesc = () => {
  const [activeField, setActiveField] = useState(undefined);

  return (
    <Layout>
      <FlexCenter className="h-screen">
        <FlexRow className="w-full h-full">
          <FlexCenter className="w-1/3 bg-green-50">
            <form className="w-4/5">
              <FlexCol className="space-y-5">
                <FlexRow className="space-x-5">
                  <Field
                    label="Name"
                    onFocus={() => setActiveField(FIELD_NAMES.name)}
                    onBlur={() => setActiveField(undefined)}
                  />
                  <Field
                    label="Family"
                    onFocus={() => setActiveField(FIELD_NAMES.family)}
                    onBlur={() => setActiveField(undefined)}
                  />
                </FlexRow>
                <FlexRow className="space-x-5">
                  <Field
                    label="Email"
                    onFocus={() => setActiveField(FIELD_NAMES.email)}
                    onBlur={() => setActiveField(undefined)}
                  />
                  <Field
                    label="Tel"
                    onFocus={() => setActiveField(FIELD_NAMES.tel)}
                    onBlur={() => setActiveField(undefined)}
                  />
                </FlexRow>
                <Field
                  label="Address"
                  onFocus={() => setActiveField(FIELD_NAMES.address)}
                  onBlur={() => setActiveField(undefined)}
                />
                <FlexCenter>
                  <Submit className="mt-5" />
                </FlexCenter>
              </FlexCol>
            </form>
          </FlexCenter>
          <FlexCenter className="w-2/3">
            <Desc activeField={activeField} />
          </FlexCenter>
        </FlexRow>
      </FlexCenter>
    </Layout>
  );
};

export default FormWithDesc;
