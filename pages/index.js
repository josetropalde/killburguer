import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useQuerySubscription, createSubscription } from "react-datocms";
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `
query {
  allItems {
    title
    description
    src {
      url
    }
    price
    href
  }
}`;

export async function getStaticProps(context) {
  const graphqlRequest = {
    query: HOMEPAGE_QUERY,
    includeDrafts: context.preview,
  };
  return {
    props: {
      subscription: context.preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

const Home = (props) => {
  const { subscription } = props;

  const { data, error, status } = useQuerySubscription(subscription);

  return (
    <>
      <Head>
        <title>Nosso cardápio</title>
      </Head>
      <Header />
      <Menu data={data} />
      <Footer />
    </>
  );
};

export default Home;
