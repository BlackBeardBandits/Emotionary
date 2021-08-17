import { RNS3 } from "react-native-s3-upload";
import { key } from "../../../../amplify/key";
export const handleFileInput = async (e) => {
  const file = {
    uri: e.uri,
    name: `${e.uri}`,
    type: "image/png",
  };
  const options = {
    bucket: key.bucket,
    region: key.region,
    accessKey: key.accessKeyId,
    secretKey: key.secretAccessKey,
    successActionStatus: 201,
  };
  await RNS3.put(file, options).then((response) => {
    if (response.status !== 201)
      throw new Error("Failed to upload image to S3");
    console.log("업로드 완료");
  });
};
