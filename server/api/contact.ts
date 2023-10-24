import { Resend } from "resend";

const resend = new Resend("re_7xThogCE_PrBs9d9XV1j7QHezwoHwtp67");

export default defineEventHandler(async (event) => {
  try {
    const { email, nombre, mensaje } = await readBody(event);
    let html = `<p>Se ha enviado un nuevo contacto a través de la web</p>`;
    html += `<p><strong>Nombre:</strong> ${nombre}</p>`;
    html += `<p><strong>E-mail:</strong> ${email}</p>`;
    html += `<p><strong>Mensaje:</strong> ${mensaje}</p>`;
    const data = await resend.emails.send({
      from: "Contacto Guatappé <guatappe@guatappe.com>",
      to: "guatappe@gmail.com",
      subject: "Nuevo contacto a través de la web",
      html: html,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
