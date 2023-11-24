import { Button, TextField, Container, Typography, Grid } from "@mui/material";
import { useState, useEffect, ChangeEvent, use } from "react";
import { storage } from "../../firebase/config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Image from "next/image";
import Navbar from "../../components/navbar";
import { useHouseQueryQuery } from "../../generated/graphql";
import { Router, useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  // console.log(router.query.propertyId);
  const [imageList, setImageList] = useState<string[]>([]);
  const imageListRef = ref(storage, "images/");
  const propertyData = useHouseQueryQuery({ variables: { propertyId: router.query.propertyId!.toString() } });
  
  const uploadImage = (image: File) => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, [imageListRef]);

  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Property Detail
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              value={propertyData.data?.property.description}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              value={propertyData.data?.property.price}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    uploadImage(e.target.files[0]);
                  }
                }}
                hidden
              />
            </Button>
          </Grid>
          {imageList.map((url, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Image
                width={300}
                height={200}
                src={url}
                alt={`property-${index}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>

  );
};

export default PropertyDetail;