import fs from "fs";
export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const url = `https://sbnpljpwdvevewdhzkwv.supabase.co/storage/v1/object/public/images/${id}.jpg`;
  let buffer = fs.readFileSync("./static/logo-guatape.png");
  try {
    const blob: any = await $fetch(url, {
      method: "GET",
    });
    const arrayBuffer = await blob.arrayBuffer();
    buffer = Buffer.from(arrayBuffer, "base64");
  } catch (_) {}
  return buffer;
});
