import React from 'react';
import styled from 'styled-components';
import { Trans, I18n } from 'react-i18next';

import graphics from '../img/contact';

import { Container, Intro, Title, Paragraph, Input, Button, Triangle, Link } from './styles';

const FormContainer = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.form`
  margin: 0 1%;
  width: 60%;
  display: inline-block;

  & input,
  textarea {
    width: 100%;
  }

  & > * {
    margin: 0.75em 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

const Textarea = Input.withComponent('textarea').extend`
  resize: vertical;
`;

const SubmitButton = Button.extend`
  float: right;
  color: #0a6b94;
  border: solid 1px #0a6b94;
  background: #fff;
  width: 8em;
`;

const List = styled.ul`
  margin: 0 3%;
  list-style: none;
  padding: 0;
  width: 40%;
  display: inline-block;

  & li {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin: 2em 0;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & li {
      margin: 1em 1em !important;
    }
  }
`;

const ListGraphic = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 1em;
`;

function Contact({ id }) {
  return (
    <Container small id={id}>
      <Triangle color="#0d8ec5" leftTop />
      <Triangle color="#71c0db" rightBottom />
      <Intro>
        <Title>
          <Trans i18nKey="contact.title">Contact & Support</Trans>
        </Title>
        <Paragraph>
          <Trans i18nKey="contact.text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius quia itaque porro,
            quod voluptatum pariatur.
          </Trans>
        </Paragraph>
      </Intro>
      <FormContainer>
        <Form>
          <I18n>
            {t => (
              <React.Fragment>
                <Input type="text" placeholder={t('contact.name')} />
                <Input type="text" placeholder={t('contact.company')} />
                <Input type="text" placeholder={t('contact.email')} />
                <Textarea name="text" cols="30" rows="10" placeholder={t('contact.message')} />
              </React.Fragment>
            )}
          </I18n>
          <SubmitButton type="submit">
            <Trans i18nKey="contact.send">Send</Trans>
          </SubmitButton>
        </Form>
        <List>
          <li>
            <ListGraphic src={graphics.location} alt="" />Kapelstraat 88, B-2840 Rumst, Belgium
          </li>
          <li>
            <ListGraphic src={graphics.email} alt="" />
            <Link style={{ color: '#000' }} href="mailto:info@knowledgeflow.eu">
              info@knowledgeflow.eu
            </Link>
          </li>
          <li>
            <ListGraphic src={graphics.phone} alt="" />+32 (0)495 52 53 55
          </li>
        </List>
      </FormContainer>
    </Container>
  );
}

export default Contact;
