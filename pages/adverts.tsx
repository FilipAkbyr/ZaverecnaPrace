import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../server/firebase-admin-config';


const db = firestore();

async function fetchDataFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "properties"));
    const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    return [];
  }
}


const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchDataFromFirestore().then(data => setProperties(data));
  }, []);

  return (
      {properties.map(property => (
        <Card key={property.id}>
          <CardContent>
            <Typography variant="h5">Description: {property.description}</Typography>
            <Typography variant="body1">ID: {property.id}</Typography>
            <Typography variant="body1">Price: {property.price}</Typography>
          </CardContent>
        </Card>
      ))}
  );
};

export default PropertyList;
