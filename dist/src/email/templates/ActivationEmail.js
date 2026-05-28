"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivationEmail = void 0;
const React = __importStar(require("react"));
const components_1 = require("@react-email/components");
const ActivationEmail = ({ name, actionLink }) => {
    return (React.createElement(components_1.Html, null,
        React.createElement(components_1.Head, null),
        React.createElement(components_1.Preview, null, "Activa tu cuenta en C\u00FAspidea y accede a tu portal"),
        React.createElement(components_1.Body, { style: main },
            React.createElement(components_1.Container, { style: container },
                React.createElement(components_1.Img, { src: "https://rlldlnjuhbjjvgxotbbl.supabase.co/storage/v1/object/public/assets/cuspidea-sin-fondo.png", width: "150", alt: "C\u00FAspidea Logo", style: logo }),
                React.createElement(components_1.Heading, { style: h1 },
                    "\u00A1Cita confirmada, ",
                    name,
                    "!"),
                React.createElement(components_1.Text, { style: text }, "Nos alegra que hayas agendado con nosotros. Hemos creado un portal personalizado para ti donde podr\u00E1s gestionar tus citas, ver tu historial cl\u00EDnico y revisar tus pagos."),
                React.createElement(components_1.Text, { style: text }, "Para acceder, necesitas crear una contrase\u00F1a segura haciendo clic en el siguiente bot\u00F3n:"),
                React.createElement(components_1.Section, { style: btnContainer },
                    React.createElement(components_1.Button, { style: button, href: actionLink }, "Activar mi cuenta y crear contrase\u00F1a")),
                React.createElement(components_1.Text, { style: text },
                    "Si el bot\u00F3n no funciona, tambi\u00E9n puedes copiar y pegar este enlace en tu navegador:",
                    React.createElement("br", null),
                    React.createElement("a", { href: actionLink, style: link }, actionLink)),
                React.createElement(components_1.Text, { style: footer }, "El equipo de C\u00FAspidea")))));
};
exports.ActivationEmail = ActivationEmail;
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
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
    textAlign: 'center',
    margin: '0 0 20px',
};
const text = {
    color: '#4a5568',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0 0 20px',
};
const btnContainer = {
    textAlign: 'center',
    margin: '30px 0',
};
const button = {
    backgroundColor: '#0F172A',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center',
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
    textAlign: 'center',
};
//# sourceMappingURL=ActivationEmail.js.map