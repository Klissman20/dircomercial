import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_7xThogCE_PrBs9d9XV1j7QHezwoHwtp67");

export default defineEventHandler(async (event) => {
  try {
    const { email, token, comercio } = await readBody(event);
    let html = `<p>Utiliza este token para acceder a la aplicacion</p>`;
    let subject = `Token de acceso - `;
    html += `<code>${token}</code>`;
    html += `<p>Copia y pega en el sitio web con el correo electronico</p>`;
    if (comercio) {
      html += `<a target="_blank" href="https://dircomercial.vercel.app/comercio">dircomercial.vercel.app/comercio</a>`;
      subject += `Directorio Comercial Guatapé`;
    } else {
      html += `<a target="_blank" href="https://dircomercial.vercel.app">dircomercial.vercel.app</a>`;
      subject += `Talento Talento para la productividad guatapense`;
    }
    const data = await resend.emails.send({
      from: "Guatappé <guatappe@guatappe.com>",
      to: email,
      subject,
      html: html,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
