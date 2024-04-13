import React, { useState, Fragment } from 'react';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import Section, { SectionHeading, RcCollapse } from './faq.style';
import { Panel } from 'rc-collapse';
import motion from './motion-util';

import { faqs } from 'common/data/WebAppCreative';

const Faq = () => {
  const [activeKey, setActiveKey] = useState(1);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  return (
    <Section id="faq">
      <Container className="container">
        <SectionHeading>
          <Heading content="Perguntas Frequentes" />
        </SectionHeading>
        <RcCollapse
          collapsible={undefined}
          accordion={true}
          activeKey={activeKey}
          onChange={onChange}
          openMotion={motion}
        >
          {faqs?.map((faq) => (
            <Panel
              key={faq.id}
              showArrow={false}
              header={
                <Fragment>
                  <Heading as="h4" content={faq.title} />
                  <span className="icon">
                    <Icon icon={minus} size={20} className="minus" />
                    <Icon icon={plus} size={20} className="plus" />
                  </span>
                </Fragment>
              }
            >
              {faq.description}
            </Panel>
          ))}
        </RcCollapse>
      </Container>
    </Section>
  );
};

export default Faq;
