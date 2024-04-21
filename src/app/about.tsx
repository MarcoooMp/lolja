import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>Sobre</title>
      </Head>
      <header>
        <h1>Sobre Nossa Empresa</h1>
      </header>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet fringilla magna, non scelerisque nulla fringilla at. Nullam tincidunt eros eu libero pellentesque tempus.
        </p>
        <p>
          Fusce vitae lacinia ipsum. Vivamus pulvinar eros sit amet est vehicula, vitae molestie eros vehicula. Curabitur sit amet ex nec odio elementum scelerisque.
        </p>
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Nome da Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default About;
