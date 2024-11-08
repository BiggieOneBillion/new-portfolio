import { cn } from "@/lib/utils";

export const Container = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
      `,
          className
        )}
      >
        {children}
      </div>
    );
  };

  export const ReactLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 3.154c-2.513 0-4.812.626-6.677 1.702C4.294 6.82 2.92 8.974 2.92 11.463c0 3.264 3.433 7.14 6.69 10.397 3.256 3.257 7.132 6.69 10.397 6.69 2.488 0 4.643-1.374 6.607-3.402A12.963 12.963 0 0 0 24.846 14C24.846 8.685 20.315 3.154 14 3.154Z"
          fill="#61DAFB"
        />
        <circle cx="14" cy="14" r="3.5" fill="#61DAFB" />
      </svg>
    );
  };

  export const JavaScriptLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" fill="#F7DF1E" />
        <path
          d="M8.54 23.08h2.21c.11 1.03.89 1.75 1.98 1.75.89 0 1.44-.45 1.44-1.07 0-.75-.6-1.03-1.6-1.47l-.55-.24c-1.58-.67-2.64-1.51-2.64-3.28 0-1.63 1.24-2.87 3.16-2.87 1.73 0 3 1.04 3.14 2.58h-2.19c-.16-.8-.65-1.3-1.4-1.3-.63 0-1.3.43-1.3 1.03 0 .72.5.99 1.59 1.44l.55.24c1.88.8 2.92 1.58 2.92 3.42 0 1.96-1.47 2.99-3.46 2.99-1.95 0-3.2-1.04-3.55-2.5zm10.1 0h2.2c.22 1.14 1.24 1.76 2.41 1.76 1.04 0 1.82-.53 1.82-1.28 0-.89-.7-1.2-1.8-1.64l-.63-.28c-1.82-.78-2.94-1.72-2.94-3.5 0-1.96 1.5-3.22 3.66-3.22 2.1 0 3.46 1.07 3.74 2.67h-2.22c-.25-.85-.8-1.3-1.52-1.3-.72 0-1.2.5-1.2 1.07 0 .75.47 1.06 1.55 1.5l.64.28c1.94.86 3.02 1.73 3.02 3.66 0 2.05-1.62 3.32-3.8 3.32-2.2 0-3.62-1.1-3.91-2.68z"
          fill="#000"
        />
      </svg>
    );
  };

  export const TypeScriptLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" fill="#007ACC" />
        <path
          d="M11.085 22.045v-3.636h1.45v2.67h4.475v.966h-5.925Zm-6.252-5.555H3.747v-1.45H6.57v6.091H8.02v1.566H6.57v1.45H3.747v-1.45h2.83v-6.091Zm13.32-2.567c-.612.012-1.104.285-1.476.82-.371.534-.557 1.287-.557 2.26v.508h1.428v-.533c0-.533.05-.94.15-1.22.1-.279.277-.418.532-.418.29 0 .486.107.589.32.104.213.157.578.157 1.095 0 .557-.056.983-.167 1.276-.11.293-.277.44-.503.44-.316 0-.56-.14-.734-.418-.173-.279-.26-.68-.26-1.203v-.584h-1.417v.532c0 .973.186 1.726.557 2.26.37.534.871.8 1.503.8.557 0 1.013-.172 1.37-.514.358-.343.55-.81.575-1.4v-4.698h-1.428Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  };

  export const NestJSLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.38 2.502c-.802 0-1.6.122-2.373.378C7.6 4.354 4.376 9.307 3.24 13.853c-1.152 4.667 1.318 8.757 4.05 10.698 4.552 3.37 10.327 1.704 13.68-1.918 2.617-2.7 3.75-6.258 3.033-10.164-.52-3.034-2.022-6.04-5.62-8.273-1.91-1.203-3.633-1.8-5.003-1.8Zm4.476 3.524c1.244.625 2.383 1.267 3.42 2.04.03.024.06.047.092.07l.005.005a.17.17 0 0 1-.11.12c-1.3.358-3.123 1.16-4.315 1.955a.098.098 0 0 1-.12 0 .107.107 0 0 1 0-.14c.307-.468.517-.995.642-1.568.112-.525.19-1.065.364-1.54l.022-.06ZM8.586 18.62c.618-.51 1.18-1.042 1.684-1.61.5-.558.92-1.155 1.34-1.745.146-.2.322-.425.52-.655a10.5 10.5 0 0 0 1.242-1.48c1.09-1.8 1.72-4.043 1.43-6.132-.07-.64-.213-1.257-.46-1.83a8.37 8.37 0 0 0-3.212 4.488c-.273 1.007-.4 2.063-.54 3.083-.123.973-.32 1.948-.59 2.907-.352 1.27-1.23 2.455-1.415 3.684-.07.455-.11.912-.123 1.368-.047.197.027.493.234.62z"
          fill="#E0234E"
        />
      </svg>
    );
  };

  export const GitHubLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 .5a13.5 13.5 0 0 0-4.27 26.32c.68.12.93-.3.93-.66v-2.4c-3.8.83-4.6-1.84-4.6-1.84-.62-1.58-1.52-2-1.52-2-1.23-.84.1-.82.1-.82 1.36.1 2.08 1.4 2.08 1.4 1.21 2.07 3.17 1.47 3.95 1.12.12-.88.47-1.47.85-1.8-3.03-.34-6.2-1.5-6.2-6.67 0-1.47.52-2.66 1.38-3.6-.14-.34-.6-1.7.13-3.53 0 0 1.13-.36 3.7 1.38a12.8 12.8 0 0 1 6.72 0c2.57-1.74 3.7-1.38 3.7-1.38.74 1.83.27 3.19.14 3.53.86.94 1.38 2.13 1.38 3.6 0 5.18-3.18 6.32-6.2 6.66.48.4.91 1.19.91 2.4v3.55c0 .37.25.8.94.66A13.5 13.5 0 0 0 14 .5z"
          fill="#181717"
        />
      </svg>
    );
  };

  export const DockerLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5 13c-.4 0-.8.06-1.17.15a6.5 6.5 0 0 0-1.13-1.56c-.42-.43-1.02-.76-1.62-.84-.62-.08-1.4 0-2.08.38.42-.5.82-1.02 1.1-1.56.4-.76.62-1.7.6-2.7-.07-1.56-.78-3.02-2.2-4.34C16.07.5 13.82-.1 11.37.2a9 9 0 0 0-7.26 4.16c-.54.92-1.07 1.94-1.56 3.14-.42.6-.9 1.23-1.46 1.8l-.52.53c-.5.42-1.07.85-1.65 1.23v.02c-.08 0-.14.06-.22.14v.03c-.5.4-.92.83-1.3 1.34v.03c-.56.63-.85 1.33-1.1 2.06-.26.7-.38 1.4-.52 2.12a2.75 2.75 0 0 0-.26 2.16c.2.5.45.88.76 1.14.4.3.86.53 1.38.68a5.63 5.63 0 0 0 1.82.16c.6 0 1.18-.06 1.76-.2a5.26 5.26 0 0 0 3.44-1.7c1.62-1.58 2.68-3.3 4.2-5.1a16.4 16.4 0 0 0 3.68-6.4h4.64c.18 0 .36-.02.54-.04.56-.06 1.06-.4 1.3-.9v-.02a2.05 2.05 0 0 0-.18-2.04l-.24-.4-.08-.1h.08a4.35 4.35 0 0 0 .8-1.88v-.02c.04-.18-.04-.32-.14-.42h.02a4.5 4.5 0 0 0-1.2-1.2zM5.5 4h6.5v6H5.5V4zm-3.5 9h2v5H2v-5zm0-5h1.5v3H2V8zm4-3h1.5v4H6V5zm4 2h2v3h-2V7zm3-3h1.5v4H13V4zm-3 2h1.5v4H10V6zm-3.5 5h2v4H6.5v-4zm2.5 3h1v1H8v-1zm-2 1h1v1H6v-1z"
          fill="#2496ED"
        />
      </svg>
    );
  };
  export const JavaLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1 0c-.6 1-1.2 2-1.2 3.3v3.3c1.5-2.1 3.3-2.8 5.7-1.7-.7-1.5-1.3-3.1-2.6-4.2a5.8 5.8 0 0 0-1.9-.7zm3.5 6.3c-2.5 0-4.8 1.1-6.4 2.8-.7.7-1.3 1.4-1.8 2.3a5.6 5.6 0 0 0-.8 2.5c-.4-.4-.8-.8-1.4-1-1-.5-2-.7-3.3-.7-.6 0-1.2.1-1.7.3-.5.2-1.1.4-1.4.9a5.5 5.5 0 0 0-.8 2.2 5.7 5.7 0 0 0 2.7 4.9 5.4 5.4 0 0 0 2.9 1c1.7 0 3.4-.6 4.7-1.9l4.7-4.7c1.5-1.5 1.5-3.5 0-4.9zm-6.1 5.5-5.6 5.6c-1.4 1.4-3.3 1.4-4.9 0-1.5-1.5-1.5-3.5 0-4.9l5.6-5.6c1.4-1.4 3.5-1.4 4.9 0s1.5 3.5 0 4.9z"
          fill="#007396"
        />
      </svg>
    );
  };

  export const CSharpLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 0a14 14 0 1 0 0 28A14 14 0 0 0 14 0zM10.5 10h1v2h2v-2h1v6h-1v-3h-2v3h-1v-6zm7.3 1.5H17v-1h-.7v1h-.6v1h.6v.6h.7v-.6h1v1.5h-1v1h-.6v-.5h-1v-.5h-1v-3h1v-1.5h1v1h.6v1zm-1.1 4h-.8v1.2h1.2v-1.2h-1zm1.5 2h-.6v1h-.6v1h-.5v1h1.1v-1h-.6v-.4h.8v1.1h-.2v1h.4V17z"
          fill="#68217A"
        />
      </svg>
    );
  };

  export const DotNetLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 .5A13.5 13.5 0 1 0 27.5 14 13.5 13.5 0 0 0 14 .5zm-2.5 18V9.5h2.1l3.1 5.7h.1V9.5h1.7v9H16l-3.1-5.7h-.1V18.5H11.5z"
          fill="#512BD4"
        />
      </svg>
    );
  };

  export const SpringBootLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 1.6c-6.8 0-12.3 5.5-12.3 12.3 0 6.8 5.5 12.3 12.3 12.3 6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.3-12.3-12.3zm4.5 13.7c.6 0 1.1-.2 1.4-.6.3-.4.5-1.1.3-1.7L17 8.7a1.4 1.4 0 0 0-1.2-.8H12a1.4 1.4 0 0 0-1.2.8l-2.7 4.4c-.2.6-.1 1.3.3 1.7.3.4.8.6 1.4.6h7.7zM14 11.1c.6 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"
          fill="#6DB33F"
        />
      </svg>
    );
  };

  export const FlutterLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 16 15 9l-4-4L4 12l4 4zm0 0 8 8 4-4-8-8zm8 0 8 8-4 4-8-8 4-4z"
          fill="#02569B"
        />
      </svg>
    );
  };

  export const DartLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 .5a13.5 13.5 0 1 0 13.5 13.5A13.5 13.5 0 0 0 14 .5zm2 19.6-7-7-3 3 7 7a9.5 9.5 0 0 0 3-3zm5.6-5.6a9.5 9.5 0 0 0-9.5-9.5h-4.1l7 7 3.4-3.5 3.2 3.2zM10 7.1l5.7 5.7-3.4 3.4-7-7A9.5 9.5 0 0 1 10 7z"
          fill="#0175C2"
        />
      </svg>
    );
  };

  export const ReactNativeLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="10" fill="#61DAFB" />
        <path
          d="M17 9.2l-1.6 1.6 3.6 3.6-3.6 3.6 1.6 1.6 5.2-5.2-5.2-5.2zm-6 0L9.4 10.8 5.8 7.2 9.4 3.6l1.6 1.6-3.6 3.6z"
          fill="#fff"
        />
      </svg>
    );
  };

  export const HTMLLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 0H2C1.4 0 1 .4 1 1v26c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H14zm0 2h8v4h-8V2zm-4 4h-4v4h4V6zm0 6h-4v4h4v-4zm0 6h-4v4h4v-4zm8 0h-4v4h4v-4z"
          fill="#E34F26"
        />
      </svg>
    );
  };

  export const CSSLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        width="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 0h-2v2h2V0zm0 4h-2v2h2V4zm0 4h-2v2h2V8zm0 4h-2v2h2V12zm0 4h-2v2h2V16zm0 4h-2v2h2V20zm0 4h-2v2h2V24z"
          fill="#1572B6"
        />
      </svg>
    );
  };