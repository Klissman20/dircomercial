import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_7xThogCE_PrBs9d9XV1j7QHezwoHwtp67');

export default defineEventHandler(async (event) => {
  console.log(await readBody(event));
  try {
    const { email } = await readBody(event);
    const data = await resend.emails.send({
      from: 'Guatappé <guatappe@guatappe.com>',
      to: [email],
      subject: "Hello world",
      html: "<strong>It works!</strong>",
    });

    return data;
  } catch (error) {
    return { error };
  }
});
