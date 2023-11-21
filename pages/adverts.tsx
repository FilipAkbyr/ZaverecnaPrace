import React, { useState, useEffect } from 'react';
import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import { House, useHouseQueryQuery } from '../generated/graphql';
import Navbar from '../components/navbar';

const PropertyList = () => {
  
  const [properties, setProperties] = useState<House[]>([]);
  const {data, loading} = useHouseQueryQuery();
  const idk = data?.property;

  useEffect(() => {
      if (!loading)
        setProperties(data?.property as House[]);
  }, [data?.property, loading]);
  

  return (
    <>
      <Navbar></Navbar>
      {loading ? (
        <Skeleton
          animation="wave"
          height={10}
          width="40%"
        />
      ) : (
        properties.map(property => (
          <Card key={property.id}>
            <CardContent>
              <Typography variant="h5">Description: {property.description}</Typography>
              <Typography variant="body1">ID: {property.id}</Typography>
              <Typography variant="body1">Price: {property.price}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
};

export default PropertyList;

