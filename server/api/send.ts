import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_7xThogCE_PrBs9d9XV1j7QHezwoHwtp67");

export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event);
    const { token } = await readBody(event);
    let html = `<p>Utiliza este token para acceder a la aplicacion</p>`;
    html += `<code>${token}</code>`;
    html += `<p>Copia y pega en el sitio web con el correo electronico</p>`;
    html += `<a href="https://dircomercial.vercel.app/comercio">dircomercial.vercel.app/comercio</a>`;
    const data = await resend.emails.send({
      from: "Guatappé <guatappe@guatappe.com>",
      to: email,
      subject: "Token de acceso - Guatappe",
      html: html,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
