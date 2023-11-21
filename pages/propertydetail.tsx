import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Image from "next/image";

export const Propertydetail = () => {

    const [imageUpload, setImageUpload] = useState<File | null>(null);
    const [imageList, setImageList] = useState<string[]>([]);
    const imageListRef = ref(storage, "images/");

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
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
    }, []);

    return (
        <>
            <Button
                variant="contained"
                component="label"
                onClick={uploadImage}
            >
                Upload File
                <input
                    type="file"
                    onChange={(e) => {
                        if (e.target.files) {
                            setImageUpload(e.target.files[0]);
                        }
                    }}
                    hidden
                />
            </Button>
            {imageList.map((url, index) => {
                return <Image width={300} height={200} key={index} src={url} alt="property" />;
            })}
        </>
    );
};
export default Propertydetail;
