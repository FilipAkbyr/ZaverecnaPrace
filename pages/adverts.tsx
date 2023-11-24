import React, { useState, useEffect } from 'react';
import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import { House, useHouseQueryQuery, useHousesQueryQuery } from '../generated/graphql';
import Navbar from '../components/navbar';
import Link from 'next/link';

const PropertyList = () => {
  
  const [properties, setProperties] = useState<House[]>([]);
  const {data, loading} = useHousesQueryQuery();

  useEffect(() => {
      if (!loading)
        setProperties(data?.properties as House[]);
  }, [data?.properties, loading]);
  
  console.log(properties);

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
              <Link href={{pathname: "propertydetail/[id]", query: {propertyId: property.id}}} as={`propertydetail/${property.id}`}>
              <Typography variant="h5">Description: {property.description}</Typography>
              </Link>
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

