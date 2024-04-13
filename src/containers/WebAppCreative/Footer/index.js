import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_place } from 'react-icons-kit/md/ic_place';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import {
  Section,
  Grid,
  AboutUs,
  FooterWidget,
  ContactInfo,
  InfoItem,
  FooterBottom,
  FooterNav,
  SocialLinks,
} from './footer.style';
import { footerTop, footer } from 'common/data/WebAppCreative';

const Footer = () => {
  return (
    <Section>
      <Container width="1400px">
        <FooterBottom>
          <Text content={footer.copyright} />
          <FooterNav>
            {footer.nav.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
