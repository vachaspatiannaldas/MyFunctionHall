import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Column = styled.div`
  flex: 0 0 48%; /* Adjust the width as needed */
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function MyForm() {
  return (
    <FormContainer>
      <Column>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </FormField>

        {/* Add your other form fields for the first column here */}
      </Column>

      <Column>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input type="text" name="email" id="email" />
        </FormField>

        {/* Add your other form fields for the second column here */}
      </Column>
    </FormContainer>
  );
}

export default MyForm;
