import { Header } from '@/components/Header';
import { Meta } from '@/components/seo';
import { Feature } from '@/containers/Feature';
import { Hero } from '@/containers/Hero';
import { UserFlow } from '@/containers/UserFlow';
import { Main } from '@/layouts';

const DownloadApp = () => {
  return (
    <Main meta={<Meta title="Home Page" description="This is the home page" />}>
      <div className="h-screen max-h-[1200px] bg-gradient-to-br from-[#ffffff] to-[#EDF4F4]">
        <Header />
        <Hero />
        <Feature />
        <UserFlow />
      </div>
    </Main>
  );
};

export default DownloadApp;
