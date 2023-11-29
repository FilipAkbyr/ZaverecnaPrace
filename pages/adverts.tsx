import React, { useState, useEffect } from 'react';
import { Box, Button, Paper, Skeleton, Typography } from '@mui/material';
import { House, useHouseQueryQuery, useHousesQueryQuery } from '../generated/graphql';
import Navbar from '../components/navbar';
import Link from 'next/link';
import { Container } from '@mui/material';
import { BsFillPlusSquareFill } from 'react-icons/bs';


const PropertyList = () => {

  const [properties, setProperties] = useState<House[]>([]);
  const { data, loading } = useHousesQueryQuery();

  useEffect(() => {
    if (!loading)
      setProperties(data?.properties as House[]);
  }, [data?.properties, loading]);

  console.log(properties);

  return (
    <>
      <Navbar></Navbar>
      <Button
          variant="contained"
          href="propertyadd"
          sx={{
            position: 'relative',
            display: 'inline',
            justifyContent: 'flex-end',
          }}
        >
          <BsFillPlusSquareFill> </BsFillPlusSquareFill>
        </Button>
      <Container  sx={{ display: "flex"  }}>
      {loading ? (
        <Skeleton
          animation="wave"
          height={10}
          width="40%"
        />
      ) : (
        properties.map(property => (
          <Paper key={property.id} sx={{ maxWidth: 300, height: 200, margin: 2 }}>
              <Box>
              <Link href={{ pathname: "propertydetail/[id]", query: { id: property.id } }} as={`propertydetail/${property.id}`}>
                <Typography variant="h5" component="div" gutterBottom>
                  Description: {property.description}
                </Typography>
              </Link>
              </Box>
              <Box>
              <Typography variant="body1" color="text.secondary">
                Price: {property.price} Kč
              </Typography>
              </Box>
          </Paper>
        ))
      )}
      </Container >
    </>
  );
};

export default PropertyList;

