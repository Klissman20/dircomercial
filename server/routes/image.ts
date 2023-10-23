import { createReadStream } from "node:fs";
//import path from "path";
import { sendStream } from "h3";
export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const url = `https://sbnpljpwdvevewdhzkwv.supabase.co/storage/v1/object/public/images/${id}.jpg`;
  //const file = path.join("data", "./logo-guatape.png");
  //let buffer = readFileSync(file);
  try {
    const blob: any = await $fetch(url, {
      method: "GET",
    });
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer, "base64");
  } catch (_) {}
  return sendStream(event, createReadStream("./data/logo-guatape.png"));
});
