import React from 'react';
import { Form, Button, Input } from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const handleSubmit = e => e.preventDefault();
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" name="email" placeholder="example@mail.com" />
      <Button type="submit">Subscribe</Button>
    </Form>
  );
};
