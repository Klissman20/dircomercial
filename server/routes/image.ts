//import { createReadStream } from "node:fs";
//import path from "path";
//import { sendStream } from "h3";

import fs from 'fs';
import path from 'path';

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
    return buffer;
  } catch (_) {}
  // const logo: any = await $fetch(`https://sbnpljpwdvevewdhzkwv.supabase.co/storage/v1/object/public/images/logo-guatape.png`, {
  //   method: "GET",
  // });
  // const arrayBuffer1 = await logo.arrayBuffer();
  // return Buffer.from(arrayBuffer1, "base64");
  fs.readdirSync(process.cwd()).forEach(file => {
    console.log(file);
  });
  let logoPath = path.join(process.cwd(), './static/logompio.png');
  console.log(logoPath)
  let logo = fs.readFileSync(logoPath);
  return logo;
});
