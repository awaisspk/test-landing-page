import { Header } from '@/components/Header';
import { Meta } from '@/components/seo';
import { Feature } from '@/containers/Feature';
import { Hero } from '@/containers/Hero';
import { UserFlow } from '@/containers/UserFlow';
import { Main } from '@/layouts';

const Index = () => {
  return (
    <Main meta={<Meta title="Home Page" description="This is the home page" />}>
      <div className="min-h-screen from-[#ffffff] to-[#EDF4F4] md:bg-gradient-to-br">
        <Header />
        <Hero />
        <Feature />
        <UserFlow />
      </div>
    </Main>
  );
};

export default Index;
