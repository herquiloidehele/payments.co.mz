import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from './banner.style';
import dashboard from 'common/assets/image/webAppCreative/platform-payments.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="Receba pagamentos M-PESA na sua loja Shopify"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Integre o M-PESA à sua loja Shopify e comece a receber pagamentos. A nossa solução é rápida, segura e fácil de usar. Experimente agora!"
            />
            <Subscribe className="animate__animated animate__fadeInUp">
            </Subscribe>
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast" style={{borderRadius: "12px", background: 'transparent', boxShadow: "9px 6px 75px 18px rgba(0,0,0,0.1)"}}>
            <NextImage src={dashboard} alt="dashboard" style={{borderRadius: "12px"}} />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
