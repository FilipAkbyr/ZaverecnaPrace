import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAddHouseMutationMutation } from '../generated/graphql';
import { Container, TextField, Button } from '@mui/material';


const DynamicPropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<{ propertyId: string, propertyName: string; propertyValue: string }>({
    propertyId: '',
    propertyName: '',
    propertyValue: '',
  });

  const [addProperty] = useAddHouseMutationMutation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const newProperty = {
        id: formData.propertyId, 
        description: formData.propertyName,
        price: parseInt(formData.propertyValue), 
        ...formData,
      };

      await addProperty({
        variables: newProperty,
      });

      console.log('Property added successfully.');
    } catch (error) {
      console.error('Mutation error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ textAlign: 'center' }}>Dynamic Property Addition</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="propertyId"
          name="propertyId"
          label="Property ID"
          value={formData.propertyId}
          onChange={handleInputChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          id="propertyName"
          name="propertyName"
          label="Property Name"
          value={formData.propertyName}
          onChange={handleInputChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          id="propertyValue"
          name="propertyValue"
          label="Property Value"
          value={formData.propertyValue}
          onChange={handleInputChange}
          required
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: 20 }}
        >
          Add Property
        </Button>
      </form>
    </Container>
  );
};

export default DynamicPropertyForm;
