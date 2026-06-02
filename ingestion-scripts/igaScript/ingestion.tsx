import axios from "axios";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({});

export const handler = async () => {
  const flyerResponse = await axios.get(
    process.env.FLYER_URL!
  );

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME!,
      Key: `flyers/${new Date().toISOString()}.json`,
      Body: JSON.stringify(flyerResponse.data),
      ContentType: "application/json",
    })
  );

  return {
    statusCode: 200,
  };
};