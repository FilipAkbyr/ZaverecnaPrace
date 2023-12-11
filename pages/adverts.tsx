import React, { useState, useEffect } from 'react';
import { Button, Grid, Paper, Skeleton, Typography } from '@mui/material';
import { House, useHousesQueryQuery } from '../generated/graphql';
import Navbar from '../components/navbar';
import Link from 'next/link';
import { Container } from '@mui/material';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import DeleteIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { useDeleteHouseMutationMutation } from '../generated/graphql';


const PropertyList = () => {
  const [properties, setProperties] = useState<House[]>([]);
  const { data, loading } = useHousesQueryQuery();
  const [deleteHouseMutation] = useDeleteHouseMutationMutation();

  const handleDeleteClick = async (propertyId: string | null | undefined) => {
    if (!propertyId) return;
    try {
      await deleteHouseMutation({ variables: { propertyId: propertyId } });
      console.log('Mutation successful');
      setProperties(properties.filter(property => property.id !== propertyId));
      console.log(properties.filter(property => property.id !== propertyId));
    } catch (error) {
      console.error('Error in mutation:', error);
    }
  };

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
          position: "relative",
          marginTop: "20px",
          marginLeft: "auto",  
          backgroundColor: "#3562a6",
        }}
      >
        <BsFillPlusSquareFill> </BsFillPlusSquareFill>
      </Button>
      <Container>
        {loading ? (
          <Skeleton
            animation="wave"
            height={100}
            width="40%"
          />
        ) : (
          <Grid container spacing={2}>
            {
              properties?.map(property => (
                <Grid key={property.id} item xs={12} md={6} lg={4}>
                  <Paper>
                    <Container>
                      Description:
                      <Link style={{ textDecoration: "none" }} href={{ pathname: "propertydetail/[id]", query: { id: property.id } }} as={`propertydetail/${property.id}`}>
                        <Typography variant="h5" gutterBottom>
                          {property.description}
                        </Typography>
                      </Link>
                    </Container>
                    <Container>
                      <Typography variant="body1" color="text.secondary">
                        Price: {property.price} Kč
                      </Typography>
                    </Container>
                    <DeleteIcon sx={{ position: "relative", left: "90%" }} onClick={() => handleDeleteClick(property.id)}/>
                  </Paper>
                </Grid>
              ))
            }
          </Grid>
        )}
      </Container>
    </>
  );
};

export default PropertyList;

