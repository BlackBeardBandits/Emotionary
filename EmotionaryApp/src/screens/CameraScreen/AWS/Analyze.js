import AWS from "aws-sdk";
import { key } from "../../../../amplify/key";
export const Analyze = (e, setNewData) => {
  const bucket = key.bucket; // the bucketname without s3://
  const client = new AWS.Rekognition();
  const params = {
    Image: {
      S3Object: {
        Bucket: bucket,
        Name: `${e.uri}`,
      },
    },
    Attributes: ["ALL"],
  };
  client.detectFaces(params, (err, response) => {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      response.FaceDetails.forEach((data) => {
        console.log("분석완료");
        setNewData(data);
      });
    }
  });
};
