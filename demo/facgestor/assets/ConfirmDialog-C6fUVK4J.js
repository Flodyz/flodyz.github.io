import{af as e}from"./index-Dry_ZlGX.js";import{f as i}from"./react-vendor-DvhgqUJ4.js";import{q as y,T as p,b as w,aR as j,aQ as k}from"./ui-libs-BzjPzZjH.js";function $({isOpen:n,onClose:l,onConfirm:c,title:d,message:f,type:b="warning",confirmText:m="Confirmar",cancelText:u="Cancelar",isLoading:r=!1}){const a=i.useRef(null);if(i.useEffect(()=>{if(!n)return;a.current?.focus();const o=h=>{h.key==="Escape"&&!r&&l()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[n,r,l]),!n)return null;const t={danger:{icon:j,iconColor:"text-red-600",bgColor:"bg-red-50",borderColor:"border-red-200",buttonColor:"bg-red-600 hover:bg-red-700 focus:ring-red-500",titleColor:"text-red-900"},warning:{icon:w,iconColor:"text-yellow-600",bgColor:"bg-yellow-50",borderColor:"border-yellow-200",buttonColor:"bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",titleColor:"text-yellow-900"},info:{icon:p,iconColor:"text-blue-600",bgColor:"bg-blue-50",borderColor:"border-blue-200",buttonColor:"bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",titleColor:"text-blue-900"},success:{icon:y,iconColor:"text-green-600",bgColor:"bg-green-50",borderColor:"border-green-200",buttonColor:"bg-green-600 hover:bg-green-700 focus:ring-green-500",titleColor:"text-green-900"}}[b],g=t.icon,x=o=>{o.target===o.currentTarget&&!r&&l()},C=()=>{r||c()},s=()=>{r||l()};return e.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 animate-fadeIn",onClick:x,children:[e.jsxs("div",{role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-title","aria-describedby":"confirm-message",className:"bg-white rounded-lg shadow-2xl max-w-md w-full transform transition-all animate-scaleIn",onClick:o=>o.stopPropagation(),children:[e.jsxs("div",{className:`flex items-start gap-4 p-6 border-b ${t.borderColor}`,children:[e.jsx("div",{className:`flex-shrink-0 w-12 h-12 rounded-full ${t.bgColor} flex items-center justify-center`,children:e.jsx(g,{className:`w-6 h-6 ${t.iconColor}`,"aria-hidden":"true"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{id:"confirm-title",className:`text-lg font-semibold ${t.titleColor} mb-1`,children:d}),e.jsx("p",{id:"confirm-message",className:"text-sm text-gray-600 whitespace-pre-line",children:f})]}),!r&&e.jsx("button",{onClick:s,"aria-label":"Fechar",className:"flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx(k,{size:20,"aria-hidden":"true"})})]}),e.jsxs("div",{className:"flex gap-3 p-6 bg-gray-50",children:[e.jsx("button",{ref:a,onClick:s,disabled:r,className:"flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:u}),e.jsx("button",{onClick:C,disabled:r,className:`flex-1 px-4 py-2.5 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${t.buttonColor}`,children:r?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsxs("svg",{className:"animate-spin h-4 w-4",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processando..."]}):m})]})]}),e.jsx("style",{children:`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `})]})}export{$ as C};
