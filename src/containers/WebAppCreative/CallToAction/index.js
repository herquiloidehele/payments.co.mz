import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, {Content, ContactButton} from './cta.style';
import bubble1 from 'common/assets/image/webAppCreative/cta-bubble-1.png';
import bubble2 from 'common/assets/image/webAppCreative/cta-bubble-2.png';


const CallToAction = () => {


  return (
    <Section>
      <img src={bubble1?.src} className="bubble-1" alt="bubble1" />
      <Container width="1400px">
        <Content>
          <Heading content="Comece a receber pagamentos M-pesa Agora" />
          <Text content="Entre em contacto com a nossa equipa e saiba mais sobre o processo de integração do Mpesa na sua loja." />

          <ContactButton target={'_blank'} href="https://wa.me/+351915071158">
              Contacte-nos Agora
          </ContactButton>
        </Content>
      </Container>
      <img src={bubble2?.src} className="bubble-2" alt="bubble2" />
    </Section>
  );
};

export default CallToAction;
