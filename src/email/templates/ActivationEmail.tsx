import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
  Button,
  Img,
} from '@react-email/components';

interface ActivationEmailProps {
  name: string;
  actionLink: string;
}

export const ActivationEmail = ({ name, actionLink }: ActivationEmailProps) => {
  return (
    <Html>
      <Head />
      {/* @ts-ignore */}
      <Preview>Activa tu cuenta en Cúspidea y accede a tu portal</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://rlldlnjuhbjjvgxotbbl.supabase.co/storage/v1/object/public/assets/cuspidea-sin-fondo.png"
            width="150"
            alt="Cúspidea Logo"
            style={logo}
          />
          <Heading style={h1}>¡Cita confirmada, {name}!</Heading>
          <Text style={text}>
            Nos alegra que hayas agendado con nosotros. Hemos creado un portal personalizado para ti donde podrás gestionar tus citas, ver tu historial clínico y revisar tus pagos.
          </Text>
          <Text style={text}>
            Para acceder, necesitas crear una contraseña segura haciendo clic en el siguiente botón:
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={actionLink}>
              Activar mi cuenta y crear contraseña
            </Button>
          </Section>
          <Text style={text}>
            Si el botón no funciona, también puedes copiar y pegar este enlace en tu navegador:
            <br />
            <a href={actionLink} style={link}>{actionLink}</a>
          </Text>
          <Text style={footer}>
            El equipo de Cúspidea
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  maxWidth: '600px',
};

const logo = {
  margin: '0 auto 20px',
  display: 'block',
};

const h1 = {
  color: '#1a202c',
  fontSize: '24px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '0 0 20px',
};

const text = {
  color: '#4a5568',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const btnContainer = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const button = {
  backgroundColor: '#0F172A',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  borderRadius: '4px',
};

const link = {
  color: '#3182ce',
  textDecoration: 'underline',
};

const footer = {
  color: '#a0aec0',
  fontSize: '14px',
  marginTop: '30px',
  textAlign: 'center' as const,
};
