import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
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

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

const Home = (props) => {
  const { data } = props;

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
