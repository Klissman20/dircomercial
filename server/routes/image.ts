const runtimeConfig = useRuntimeConfig()
export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const url = `https://sbnpljpwdvevewdhzkwv.supabase.co/storage/v1/object/public/images/${id}.jpg`;

  try {
    const blob: any = await $fetch(url, {
      method: "GET",
    });
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer, "base64");
    return buffer;
  } catch (_) {}
  try {
    const blob: any = await $fetch('https://dircomercial.vercel.app/logompio.png', {
      method: "GET",
    });
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer, "base64");
    return buffer;
  } catch (_) {}

  return null;
});
