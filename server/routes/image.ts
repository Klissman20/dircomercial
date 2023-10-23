import { readFileSync } from "fs";
import path from "path";
export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const url = `https://sbnpljpwdvevewdhzkwv.supabase.co/storage/v1/object/public/images/${id}.jpg`;
  const file = path.join(__dirname, "logo-guatape.png");
  let buffer = readFileSync(file);
  try {
    const blob: any = await $fetch(url, {
      method: "GET",
    });
    const arrayBuffer = await blob.arrayBuffer();
    buffer = Buffer.from(arrayBuffer, "base64");
  } catch (_) {}
  return buffer;
});
