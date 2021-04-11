import Layout from '../components/Layout';
import { FlexCenter } from '../components/Flex';
import Form from '../components/Form';

export default function Home() {
  return (
    <Layout>
      <FlexCenter className="h-full bg-gray-100">
        <Form />
      </FlexCenter>
    </Layout>
  );
}
