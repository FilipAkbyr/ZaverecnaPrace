import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { House } from '../generated/graphql';

const PropertyList = () => {
  const [properties, setProperties] = useState<House[]>([]);

  useEffect(() => {
    const getProperties = async () => {
      const propertiesRef = collection(db, 'properties');
      const querySnapshot = await getDocs(propertiesRef);
      const docs = querySnapshot.docs.map(doc => doc.data() as House);
      setProperties(docs);
    };
    getProperties();
  }, []);

  return (
    <>
      {properties.map(property => (
        <Card key={property.id}>
          <CardContent>
            <Typography variant="h5">Description: {property.description}</Typography>
            <Typography variant="body1">ID: {property.id}</Typography>
            <Typography variant="body1">Price: {property.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default PropertyList;

