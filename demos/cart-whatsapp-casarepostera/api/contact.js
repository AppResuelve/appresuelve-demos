import Sib from '@getbrevo/brevo'
import escapeHtml from 'escape-html'

const apiKey = process.env.BREVO_API_KEY

function generateEmailHTML(data) {
  const { name, email, phone, message, businessName, metadata } = data

  const sanitizedMessage = escapeHtml(message)
  const sanitizedName = escapeHtml(name)
  const sanitizedPhone = escapeHtml(phone || 'No proporcionado')

  const metaRows = metadata
    ? `
          <tr>
            <td style="padding: 20px; border-bottom: 1px solid #262626;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #06b6d4;">IP</p>
              <p style="margin: 0; font-size: 14px; color: #a3a3a3;">${escapeHtml(metadata.ip || 'No disponible')}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #06b6d4;">User Agent</p>
              <p style="margin: 0; font-size: 14px; color: #a3a3a3; word-break: break-all;">${escapeHtml(metadata.userAgent || 'No disponible')}</p>
            </td>
          </tr>
`
      : ''

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo contacto desde ${escapeHtml(businessName || 'tu sitio web')}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    
    <tr>
      <td style="padding-bottom: 30px; border-bottom: 1px solid #262626;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #06b6d4;">
          Nuevo mensaje desde ${escapeHtml(businessName || 'tu sitio web')}
        </h1>
        <p style="margin: 8px 0 0 0; color: #a3a3a3; font-size: 14px;">
          Formulario de contacto del sitio web
        </p>
      </td>
    </tr>
    
    <tr>
      <td style="padding: 30px 0;">
        <div style="background: linear-gradient(135deg, rgba(6,182,212,0.1), rgba(37,99,235,0.1)); border: 1px solid rgba(6,182,212,0.2); border-radius: 16px; padding: 24px;">
          <p style="margin: 0; font-size: 18px; font-weight: 500; color: #ffffff;">
            "${sanitizedMessage}"
          </p>
        </div>
      </td>
    </tr>
    
    <tr>
      <td>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #111111; border: 1px solid #262626; border-radius: 16px; overflow: hidden;">
          
          <tr>
            <td style="padding: 20px; border-bottom: 1px solid #262626;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #06b6d4;">Nombre</p>
              <p style="margin: 0; font-size: 16px; font-weight: 500; color: #ffffff;">${sanitizedName}</p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 20px; border-bottom: 1px solid #262626;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #06b6d4;">Email</p>
              <p style="margin: 0; font-size: 16px; color: #a3a3a3;">
                <a href="mailto:${escapeHtml(email)}" style="color: #06b6d4; text-decoration: none;">${escapeHtml(email)}</a>
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 20px; border-bottom: 1px solid #262626;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #06b6d4;">Teléfono</p>
              <p style="margin: 0; font-size: 16px; color: #a3a3a3;">${sanitizedPhone}</p>
            </td>
          </tr>
          ${metaRows}
        </table>
      </td>
    </tr>
    
    <tr>
      <td style="padding-top: 30px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #525252;">
          Enviado desde ${escapeHtml(businessName || 'tu sitio web')} • Implementado con AppResuelve
        </p>
      </td>
    </tr>
    
  </table>
  
</body>
</html>
  `.trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método no permitido. Usá POST.',
    })
  }

  if (!apiKey) {
    console.error('BREVO_API_KEY no está configurada')
    return res.status(500).json({
      success: false,
      message: 'Error de configuración del servidor.',
    })
  }

  try {
    const { name, email, phone, message, businessName, receiveEmailsAt } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos requeridos: nombre, email y mensaje son obligatorios.',
      })
    }

    if (!receiveEmailsAt) {
      return res.status(400).json({
        success: false,
        message: 'Configuración de email no disponible.',
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'El email proporcionado no es válido.',
      })
    }

    const metadata = {
      ip: req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'No disponible',
      userAgent: req.headers['user-agent'] || 'No disponible',
    }

    const apiInstance = new Sib.TransactionalEmailsApi()
    apiInstance.setApiKey(Sib.TransactionalEmailsApiApiKeys.apiKey, apiKey)

    const sendSmtpEmail = {
      to: [{ email: receiveEmailsAt }],
      replyTo: { email, name },
      sender: {
        email: process.env.BREVO_SENDER || 'formularios@appresuelve.site',
        name: 'Formulario Web',
      },
      subject: `Nuevo contacto desde ${businessName || 'tu sitio web'}`,
      htmlContent: generateEmailHTML({ name, email, phone, message, businessName, metadata }),
    }

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail)

    console.log('Email enviado exitosamente:', result)

    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente.',
    })
  } catch (error) {
    console.error('Error al enviar email:', error)

    return res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Por favor intentá de nuevo.',
    })
  }
}
