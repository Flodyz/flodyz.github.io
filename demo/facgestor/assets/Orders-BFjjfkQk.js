const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shippingCompaniesService-DiYWaIE0.js","assets/index-Dry_ZlGX.js","assets/react-vendor-DvhgqUJ4.js","assets/ui-libs-BzjPzZjH.js","assets/form-libs-CAFo6B46.js","assets/recharts-Di_qk23Q.js","assets/index-BUunWNcq.css"])))=>i.map(i=>d[i]);
import{aB as Pe,aC as Ye,az as Nt,aD as g,al as wt,E as as,$ as rs,F as is,X as os,a3 as ns,aA as ls,ax as ds,I as ct,_ as cs,af as e,L as mt,O as ut,an as ms,a as P}from"./index-Dry_ZlGX.js";import{u as us,f as l}from"./react-vendor-DvhgqUJ4.js";import{h as xs,g as Pt,c as ps,f as we,s as W,b as gs,e as xt}from"./form-libs-CAFo6B46.js";import{f as X,l as ne}from"./index-wRQOfKyA.js";import{F as hs}from"./FormModal-Df8Oqwaj.js";import{M as bs}from"./Modal-DXPTilff.js";import{r as ie}from"./resellerAdminService-BtQHX-qD.js";import{c as fs,b as ys,C as vs}from"./useImport-UtK7RhP3.js";import{aJ as js,ag as pt,aw as Ns,az as gt,ar as ht,o as ws,aQ as je,aK as Ps,E as bt,an as Cs,I as ft,ab as Is,ak as yt,a5 as Ne,p as Es,aI as Ue,a7 as Ss,i as As,t as Ds,u as Rs,a as ks,aR as ke,q as oe,w as vt}from"./ui-libs-BzjPzZjH.js";import"./recharts-Di_qk23Q.js";const $s=({order:r,getProductName:j,getCustomerName:p,formatItemQuantity:B,getStatusInfo:M,shippingCompanies:m,companyInfo:F,customerData:E})=>{const h=document.createElement("iframe");h.style.position="absolute",h.style.width="0",h.style.height="0",h.style.border="none",document.body.appendChild(h);const f=h.contentWindow?.document;if(!f)throw document.body.removeChild(h),new Error("Não foi possível criar área de impressão");const C=r.customer?.name||p(r.customerId),R=r.orderDate?(()=>{const x=r.orderDate.toString(),[S,o,de]=x.split("T")[0].split("-");return`${de}/${o}/${S}`})():"N/A",J=r.shippingCompanyId?m.find(x=>x.id===r.shippingCompanyId):null,u=r.items.map((x,S)=>`
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: 600; color: #6b7280;">${S+1}</td>
      <td style="padding: 8px; border: 1px solid #ddd;">${j(x.productId)}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${B(x)}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">R$ ${x.unitPrice.toFixed(2)}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">R$ ${x.subtotal.toFixed(2)}</td>
    </tr>
  `).join(""),d=r.items.reduce((x,S)=>x+S.subtotal,0),y=r.freightCustomerAmount??r.freight??0,G=d-r.discount+y,k=M(r.status),le=Ms(k.color),Z=Fs(k.color),H=F||{name:"Minha Empresa",cnpj:"00.000.000/0001-00"},Ce=`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Pedido ${r.orderNumber} - ${H.name}</title>
        <style>
          @media print {
            body { 
              margin: 0; 
              padding: 15px; 
            }
            .no-print { 
              display: none; 
            }
            @page { 
              margin: 1.5cm;
              size: A4;
            }
            /* Evitar quebras de página desnecessárias */
            .section {
              page-break-inside: avoid;
            }
            table {
              page-break-inside: auto;
            }
            tr {
              page-break-inside: avoid;
              page-break-after: auto;
            }
            /* Evitar página vazia no final */
            body::after {
              content: none;
            }
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            max-width: 800px;
            margin: 0 auto;
            padding: 30px 20px;
            background: #fff;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header-left {
            flex: 1;
          }
          .logo {
            width: 180px;
            height: auto;
            margin-bottom: 8px;
          }
          .company-name {
            font-size: 16px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 2px;
          }
          .company-cnpj {
            font-size: 12px;
            color: #6b7280;
            margin-bottom: 4px;
          }
          .customer-info-box {
            background: #f9fafb;
            padding: 12px 16px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
            margin-bottom: 20px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .customer-info-item {
            font-size: 12px;
            text-align: center;
          }
          .customer-info-item .label {
            font-weight: 600;
            color: #6b7280;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
          }
          .customer-info-item .value {
            color: #111827;
            font-weight: 500;
          }
          .header-right {
            text-align: right;
          }
          .order-number {
            font-size: 24px;
            font-weight: bold;
            color: #111827;
            margin-bottom: 8px;
          }
          .order-id {
            font-size: 12px;
            color: #6b7280;
            font-family: 'Courier New', monospace;
            margin-bottom: 12px;
          }
          .status-badge {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .section {
            margin-bottom: 28px;
          }
          .section-title {
            font-size: 15px;
            font-weight: 700;
            color: #2563eb;
            margin-bottom: 14px;
            padding-bottom: 6px;
            border-bottom: 2px solid #e5e7eb;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            background: #f9fafb;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
          }
          .info-item {
            padding: 4px 0;
          }
          .info-label {
            font-weight: 600;
            color: #6b7280;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
          }
          .info-value {
            font-size: 14px;
            color: #111827;
            font-weight: 500;
          }
          .address-box {
            background: #f9fafb;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            font-size: 14px;
            line-height: 1.7;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            margin-top: 10px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
          }
          thead {
            background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
          }
          th {
            padding: 12px 10px;
            text-align: left;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #374151;
            border-bottom: 2px solid #e5e7eb;
          }
          tbody tr {
            border-bottom: 1px solid #f3f4f6;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          tbody tr:hover {
            background: #f9fafb;
          }
          td {
            padding: 12px 10px;
            font-size: 13px;
            color: #374151;
          }
          .totals {
            margin-top: 16px;
            padding: 12px 16px;
            background: #f9fafb;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
          }
          .totals-row {
            display: flex;
            justify-content: flex-end;
            padding: 4px 0;
            font-size: 12px;
          }
          .totals-label {
            width: 100px;
            text-align: right;
            padding-right: 16px;
            color: #6b7280;
            font-weight: 500;
          }
          .totals-value {
            width: 100px;
            text-align: right;
            font-weight: 600;
            color: #111827;
          }
          .total-final {
            border-top: 2px solid #2563eb;
            margin-top: 8px;
            padding-top: 8px;
          }
          .total-final .totals-label {
            font-size: 14px;
            font-weight: 700;
            color: #111827;
          }
          .total-final .totals-value {
            font-size: 16px;
            color: #2563eb;
            font-weight: 700;
          }
          .notes-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 14px 16px;
            border-radius: 6px;
            font-size: 13px;
            line-height: 1.6;
            color: #92400e;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            font-size: 11px;
            color: #9ca3af;
          }
          .footer-divider {
            margin: 12px 0;
          }
          .footer strong {
            color: #6b7280;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-left">
            <img src="/demo/facgestor/logo-escura.png" alt="${H.name}" class="logo" />
            <div class="company-name">${H.name}</div>
            <div class="company-cnpj">CNPJ: ${H.cnpj}</div>
          </div>
          <div class="header-right">
            <div class="order-number">Pedido #${r.orderNumber}</div>
            <div class="order-id">ID: ${r.id.slice(0,8).toUpperCase()}</div>
            <span class="status-badge" style="background-color: ${le}; color: ${Z};">
              ${k.label}
            </span>
          </div>
        </div>

        <div class="customer-info-box">
          <div class="customer-info-item">
            <div class="label">Cliente</div>
            <div class="value">${C}</div>
          </div>
          ${E?.cnpj||E?.cpf?`
          <div class="customer-info-item">
            <div class="label">${E.cnpj?"CNPJ":"CPF"}</div>
            <div class="value">${E.cnpj||E.cpf}</div>
          </div>
          `:`
          <div class="customer-info-item">
            <div class="label">Data do Pedido</div>
            <div class="value">${R}</div>
          </div>
          `}
          <div class="customer-info-item">
            <div class="label">Transportadora</div>
            <div class="value">${J?.name||"Entrega própria"}</div>
          </div>
        </div>

        ${r.notes?`
        <div class="section">
          <div class="section-title">Observações</div>
          <div class="notes-box">${r.notes}</div>
        </div>
        `:""}

        <div class="section">
          <div class="section-title">Itens do Pedido</div>
          <table>
            <thead>
              <tr>
                <th style="width: 5%; text-align: center;">#</th>
                <th style="width: 40%;">Produto</th>
                <th style="text-align: center; width: 15%;">Quantidade</th>
                <th style="text-align: right; width: 20%;">Preço Unit.</th>
                <th style="text-align: right; width: 20%;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${u}
            </tbody>
          </table>
        </div>

        <div class="totals">
          <div class="totals-row">
            <div class="totals-label">Subtotal:</div>
            <div class="totals-value">R$ ${d.toFixed(2)}</div>
          </div>
          ${r.discount>0?`
          <div class="totals-row">
            <div class="totals-label">Desconto:</div>
            <div class="totals-value" style="color: #dc2626;">- R$ ${r.discount.toFixed(2)}</div>
          </div>
          `:""}
          ${y>0?`
          <div class="totals-row">
            <div class="totals-label">Frete:</div>
            <div class="totals-value">R$ ${y.toFixed(2)}</div>
          </div>
          `:""}
          <div class="totals-row total-final">
            <div class="totals-label">TOTAL</div>
            <div class="totals-value">R$ ${G.toFixed(2)}</div>
          </div>
        </div>

        <div class="footer">
          <p><strong>Documento gerado em:</strong> ${X(new Date,"dd/MM/yyyy 'às' HH:mm",{locale:ne})}</p>
          <div class="footer-divider">• • •</div>
          <p> FacGestor - Gestão Inteligente</p>
        </div>
      </body>
    </html>
  `;f.open(),f.write(Ce),f.close(),h.onload=()=>{setTimeout(()=>{const x=h.contentWindow;if(x){x.focus(),x.print();const S=()=>{try{document.body.contains(h)&&document.body.removeChild(h)}catch(o){console.error("Erro ao remover iframe:",o)}};x.addEventListener("afterprint",S),setTimeout(S,2e3)}},100)}},Os=({order:r,getProductName:j,getCustomerName:p,formatItemQuantity:B,companyInfo:M})=>{const m=document.createElement("iframe");m.style.position="absolute",m.style.width="0",m.style.height="0",m.style.border="none",document.body.appendChild(m);const F=m.contentWindow?.document;if(!F)throw document.body.removeChild(m),new Error("Não foi possível criar área de impressão");const E=r.customer?.name||p(r.customerId),h=r.deliveryDate?(()=>{const u=r.deliveryDate.toString(),[d,y,G]=u.split("T")[0].split("-");return`${G}/${y}/${d}`})():"N/A",f={};r.items.forEach(u=>{const d=u.productId,y=j(d),G=u.productBatch?.batchCode||"Sem lote",k=B(u);if(!f[d])f[d]={name:y,batches:[],totalQuantity:k};else{const le=parseFloat(f[d].totalQuantity),Z=parseFloat(k);f[d].totalQuantity=(le+Z).toString()}f[d].batches.push({batchCode:G,quantity:k})});const C=Object.values(f).map((u,d)=>`
    <tr>
      <td style="padding: 12px 8px; border: 1px solid #ddd; text-align: center; font-weight: 600; font-size: 14px;">${d+1}</td>
      <td style="padding: 12px 8px; border: 1px solid #ddd; font-size: 14px;">
        <strong>${u.name}</strong>
        ${u.batches.length>1?`<br/><span style="font-size: 12px; color: #6b7280;">📦 ${u.batches.length} lotes utilizados</span>`:""}
      </td>
      <td style="padding: 12px 8px; border: 1px solid #ddd; font-size: 13px;">
        ${u.batches.map(y=>`
          <div style="padding: 4px 0; border-bottom: 1px dashed #e5e7eb;">
            <span style="display: inline-block; background: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 4px; font-weight: 500;">
              🏷️ ${y.batchCode}
            </span>
            <span style="margin-left: 8px; color: #6b7280;">
              (${y.quantity})
            </span>
          </div>
        `).join("")}
      </td>
      <td style="padding: 12px 8px; border: 1px solid #ddd; text-align: center; font-weight: 600; font-size: 14px;">${u.totalQuantity}</td>
    </tr>
  `).join(""),R=M||{name:"Minha Empresa",cnpj:"00.000.000/0001-00"},J=`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Produção - Pedido #${r.orderNumber}</title>
        <style>
          @media print {
            @page {
              size: A4;
              margin: 10mm;
            }
            body {
              margin: 0;
              padding: 0;
            }
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: white;
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #2563eb;
          }
          
          .production-label {
            background: #fef3c7;
            color: #92400e;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 18px;
            display: inline-block;
            margin-bottom: 10px;
            border: 2px solid #fbbf24;
          }
          
          .order-number {
            font-size: 28px;
            font-weight: 700;
            color: #1e293b;
            margin: 10px 0;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .info-box {
            padding: 15px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
          }
          
          .info-label {
            font-size: 11px;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .info-value {
            font-size: 15px;
            color: #1e293b;
            font-weight: 600;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          
          th {
            background: #2563eb;
            color: white;
            padding: 12px 8px;
            text-align: left;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 600;
            border: 1px solid #1e40af;
          }
          
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e2e8f0;
            text-align: center;
          }
          
          .signature-box {
            display: inline-block;
            width: 300px;
            padding-top: 80px;
            border-top: 2px solid #334155;
            margin: 20px auto;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div style="font-size: 32px; font-weight: 700; color: #2563eb; margin-bottom: 5px;">
            📦 ${R.name}
          </div>
          <div style="font-size: 12px; color: #64748b; margin-bottom: 15px;">
            CNPJ: ${R.cnpj||"N/A"}
          </div>
          <div class="production-label">
            🏭 SEPARAÇÃO DE PRODUÇÃO
          </div>
          <div class="order-number">
            Pedido #${r.orderNumber}
          </div>
        </div>

        <div class="info-grid">
          <div class="info-box">
            <div class="info-label">Cliente</div>
            <div class="info-value">${E}</div>
          </div>
          
          <div class="info-box">
            <div class="info-label">Data de Entrega</div>
            <div class="info-value">${h}</div>
          </div>
        </div>

        ${r.address?`
        <div class="info-box" style="margin-bottom: 30px;">
          <div class="info-label">Endereço de Entrega</div>
          <div class="info-value">
            ${r.address.street}, ${r.address.number}${r.address.district?" - "+r.address.district:""}<br/>
            ${r.address.city}/${r.address.state} - CEP: ${r.address.zipCode}
          </div>
        </div>
        `:""}

        <div style="background: #eff6ff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 8px; margin-bottom: 20px;">
          <strong style="color: #1e40af;">📋 ITENS PARA SEPARAÇÃO</strong>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 40px; text-align: center;">#</th>
              <th style="width: 35%;">Produto</th>
              <th style="width: 45%;">Lotes Utilizados</th>
              <th style="width: 15%; text-align: center;">Qtd Total</th>
            </tr>
          </thead>
          <tbody>
            ${C}
          </tbody>
        </table>

        ${r.notes?`
        <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #fbbf24; border-radius: 8px; margin-top: 20px;">
          <strong style="color: #92400e;">📝 Observações:</strong>
          <div style="color: #78350f; margin-top: 5px;">${r.notes}</div>
        </div>
        `:""}

        <div class="footer">
    <div style="font-size: 10px; color: #94a3b8; margin-bottom: 20px;">
            Documento gerado em: ${new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}
          </div>
          
          <div class="signature-box">
            <strong style="font-size: 12px; color: #475569;">Responsável pela Separação</strong>
          </div>

          <div style="margin-top: 40px; padding: 15px; background: #f1f5f9; border-radius: 8px; border: 2px dashed #cbd5e1;">
            <div style="font-weight: 600; color: #334155; margin-bottom: 5px;">
              ✅ CONFERÊNCIA REALIZADA
            </div>
            <div style="display: flex; justify-content: space-around; margin-top: 15px;">
              <div style="flex: 1; text-align: center; padding: 10px;">
                <div style="width: 20px; height: 20px; border: 2px solid #64748b; border-radius: 4px; display: inline-block; margin-bottom: 5px;"></div>
                <div style="font-size: 11px; color: #475569;">Lotes Corretos</div>
              </div>
              <div style="flex: 1; text-align: center; padding: 10px;">
                <div style="width: 20px; height: 20px; border: 2px solid #64748b; border-radius: 4px; display: inline-block; margin-bottom: 5px;"></div>
                <div style="font-size: 11px; color: #475569;">Quantidades OK</div>
              </div>
              <div style="flex: 1; text-align: center; padding: 10px;">
                <div style="width: 20px; height: 20px; border: 2px solid #64748b; border-radius: 4px; display: inline-block; margin-bottom: 5px;"></div>
                <div style="font-size: 11px; color: #475569;">Embalagem OK</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;F.open(),F.write(J),F.close(),setTimeout(()=>{const u=m.contentWindow;if(u){u.print();const d=()=>{try{document.body.contains(m)&&document.body.removeChild(m)}catch(y){console.error("Erro ao remover iframe:",y)}};u.addEventListener("afterprint",d),setTimeout(d,2e3)}},500)},Ms=r=>r.includes("yellow")?"#fef3c7":r.includes("blue")?"#dbeafe":r.includes("purple")?"#f3e8ff":r.includes("green")?"#d1fae5":r.includes("indigo")?"#e0e7ff":r.includes("red")?"#fee2e2":"#f3f4f6",Fs=r=>r.includes("yellow")?"#92400e":r.includes("blue")?"#1e40af":r.includes("purple")?"#6b21a8":r.includes("green")?"#065f46":r.includes("indigo")?"#3730a3":r.includes("red")?"#991b1b":"#374151",q={all:["orders"],lists:()=>[...q.all,"list"],list:r=>[...q.lists(),r],resellers:()=>[...q.all,"resellers"],resellerList:r=>[...q.resellers(),r]};function Ls(r={}){return Pe({queryKey:q.list(r),queryFn:async()=>await as(),staleTime:120*1e3,gcTime:300*1e3})}function Ts(r){return Pe({queryKey:q.resellerList(r),queryFn:async()=>rs(),staleTime:120*1e3,gcTime:300*1e3})}function zs(){return Pe({queryKey:["customers","list","orders-ref"],queryFn:async()=>(await is({})).customers,staleTime:600*1e3,gcTime:900*1e3})}function qs(){return Pe({queryKey:["products","list","orders-ref"],queryFn:async()=>(await os()).products,staleTime:600*1e3,gcTime:900*1e3})}function Bs(){return Pe({queryKey:["shipping-companies","list","orders-ref"],queryFn:async()=>ns(),staleTime:600*1e3,gcTime:900*1e3})}function Vs(){const r=Ye();return Nt({mutationFn:async j=>wt(),onSuccess:()=>{r.invalidateQueries({queryKey:q.lists()})},onError:j=>{const p=j?.response?.data?.message||j?.message||"Erro ao criar pedido";g.error(p)}})}function Qs(){const r=Ye();return Nt({mutationFn:async({id:j,status:p})=>wt(),onSuccess:()=>{r.invalidateQueries({queryKey:q.lists()})},onError:j=>{const p=j?.response?.data?.message||j?.message||"Erro ao atualizar status";g.error(p)}})}function jt(r){if(!r)return"—";const p=(r instanceof Date?r.toISOString():r).split("T")[0].split("-");if(p.length!==3)return"—";const[B,M,m]=p;return`${m}/${M}/${B}`}function Gs(r){return r?(r instanceof Date?r.toISOString():r).split("T")[0]:""}const Hs=Pt({productId:W().min(1,"Produto é obrigatório"),quantity:we().min(1,"Quantidade deve ser maior que zero"),unitPrice:we().min(.01,"Preço deve ser maior que zero"),sellByPackage:ps().optional().default(!0)}),Us=Pt({customerId:W().min(1,"Cliente é obrigatório"),deliveryMethod:xt(["DELIVERY","PICKUP"],{errorMap:()=>({message:"Método de entrega é obrigatório"})}),customerAddressId:W().optional(),shippingCompanyId:W().optional(),paymentMethod:xt(["CASH","CARD","PIX","BANK_SLIP"],{errorMap:()=>({message:"Método de pagamento é obrigatório"})}),items:gs(Hs).min(1,"Pelo menos um item é obrigatório"),deliveryAddress:W().optional(),deliveryDate:W().optional(),notes:W().optional(),discount:we().min(0).default(0),freight:we().min(0).default(0),shippingWeight:we().min(0).optional()}),na=()=>{const r=us(),{canCreateIn:j,canEditIn:p}=ls(),{user:B}=ds(),[M,m]=l.useState({}),[F,E]=l.useState({}),[h,f]=l.useState([]),[C,R]=l.useState(null),[J,u]=l.useState(0),[d,y]=l.useState(null),[G,k]=l.useState(!1),[le,Z]=l.useState(!1),H=fs(),Ce=ys(),[x,S]=l.useState(null),[o,de]=l.useState(null),[ce,Ct]=l.useState(""),[me,It]=l.useState(""),[ue,_e]=l.useState(""),[U,Ke]=l.useState(""),[We,Ie]=l.useState(null),[ee,Xe]=l.useState("customers"),[Ee,te]=l.useState(1),xe=20,[Se,Et]=l.useState("all"),[$e,St]=l.useState("all"),[Ae,At]=l.useState(""),[V,Je]=l.useState(!1),[Oe,De]=l.useState(null),[Me,Fe]=l.useState(""),[N,pe]=l.useState(null),[L,se]=l.useState(1),[Le]=l.useState(20),[ge,Dt]=l.useState(null),[Te,Ze]=l.useState("asc"),{register:I,handleSubmit:Rt,formState:{errors:T},reset:ze,watch:Y,setValue:b,getValues:he}=xs({resolver:ms(Us),defaultValues:{customerId:"",deliveryMethod:"DELIVERY",customerAddressId:"",shippingCompanyId:"",items:[{productId:"",quantity:1,unitPrice:0}],paymentMethod:"PIX",deliveryAddress:"",deliveryDate:"",discount:0,freight:0,shippingWeight:0}}),$=Y("customerId"),A=Y("deliveryMethod"),w=Y("items"),be=Y("shippingCompanyId"),qe=Y("customerAddressId"),kt=Ye(),$t=(()=>{const t={};if(ue&&(t.startDate=new Date(ue).toISOString()),U){const s=new Date(U);if(U.length===7){const[a,i]=U.split("-").map(Number);s.setFullYear(a,i,0),s.setHours(23,59,59,999)}else s.setHours(23,59,59,999);t.endDate=s.toISOString()}return t})(),{data:fe=[],isLoading:Ot}=Ls($t),{data:et,isLoading:Mt}=Ts({page:Ee,limit:xe,status:Se}),tt=et?.orders??[],_=et?.total??0,{data:ae=[]}=zs(),{data:v=[]}=qs(),{data:Be=[]}=Bs(),Ft=Vs(),Lt=Qs();l.useEffect(()=>{const t=r.state;if(t?.viewOrderId&&fe.length>0){const s=fe.find(a=>a.id===t.viewOrderId);s&&(de(s),window.history.replaceState({},document.title))}},[r.state,fe]),l.useEffect(()=>{!x&&$&&(b("customerAddressId",""),Gt($))},[$,x]),l.useEffect(()=>{v.length>0&&Re()},[w,v]),l.useEffect(()=>{be?Ht(be):(f([]),R(null))},[be]),l.useEffect(()=>{be&&qe&&A==="DELIVERY"&&h.length>0&&Yt()},[be,qe,A,h,JSON.stringify(w)]),l.useEffect(()=>{A==="PICKUP"&&(b("customerAddressId",""),b("shippingCompanyId",""),b("freight",0),b("deliveryAddress",""),R(null))},[A]);const re=async(t,s)=>{Je(!0);try{await t(),g.success(s),kt.invalidateQueries({queryKey:q.resellerList({})}),pe(null)}catch(a){g.error(a.response?.data?.message||"Erro ao executar ação")}finally{Je(!1)}},Tt=t=>re(()=>ie.approveOrderFromPanel(t),"Pedido aprovado com sucesso"),zt=async()=>{if(Oe){if(!Me.trim()){g.error("Informe o motivo da negação");return}await re(()=>ie.rejectOrderFromPanel(Oe),"Pedido negado"),De(null),Fe("")}},qt=t=>re(()=>ie.markProcessingFromPanel(t),"Pedido marcado como em separação"),Bt=t=>re(()=>ie.shipOrderFromPanel(t),"Pedido enviado — baixa no estoque realizada"),Vt=t=>re(()=>ie.deliverOrderFromPanel(t),"Entrega confirmada"),Qt=t=>re(()=>ie.markPaidFromPanel(t),"Pedido marcado como pago"),Gt=async t=>{try{const s=ae.find(a=>a.id===t);if(s){y(s),s.hasPriceAdjustment&&!ct||E({}),s.defaultDeliveryMethod&&b("deliveryMethod",s.defaultDeliveryMethod);const a=he("items");a&&a.length>0&&a.forEach((i,n)=>{i.productId&&it(n,i.productId)})}}catch(s){console.error("Erro ao carregar dados do cliente:",s)}},Re=()=>{let t=0;w.forEach(a=>{const i=v.find(n=>n.id===a.productId);if(i){const c=(Number(i.weight)||0)*Number(a.quantity);t+=c}});const s=t/1e3;return u(s),b("shippingWeight",s),s},Ht=async t=>{try{const{shippingCompaniesService:s}=await cs(async()=>{const{shippingCompaniesService:i}=await import("./shippingCompaniesService-DiYWaIE0.js");return{shippingCompaniesService:i}},__vite__mapDeps([0,1,2,3,4,5,6])),a=await s.getRegions(t);f(a.data||[])}catch(s){console.error("Erro ao carregar regiões:",s),g.error("Erro ao carregar regiões da transportadora"),f([])}},Ut=(t,s)=>{const a=new Date(t);let i=0;for(;i<s;){a.setDate(a.getDate()+1);const n=a.getDay();n!==0&&n!==6&&i++}return a},Yt=async()=>{const t=he("customerAddressId"),s=he("shippingCompanyId");if(!t||!s||h.length===0)return;const i=Ge($).find(Q=>Q.id===t);if(!i){g.error("Endereço não encontrado");return}const n=h.find(Q=>Q.state.toUpperCase()===i.state.toUpperCase()&&Q.city.trim().toLowerCase()===i.city.trim().toLowerCase());if(!n){g.error(`A transportadora não atende a cidade ${i.city}/${i.state}`),b("shippingCompanyId",""),b("freight",0),R(null);return}if(R(n),n.deliveryDays&&Number(n.deliveryDays)>0){const ss=Ut(new Date,Number(n.deliveryDays)).toISOString().split("T")[0];b("deliveryDate",ss)}const c=Ve(w);let D=0;if(n.freeShippingEnabled&&n.freeShippingMinValue){const Q=Number(n.freeShippingMinValue);c>=Q?(D=0,g.success(`🎉 Frete grátis! Pedido atingiu R$ ${Q.toFixed(2)}`)):D=Number(n.fixedPrice)||0}else D=Number(n.fixedPrice)||0;let O=D;if(d)switch(d.freightPolicy){case"PAYS_NONE":O=0;break;case"PAYS_HALF":O=D*.5;break;default:O=D;break}b("freight",O)},st=t=>{if(t){const s=t.customer?.id||t.customerId;S(t);const a=ae.find(c=>c.id===s)||null;y(a),a&&a.hasPriceAdjustment&&!ct||E({});const i={};t.items.forEach((c,D)=>{const O=c.sellByPackage!==void 0?c.sellByPackage:!0;i[D]=O?"package":"unit"}),m(i);const n={customerId:s,deliveryMethod:"DELIVERY",customerAddressId:t.customerAddressId,shippingCompanyId:t.shippingCompanyId||"",items:t.items.map(c=>({productId:c.productId,quantity:c.quantity,unitPrice:c.unitPrice,sellByPackage:c.sellByPackage!==void 0?c.sellByPackage:!0})),paymentMethod:t.payment?.method||"PIX",deliveryAddress:t.address?`${t.address.street}, ${t.address.number} - ${t.address.district}, ${t.address.city}/${t.address.state}`:"",deliveryDate:t.deliveryDate?Gs(t.deliveryDate):"",notes:t.notes||"",discount:t.discount||0,freight:t.freight||0,shippingWeight:0};ze(n),setTimeout(()=>{},100)}else S(null),y(null),E({}),m({}),f([]),R(null),u(0),ze({customerId:"",deliveryMethod:"DELIVERY",customerAddressId:"",shippingCompanyId:"",items:[{productId:"",quantity:1,unitPrice:0}],paymentMethod:"PIX",deliveryAddress:"",deliveryDate:"",notes:"",discount:0,freight:0,shippingWeight:0});k(!0),setTimeout(()=>{v.length>0&&Re()},300)},at=()=>{k(!1),S(null),y(null),E({}),m({}),f([]),R(null),u(0),ze({customerId:"",deliveryMethod:"DELIVERY",customerAddressId:"",shippingCompanyId:"",items:[{productId:"",quantity:1,unitPrice:0}],paymentMethod:"PIX",deliveryAddress:"",deliveryDate:"",notes:"",discount:0,freight:0,shippingWeight:0})},_t=async t=>{try{if(t.deliveryMethod==="DELIVERY"&&!t.customerAddressId){g.error("Endereço de entrega é obrigatório para entrega");return}if(x)g.success("Pedido atualizado com sucesso!");else{const s={...t,addressId:t.customerAddressId,discount:Number(t.discount)||0,freight:Number(t.freight)||0,shippingWeight:Number(J)||0,items:t.items.map((a,i)=>({...a,sellByPackage:M[i]==="package"}))};await Ft.mutateAsync(s),g.success("Pedido criado com sucesso!")}at()}catch(s){console.error("Erro ao salvar pedido:",s);const a=s?.response?.data?.message||s?.message||"Erro ao salvar pedido";g.error(a)}},Kt=async(t,s)=>{try{await Lt.mutateAsync({id:t,status:s}),g.success("Status atualizado com sucesso!")}catch(a){console.error("Erro ao atualizar status:",a),g.error("Erro ao atualizar status")}},rt=t=>{const s=[];switch(t){case P.PENDING:s.push({status:P.CONFIRMED,label:"Confirmar",color:"bg-blue-600 hover:bg-blue-700",icon:oe},{status:P.CANCELLED,label:"Cancelar",color:"bg-red-600 hover:bg-red-700",icon:ke});break;case P.CONFIRMED:s.push({status:P.PREPARING,label:"Iniciar Preparo",color:"bg-purple-600 hover:bg-purple-700",icon:Ne},{status:P.CANCELLED,label:"Cancelar",color:"bg-red-600 hover:bg-red-700",icon:ke});break;case P.PREPARING:s.push({status:P.READY,label:"Marcar como Pronto",color:"bg-green-600 hover:bg-green-700",icon:oe});break;case P.READY:s.push({status:P.SHIPPED,label:"Marcar como Enviado",color:"bg-indigo-600 hover:bg-indigo-700",icon:Ue});break;case P.SHIPPED:s.push({status:P.DELIVERED,label:"Marcar como Entregue",color:"bg-green-600 hover:bg-green-700",icon:oe}),(B?.role==="ADMIN"||B?.role==="MANAGER")&&s.push({status:P.CANCELLED,label:"Cancelar Pedido",color:"bg-red-600 hover:bg-red-700",icon:ke});break;case P.DELIVERED:case P.CANCELLED:break}return s},Wt=()=>{const t=he("items");b("items",[...t,{productId:"",quantity:1,unitPrice:0,sellByPackage:!0}]),setTimeout(()=>{v.length>0&&Re()},100)},Xt=t=>{const s=he("items");s.length>1&&(b("items",s.filter((a,i)=>i!==t)),setTimeout(()=>{v.length>0&&Re()},100))},it=(t,s)=>{const a=v.find(i=>i.id===s);if(a){let i=Number(a.price);if(F[s])i=Number(F[s]),console.log(`💰 Aplicando preço customizado: ${a.name} = R$ ${i.toFixed(2)}`);else if(d&&d.hasPriceAdjustment&&d.priceAdjustPercent){const n=Number(d.priceAdjustPercent);d.priceAdjustType==="INCREASE"?i=i+i*(n/100):d.priceAdjustType==="DECREASE"&&(i=i-i*(n/100)),console.log(`📊 Aplicando ajuste percentual: ${n}% → R$ ${i.toFixed(2)}`)}b(`items.${t}.unitPrice`,i)}},Ve=t=>t.reduce((s,a)=>s+a.quantity*a.unitPrice,0),Jt=()=>{const t=Ve(w),s=Y("discount")||0,a=Y("freight")||0;return t-s+a},ye=t=>({REQUESTED:{label:"Solicitado",color:"bg-yellow-100 text-yellow-800",icon:vt},PENDING:{label:"Pendente",color:"bg-yellow-100 text-yellow-800",icon:vt},CONFIRMED:{label:"Confirmado",color:"bg-blue-100 text-blue-800",icon:oe},PREPARING:{label:"Preparando",color:"bg-purple-100 text-purple-800",icon:Ne},READY:{label:"Pronto",color:"bg-green-100 text-green-800",icon:oe},SHIPPED:{label:"Enviado",color:"bg-indigo-100 text-indigo-800",icon:Ue},DELIVERED:{label:"Entregue",color:"bg-green-100 text-green-800",icon:oe},PAID:{label:"Pago",color:"bg-emerald-100 text-emerald-800",icon:bt},CANCELLED:{label:"Cancelado",color:"bg-red-100 text-red-800",icon:ke}})[t],ot=t=>{const s={FACGESTOR:{label:"FacGestor",color:"bg-blue-50 text-blue-700 border-blue-200",emoji:"💻"},SELLER_PANEL:{label:"Vendedor",color:"bg-purple-50 text-purple-700 border-purple-200",emoji:"🏪"},RESELLER_PANEL:{label:"Revendedor",color:"bg-emerald-50 text-emerald-700 border-emerald-200",emoji:"🏭"},WHATSAPP:{label:"WhatsApp",color:"bg-green-50 text-green-700 border-green-200",emoji:"💬"},IFOOD:{label:"iFood",color:"bg-red-50 text-red-700 border-red-200",emoji:"🍽️"},PHONE:{label:"Telefone",color:"bg-indigo-50 text-indigo-700 border-indigo-200",emoji:"📞"},EMAIL:{label:"E-mail",color:"bg-cyan-50 text-cyan-700 border-cyan-200",emoji:"📧"},WALK_IN:{label:"Balcão",color:"bg-amber-50 text-amber-700 border-amber-200",emoji:"🏬"},OTHER:{label:"Outro",color:"bg-gray-50 text-gray-700 border-gray-200",emoji:"📋"}};return s[t]||s.OTHER},ve=t=>ae.find(a=>a.id===t)?.name||"Cliente não encontrado",Qe=t=>v.find(a=>a.id===t)?.name||"Produto não encontrado",nt=t=>{const s=v.find(i=>i.id===t.productId);return s?s.packageQuantity&&Number(s.packageQuantity)>0&&t.sellByPackage!==!1?`${t.quantity} pct`:`${t.quantity} un`:`${t.quantity} un`},Ge=t=>ae.find(a=>a.id===t)?.addresses||[],Zt=t=>{ge===t?Ze(Te==="asc"?"desc":"asc"):(Dt(t),Ze("asc"))},K=[...fe.filter(t=>{const s=(t.customer?.name||ve(t.customerId)).toLowerCase(),a=t.orderNumber.toLowerCase().includes(ce.toLowerCase())||s.includes(ce.toLowerCase()),i=me===""||t.status===me;return a&&i})].sort((t,s)=>{if(!ge)return 0;let a=0;if(ge==="orderNumber")a=t.orderNumber.localeCompare(s.orderNumber);else if(ge==="orderDate"){const i=new Date(t.orderDate||0).getTime(),n=new Date(s.orderDate||0).getTime();a=i-n}return Te==="asc"?a:-a}),z=Math.ceil(K.length/Le),He=(L-1)*Le,lt=He+Le,es=K.slice(He,lt);l.useEffect(()=>{se(1)},[ce,me,ue,U]);const dt=t=>{try{const s=ae.find(a=>a.id===t.customerId);$s({order:t,getProductName:Qe,getCustomerName:ve,formatItemQuantity:nt,getStatusInfo:ye,shippingCompanies:Be,customerData:s?{cpf:s.cpf,cnpj:s.cnpj}:void 0}),g.success("Janela de impressão aberta!")}catch(s){g.error(s.message)}},ts=t=>{try{Os({order:t,getProductName:Qe,getCustomerName:ve,formatItemQuantity:nt}),g.success("Janela de impressão para produção aberta!")}catch(s){g.error(s.message)}};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Pedidos"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:ee==="customers"?"Gerencie os pedidos dos clientes":"Gerencie o abastecimento de revendedores"})]}),ee==="customers"&&j("orders")&&e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>Z(!0),className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[e.jsx(js,{className:"h-4 w-4 mr-2"}),"Importar CSV"]}),e.jsxs("button",{onClick:()=>st(),className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[e.jsx(pt,{className:"h-4 w-4 mr-2"}),"Novo Pedido"]})]})]}),e.jsx("div",{className:"border-b border-gray-200",children:e.jsxs("nav",{className:"flex -mb-px gap-6","aria-label":"Tabs",children:[e.jsxs("button",{onClick:()=>Xe("customers"),className:`flex items-center gap-2 py-3 px-1 border-b-2 text-sm font-medium transition-colors ${ee==="customers"?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,children:[e.jsx(Ns,{className:"h-4 w-4"}),"Pedidos Clientes"]}),e.jsxs("button",{onClick:()=>{Xe("resellers"),te(1)},className:`flex items-center gap-2 py-3 px-1 border-b-2 text-sm font-medium transition-colors ${ee==="resellers"?"border-emerald-500 text-emerald-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,children:[e.jsx(gt,{className:"h-4 w-4"}),"Abastecimento Revendedores",_>0&&e.jsx("span",{className:"ml-1 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800",children:_})]})]})}),ee==="customers"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Buscar por número do pedido ou cliente...",value:ce,onChange:t=>Ct(t.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("select",{value:me,onChange:t=>It(t.target.value),className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"Todos os status"}),e.jsx("option",{value:"PENDING",children:"Pendente"}),e.jsx("option",{value:"CONFIRMED",children:"Confirmado"}),e.jsx("option",{value:"PREPARING",children:"Preparando"}),e.jsx("option",{value:"READY",children:"Pronto"}),e.jsx("option",{value:"SHIPPED",children:"Enviado"}),e.jsx("option",{value:"DELIVERED",children:"Entregue"}),e.jsx("option",{value:"CANCELLED",children:"Cancelado"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ws,{className:"h-4 w-4 text-gray-400"}),e.jsx("input",{type:"date",value:ue,onChange:t=>_e(t.target.value),placeholder:"Data inicial",className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"}),e.jsx("span",{className:"text-gray-400",children:"até"}),e.jsx("input",{type:"date",value:U,onChange:t=>Ke(t.target.value),placeholder:"Data final",className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"}),(ue||U)&&e.jsx("button",{onClick:()=>{_e(""),Ke("")},className:"p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors",title:"Limpar filtro de data",children:e.jsx(je,{className:"h-4 w-4"})})]})]}),Ot?e.jsx(mt,{text:"Carregando pedidos..."}):e.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none",onClick:()=>Zt("orderNumber"),title:"Clique para ordenar por número do pedido",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{children:"Pedido"}),ge==="orderNumber"&&e.jsx("span",{className:"text-blue-600",children:Te==="asc"?"↑":"↓"})]})}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Cliente"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Origem"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Total"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data Prevista"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"paginatário"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Ações"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:es.map(t=>{const s=ye(t.status);return e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:t.orderNumber}),e.jsx("div",{className:"text-sm text-gray-500",children:t.orderDate?X(new Date(t.orderDate),"dd/MM/yyyy HH:mm",{locale:ne}):"N/A"})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(Ps,{className:"h-4 w-4 text-gray-400 mr-2"}),e.jsx("div",{className:"text-sm text-gray-900",children:t.customer?.name||ve(t.customerId)})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:(()=>{const a=ot(t.source||ut.FACGESTOR);return e.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border ${a.color}`,children:[e.jsx("span",{children:a.emoji}),e.jsx("span",{children:a.label})]})})()}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[e.jsxs("div",{className:"text-sm font-medium text-gray-900 flex items-center",children:[e.jsx(bt,{className:"h-4 w-4 mr-1 text-gray-400"}),"R$ ",t.totalAmount.toFixed(2)]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[t.items.length," ",t.items.length===1?"item":"itens"]})]}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[e.jsx("div",{className:"text-sm text-gray-900",children:jt(t.deliveryDate)}),t.notes&&e.jsx("div",{className:"text-xs text-gray-500 max-w-xs truncate",children:t.notes})]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"text-sm text-gray-900",children:t.employee?.user?.name||"Funcionário não atribuído"})}),e.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${s.color}`,children:s.label}),rt(t.status).length>0&&e.jsx("button",{onClick:()=>Ie(t.id),className:"p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100 transition-colors",title:"Atualizar status",children:e.jsx(Cs,{className:"h-4 w-4"})})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx("button",{onClick:()=>de(t),className:"text-blue-600 hover:text-blue-900",title:"Visualizar",children:e.jsx(ft,{className:"h-4 w-4"})}),p("orders")&&e.jsx("button",{onClick:()=>st(t),className:"text-indigo-600 hover:text-indigo-900",title:"Editar",children:e.jsx(Is,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>dt(t),className:"text-green-600 hover:text-green-900",title:"Imprimir",children:e.jsx(yt,{className:"h-4 w-4"})})]})})]},t.id)})})]})}),K.length===0&&e.jsxs("div",{className:"text-center py-12",children:[e.jsx(Ne,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"Nenhum pedido encontrado"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:ce||me?"Tente ajustar os filtros de busca.":"Comece criando um novo pedido."})]}),K.length>0&&z>1&&e.jsxs("div",{className:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",children:[e.jsxs("div",{className:"flex-1 flex justify-between sm:hidden",children:[e.jsx("button",{onClick:()=>se(t=>Math.max(1,t-1)),disabled:L===1,className:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:"Anterior"}),e.jsx("button",{onClick:()=>se(t=>Math.min(z,t+1)),disabled:L===z,className:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:"Próxima"})]}),e.jsxs("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-sm text-gray-700",children:["Mostrando ",e.jsx("span",{className:"font-medium",children:He+1})," a ",e.jsx("span",{className:"font-medium",children:Math.min(lt,K.length)})," de"," ",e.jsx("span",{className:"font-medium",children:K.length})," resultado",K.length!==1?"s":""]})}),e.jsx("div",{children:e.jsxs("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[e.jsxs("button",{onClick:()=>se(t=>Math.max(1,t-1)),disabled:L===1,className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx("span",{className:"sr-only",children:"Anterior"}),e.jsx("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),[...Array(Math.min(z,5))].map((t,s)=>{let a;return z<=5||L<=3?a=s+1:L>=z-2?a=z-4+s:a=L-2+s,e.jsx("button",{onClick:()=>se(a),className:`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${L===a?"z-10 bg-blue-50 border-blue-500 text-blue-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50"}`,children:a},a)}),e.jsxs("button",{onClick:()=>se(t=>Math.min(z,t+1)),disabled:L===z,className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx("span",{className:"sr-only",children:"Próxima"}),e.jsx("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})})]})]})]})]}),ee==="resellers"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Buscar por revendedor ou código do pedido...",value:Ae,onChange:t=>{At(t.target.value),te(1)},className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),e.jsxs("select",{value:Se,onChange:t=>{Et(t.target.value),te(1)},className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500",children:[e.jsx("option",{value:"all",children:"Todos os status"}),e.jsx("option",{value:"REQUESTED",children:"Solicitado"}),e.jsx("option",{value:"APPROVED",children:"Aprovado / Pendente"}),e.jsx("option",{value:"REJECTED",children:"Negado"}),e.jsx("option",{value:"PROCESSING",children:"Em Separação"}),e.jsx("option",{value:"SHIPPED",children:"Enviado"}),e.jsx("option",{value:"DELIVERED",children:"Entregue"}),e.jsx("option",{value:"PAID",children:"Pago"}),e.jsx("option",{value:"CANCELLED",children:"Cancelado"})]}),e.jsxs("select",{value:$e,onChange:t=>{St(t.target.value),te(1)},className:"px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500",children:[e.jsx("option",{value:"all",children:"Todos faturamentos"}),e.jsx("option",{value:"PROPRIA",children:"Conta Própria"}),e.jsx("option",{value:"COMISSAO",children:"Comissão"})]})]}),Mt?e.jsx(mt,{text:"Carregando pedidos de revendedores..."}):e.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"#Pedido"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Revendedor"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Faturamento"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Origem"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Total"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Ações"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:tt.filter(t=>{const s=!Ae||t.orderNumber?.toLowerCase().includes(Ae.toLowerCase())||t.reseller?.name?.toLowerCase().includes(Ae.toLowerCase()),a=Se==="all"||t.status===Se,i=$e==="all"||t.reseller?.billingType===$e;return s&&a&&i}).map(t=>{const a={PENDING:{label:"Aguardando",color:"bg-yellow-100 text-yellow-800"},CONFIRMED:{label:"Aprovado",color:"bg-blue-100 text-blue-800"},PREPARING:{label:"Em Separação",color:"bg-orange-100 text-orange-800"},READY:{label:"Pronto",color:"bg-teal-100 text-teal-800"},SHIPPED:{label:"Enviado",color:"bg-violet-100 text-violet-800"},DELIVERED:{label:"Entregue",color:"bg-green-100 text-green-800"},CANCELLED:{label:"Cancelado",color:"bg-gray-100 text-gray-800"},PAID:{label:"Pago",color:"bg-emerald-100 text-emerald-800"}}[t.status]||{label:t.status,color:"bg-gray-100 text-gray-800"},i=t.reseller?.name||t.customer?.name||"—",n=t.reseller?.billingType??null;return e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:t.orderNumber||t.id.slice(0,8)}),e.jsx("div",{className:"text-xs text-gray-400",children:t.orderDate?X(new Date(t.orderDate),"dd/MM HH:mm",{locale:ne}):t.createdAt?X(new Date(t.createdAt),"dd/MM HH:mm",{locale:ne}):"—"})]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"text-sm text-gray-900",children:i})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${n==="COMISSAO"?"bg-purple-100 text-purple-800":n==="PROPRIA"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`,children:n==="COMISSAO"?"Comissão":n==="PROPRIA"?"Conta Própria":"—"})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:(()=>{const c=t.source,O=c?{RESELLER_PANEL:{label:"Painel Revendedor",color:"bg-emerald-100 text-emerald-800"},FACGESTOR:{label:"FacGestor",color:"bg-blue-100 text-blue-800"},WHATSAPP:{label:"WhatsApp",color:"bg-green-100 text-green-800"},LANDING_PAGE:{label:"Site",color:"bg-indigo-100 text-indigo-800"},OTHER:{label:"Outro",color:"bg-gray-100 text-gray-800"}}[c]||{label:c,color:"bg-gray-100 text-gray-800"}:null;return O?e.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${O.color}`,children:O.label}):e.jsx("span",{className:"text-gray-400",children:"—"})})()}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${a.color}`,children:a.label})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:t.totalAmount!=null?new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.totalAmount):"—"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.orderDate?X(new Date(t.orderDate),"dd/MM/yyyy",{locale:ne}):t.createdAt?X(new Date(t.createdAt),"dd/MM/yyyy",{locale:ne}):"—"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e.jsxs("div",{className:"flex items-center justify-end gap-1",children:[e.jsx("button",{onClick:()=>pe(t),className:"p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded",title:"Ver detalhes",children:e.jsx(ft,{className:"h-4 w-4"})}),t.status==="PENDING"&&p("orders")&&e.jsx("button",{onClick:()=>Tt(t.id),disabled:V,className:"p-1.5 text-emerald-600 hover:text-white hover:bg-emerald-600 rounded transition-colors disabled:opacity-40",title:"Aprovar pedido",children:e.jsx(Es,{className:"h-4 w-4"})}),t.status==="PENDING"&&p("orders")&&e.jsx("button",{onClick:()=>{De(t.id),Fe("")},disabled:V,className:"p-1.5 text-red-500 hover:text-white hover:bg-red-500 rounded transition-colors disabled:opacity-40",title:"Negar pedido",children:e.jsx(je,{className:"h-4 w-4"})}),t.status==="CONFIRMED"&&p("orders")&&e.jsx("button",{onClick:()=>qt(t.id),disabled:V,className:"p-1.5 text-orange-600 hover:text-white hover:bg-orange-600 rounded transition-colors disabled:opacity-40",title:"Iniciar separação",children:e.jsx(Ne,{className:"h-4 w-4"})}),t.status==="PREPARING"&&p("orders")&&e.jsx("button",{onClick:()=>Bt(t.id),disabled:V,className:"p-1.5 text-violet-600 hover:text-white hover:bg-violet-600 rounded transition-colors disabled:opacity-40",title:"Marcar como enviado (baixa no estoque)",children:e.jsx(Ue,{className:"h-4 w-4"})}),t.status==="SHIPPED"&&p("orders")&&e.jsx("button",{onClick:()=>Vt(t.id),disabled:V,className:"p-1.5 text-green-600 hover:text-white hover:bg-green-600 rounded transition-colors disabled:opacity-40",title:"Marcar como entregue",children:e.jsx(Ss,{className:"h-4 w-4"})}),t.status==="DELIVERED"&&p("orders")&&e.jsx("button",{onClick:()=>Qt(t.id),disabled:V,className:"p-1.5 text-emerald-600 hover:text-white hover:bg-emerald-600 rounded transition-colors disabled:opacity-40",title:"Marcar como pago",children:e.jsx(As,{className:"h-4 w-4"})})]})})]},t.id)})})]})}),tt.length===0&&e.jsxs("div",{className:"text-center py-12",children:[e.jsx(gt,{className:"mx-auto h-12 w-12 text-gray-300"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"Nenhum pedido de revendedor"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Pedidos de abastecimento aparecerão aqui."})]}),_>xe&&e.jsx("div",{className:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",children:e.jsxs("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[e.jsxs("p",{className:"text-sm text-gray-700",children:["Página ",e.jsx("span",{className:"font-medium",children:Ee})," de"," ",e.jsx("span",{className:"font-medium",children:Math.ceil(_/xe)})," "," — ",e.jsx("span",{className:"font-medium",children:_})," pedidos"]}),e.jsxs("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px",children:[e.jsx("button",{onClick:()=>te(t=>Math.max(1,t-1)),disabled:Ee===1,className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(Ds,{className:"h-5 w-5"})}),e.jsx("button",{onClick:()=>te(t=>Math.min(Math.ceil(_/xe),t+1)),disabled:Ee===Math.ceil(_/xe),className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:e.jsx(Rs,{className:"h-5 w-5"})})]})]})})]}),N&&e.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:e.jsxs("div",{className:"flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>pe(null)}),e.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Pedido de Revendedor — ",N.orderNumber||N.id.slice(0,8)]}),e.jsx("button",{onClick:()=>pe(null),className:"text-gray-400 hover:text-gray-600",children:e.jsx(je,{className:"h-5 w-5"})})]}),e.jsxs("dl",{className:"divide-y divide-gray-100",children:[e.jsxs("div",{className:"py-2 grid grid-cols-2 gap-4",children:[e.jsx("dt",{className:"text-sm text-gray-500",children:"Revendedor"}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:N.reseller?.name||N.customer?.name||"—"})]}),e.jsxs("div",{className:"py-2 grid grid-cols-2 gap-4",children:[e.jsx("dt",{className:"text-sm text-gray-500",children:"Faturamento"}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:N.reseller?.billingType==="COMISSAO"?"Comissão":N.reseller?.billingType==="PROPRIA"?"Conta Própria":"—"})]}),e.jsxs("div",{className:"py-2 grid grid-cols-2 gap-4",children:[e.jsx("dt",{className:"text-sm text-gray-500",children:"Status"}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:N.status})]}),e.jsxs("div",{className:"py-2 grid grid-cols-2 gap-4",children:[e.jsx("dt",{className:"text-sm text-gray-500",children:"Total"}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:N.totalAmount!=null?new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(N.totalAmount):"—"})]}),N.notes&&e.jsxs("div",{className:"py-2",children:[e.jsx("dt",{className:"text-sm text-gray-500 mb-1",children:"Observações"}),e.jsx("dd",{className:"text-sm text-gray-900",children:N.notes})]}),N.items&&N.items.length>0&&e.jsxs("div",{className:"py-2",children:[e.jsx("dt",{className:"text-sm text-gray-500 mb-2",children:"Itens"}),e.jsx("dd",{children:e.jsx("ul",{className:"divide-y divide-gray-100 text-sm",children:N.items.map((t,s)=>e.jsxs("li",{className:"py-1 flex justify-between",children:[e.jsx("span",{children:t.product?.name||t.productId}),e.jsxs("span",{className:"text-gray-500",children:[t.quantity,"x"]})]},s))})})]})]})]}),e.jsx("div",{className:"bg-gray-50 px-4 py-3 flex justify-end gap-2",children:e.jsx("button",{onClick:()=>pe(null),className:"px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Fechar"})})]})]})}),Oe&&e.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:e.jsxs("div",{className:"flex items-center justify-center min-h-screen px-4",children:[e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75",onClick:()=>De(null)}),e.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl p-6 max-w-md w-full",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(ks,{className:"h-6 w-6 text-red-500 flex-shrink-0"}),e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Rejeitar Pedido"})]}),e.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Informe o motivo da rejeição. O revendedor será notificado."}),e.jsx("textarea",{rows:3,value:Me,onChange:t=>Fe(t.target.value),placeholder:"Motivo da rejeição...",className:"w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"}),e.jsxs("div",{className:"flex justify-end gap-2 mt-4",children:[e.jsx("button",{onClick:()=>De(null),className:"px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Cancelar"}),e.jsx("button",{onClick:zt,disabled:V||!Me.trim(),className:"px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed",children:V?"Rejeitando...":"Rejeitar"})]})]})]})})]}),e.jsxs(hs,{isOpen:G,onClose:at,onSubmit:Rt(_t),title:x?"Editar Pedido":"Novo Pedido",submitLabel:x?"Atualizar":"Criar",size:"xl",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["1. Cliente ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...I("customerId"),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"Selecione um cliente"}),ae.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),T.customerId&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:T.customerId.message}),d&&e.jsxs("div",{className:"mt-2 p-2 bg-blue-50 rounded text-xs space-y-1",children:[e.jsxs("p",{children:["📋 ",e.jsx("strong",{children:"Política de Frete:"})," ",d.freightPolicy==="PAYS_FULL"?"Cliente paga 100%":d.freightPolicy==="PAYS_HALF"?"Cliente paga 50%":"Empresa absorve 100%"]}),d.hasPriceAdjustment&&e.jsxs("p",{children:["💲 ",e.jsx("strong",{children:"Ajuste de Preço:"})," ",d.priceAdjustType==="INCREASE"?"Acréscimo":"Desconto"," de ",d.priceAdjustPercent,"% (aplicado automaticamente nos produtos)"]})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["2. Método de Entrega ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...I("deliveryMethod"),disabled:!$,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",children:[e.jsx("option",{value:"DELIVERY",children:"Entrega"}),e.jsx("option",{value:"PICKUP",children:"Retirada"})]}),T.deliveryMethod&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:T.deliveryMethod.message})]}),A==="DELIVERY"&&e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["3. Endereço de Entrega ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...I("customerAddressId"),disabled:!$,onChange:t=>{const s=t.target.value;b("customerAddressId",s);const a=Ge($).find(i=>i.id===s);if(a){const i=`${a.street}, ${a.number}${a.complement?", "+a.complement:""} - ${a.neighborhood}, ${a.city}/${a.state} - CEP: ${a.zipCode}`;b("deliveryAddress",i)}},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",children:[e.jsx("option",{value:"",children:"Selecione um endereço"}),Ge($).map(t=>e.jsxs("option",{value:t.id,children:[t.street,", ",t.number," - ",t.neighborhood,", ",t.city,"/",t.state]},t.id))]}),T.customerAddressId&&A==="DELIVERY"&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:"Endereço é obrigatório para entrega"})]}),A==="DELIVERY"&&qe&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"4. Transportadora"}),e.jsxs("select",{...I("shippingCompanyId"),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"Sem transportadora (frete manual)"}),Be.filter(t=>t.isActive).map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),C&&e.jsxs("div",{className:"mt-2 p-2 bg-green-50 rounded text-xs space-y-1",children:[e.jsxs("p",{children:["✅ ",e.jsx("strong",{children:"Região:"})," ",C.regionName||C.city,"/",C.state]}),e.jsxs("p",{children:["📅 ",e.jsx("strong",{children:"Prazo:"})," ",C.deliveryDays," dias úteis"]}),C.fixedPrice&&e.jsxs("p",{children:["💰 ",e.jsx("strong",{children:"Frete:"})," R$ ",Number(C.fixedPrice).toFixed(2)]}),C.freeShippingEnabled&&C.freeShippingMinValue&&e.jsxs("p",{children:["🎁 ",e.jsx("strong",{children:"Frete grátis:"})," acima de R$ ",Number(C.freeShippingMinValue).toFixed(2)]})]})]}),A==="DELIVERY"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"5. Data Prevista para Entrega"}),e.jsx("input",{...I("deliveryDate"),type:"date",min:X(new Date,"yyyy-MM-dd"),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),T.deliveryDate&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:T.deliveryDate.message})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:[A==="DELIVERY"?"6":"3",". Método de Pagamento ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...I("paymentMethod"),disabled:!$,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",children:[e.jsx("option",{value:"PIX",children:"PIX"}),e.jsx("option",{value:"CASH",children:"Dinheiro"}),e.jsx("option",{value:"CARD",children:"Cartão"}),e.jsx("option",{value:"BANK_SLIP",children:"Boleto"})]}),T.paymentMethod&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:T.paymentMethod.message})]}),e.jsx("input",{type:"hidden",...I("deliveryAddress")}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("h4",{className:"text-md font-medium text-gray-900",children:[A==="DELIVERY"?"7":"4",". Itens do Pedido ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("button",{type:"button",onClick:Wt,disabled:!$,className:"inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(pt,{className:"h-4 w-4 mr-1"}),"Adicionar Item"]})]}),w.map((t,s)=>e.jsxs("div",{className:"border border-gray-200 rounded-md p-4 mb-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("h5",{className:"text-sm font-medium text-gray-700",children:["Item ",s+1]}),w.length>1&&e.jsx("button",{type:"button",onClick:()=>Xt(s),className:"text-red-600 hover:text-red-800",children:e.jsx(je,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-4",children:[e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Produto *"}),e.jsxs("select",{...I(`items.${s}.productId`),onChange:a=>{b(`items.${s}.productId`,a.target.value),it(s,a.target.value);const i=v.find(n=>n.id===a.target.value);i&&(i.packageQuantity&&Number(i.packageQuantity)>0?m(n=>({...n,[s]:"package"})):m(n=>({...n,[s]:"unit"})))},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"",children:"Selecione um produto"}),v.filter(a=>a.isActive).map(a=>e.jsxs("option",{value:a.id,children:[a.name," - R$ ",a.price.toFixed(2),a.hasRecipe?" 🔧 (Baixa Automática)":""]},a.id))]})]}),w[s]?.productId&&(()=>{const a=v.find(n=>n.id===w[s].productId);return a?.packageQuantity&&Number(a.packageQuantity)>0?e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tipo de Venda *"}),e.jsxs("select",{value:M[s]||"package",onChange:n=>{const c=n.target.value;m(D=>({...D,[s]:c})),b(`items.${s}.quantity`,1)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsxs("option",{value:"package",children:["Por Pacote (",Number(a.packageQuantity)," un/pct)"]}),e.jsx("option",{value:"unit",children:"Por Unidade"})]})]}):null})(),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["Quantidade *",w[s]?.productId&&(()=>{const a=v.find(c=>c.id===w[s].productId),i=a?.packageQuantity&&Number(a.packageQuantity)>0,n=M[s]||"package";return i&&n==="package"?` (${(w[s]?.quantity||0)*Number(a.packageQuantity)} unidades)`:""})()]}),e.jsx("input",{...I(`items.${s}.quantity`,{valueAsNumber:!0}),type:"number",min:"1",step:"1",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Preço Unitário *"}),e.jsx("input",{...I(`items.${s}.unitPrice`,{valueAsNumber:!0}),type:"number",step:"0.01",min:"0",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]})]},s))]}),w.some(t=>v.find(a=>a.id===t.productId)?.hasRecipe)&&e.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("svg",{className:"h-5 w-5 text-amber-400",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-amber-800",children:"Baixa Automática de Ingredientes"}),e.jsxs("div",{className:"mt-2 text-sm text-amber-700",children:[e.jsx("p",{children:"Os produtos com receitas selecionados neste pedido irão automaticamente:"}),e.jsxs("ul",{className:"mt-1 ml-4 space-y-1 list-disc",children:[e.jsx("li",{children:"Calcular a quantidade necessária de ingredientes"}),e.jsx("li",{children:"Verificar disponibilidade no estoque"}),e.jsx("li",{children:"Realizar a baixa automática dos ingredientes"}),e.jsx("li",{children:"Gerar movimentação no controle de estoque"})]}),e.jsxs("p",{className:"mt-2 font-medium",children:["Produtos com receita neste pedido: ",w.filter(t=>v.find(a=>a.id===t.productId)?.hasRecipe).map(t=>v.find(a=>a.id===t.productId)?.name).join(", ")]})]})]})]})}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900 mb-3",children:"Resumo do Pedido"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Desconto (R$)"}),e.jsx("input",{...I("discount",{valueAsNumber:!0}),type:"number",step:"0.01",min:"0",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Frete (R$)"}),e.jsx("input",{...I("freight",{valueAsNumber:!0}),type:"number",step:"0.01",min:"0",disabled:A==="PICKUP",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"}),A==="PICKUP"&&e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Retirada sem frete"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Peso Total (KG)"}),e.jsxs("div",{className:"w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm font-medium text-gray-900",children:[J.toFixed(3)," kg"]}),e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Calculado automaticamente"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Subtotal"}),e.jsxs("div",{className:"w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm font-medium text-gray-900",children:["R$ ",Ve(w).toFixed(2)]}),e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Apenas produtos"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Total"}),e.jsxs("div",{className:"w-full px-3 py-2 bg-blue-100 border border-blue-300 rounded-md text-lg font-bold text-blue-900",children:["R$ ",Jt().toFixed(2)]})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Observações"}),e.jsx("textarea",{...I("notes"),rows:3,placeholder:"Observações sobre o pedido...",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),We&&(()=>{const t=fe.find(a=>a.id===We);if(!t)return null;const s=rt(t.status);return s.length===0?null:e.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50",onClick:()=>Ie(null),children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Atualizar Status do Pedido"}),e.jsx("button",{onClick:()=>Ie(null),className:"text-gray-400 hover:text-gray-600",children:e.jsx(je,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["Pedido: ",e.jsxs("span",{className:"font-medium",children:["#",t.id.slice(0,8)]})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Status atual: ",e.jsx("span",{className:"font-medium",children:ye(t.status).label})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 mb-3",children:"Selecione o novo status:"}),s.map(a=>{const i=a.icon;return e.jsxs("button",{onClick:()=>{Kt(t.id,a.status),Ie(null)},className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-transparent hover:border-gray-200 ${a.color} text-white hover:opacity-90 transition-all`,children:[i&&e.jsx(i,{className:"h-5 w-5"}),e.jsx("span",{className:"font-medium",children:a.label})]},a.status)})]})]})})})(),e.jsx(bs,{isOpen:!!o,onClose:()=>de(null),title:"Detalhes do Pedido",size:"lg",headerActions:o&&e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>ts(o),className:"flex items-center gap-2 px-3 py-2 text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors",title:"Imprimir para Produção (sem valores)",children:[e.jsx(Ne,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:"Produção"})]}),e.jsxs("button",{onClick:()=>dt(o),className:"flex items-center gap-2 px-3 py-2 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors",title:"Imprimir completo (com valores)",children:[e.jsx(yt,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:"Completo"})]})]}),children:o&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Número do Pedido"}),e.jsx("p",{className:"mt-1 text-sm text-gray-900",children:o.orderNumber})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Status"}),e.jsx("div",{className:"mt-1",children:e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${ye(o.status).color}`,children:ye(o.status).label})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Origem do Pedido"}),e.jsx("div",{className:"mt-1",children:(()=>{const t=ot(o.source||ut.FACGESTOR);return e.jsxs("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${t.color}`,children:[e.jsx("span",{children:t.emoji}),e.jsx("span",{children:t.label})]})})()})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Cliente"}),e.jsx("p",{className:"mt-1 text-sm text-gray-900",children:o.customer?.name||ve(o.customerId)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Data Prevista para Entrega"}),e.jsx("p",{className:"mt-1 text-sm text-gray-900",children:jt(o.deliveryDate)})]}),o.shippingCompanyId&&e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Transportadora"}),e.jsx("p",{className:"mt-1 text-sm text-gray-900",children:Be.find(t=>t.id===o.shippingCompanyId)?.name||"N/A"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Endereço de Entrega"}),e.jsx("p",{className:"mt-1 text-sm text-gray-900",children:o.address?`${o.address.street}, ${o.address.number}${o.address.complement?" - "+o.address.complement:""} - ${o.address.district}, ${o.address.city}/${o.address.state} - CEP: ${o.address.zipCode}`:"N/A"})]}),o.notes&&e.jsxs("div",{className:"sm:col-span-2",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Observações"}),e.jsx("p",{className:"mt-1 text-sm text-gray-900",children:o.notes})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500 mb-2",children:"Itens do Pedido"}),e.jsx("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-300",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Produto"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Lotes Utilizados"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Quantidade Total"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Preço Unitário"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Subtotal"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:(()=>{const t=o.items.reduce((s,a)=>{const i=a.productId;return s[i]||(s[i]={productId:i,productName:Qe(i),batches:[],totalQuantity:0,totalSubtotal:0,unitPrice:a.unitPrice,sellByPackage:a.sellByPackage}),s[i].batches.push({batchCode:a.productBatch?.batchCode||"Sem lote",quantity:a.quantity}),s[i].totalQuantity+=a.quantity,s[i].totalSubtotal+=a.subtotal,s},{});return Object.values(t).map(s=>e.jsxs("tr",{children:[e.jsxs("td",{className:"px-6 py-4 text-sm text-gray-900",children:[e.jsx("div",{className:"font-medium",children:s.productName}),s.batches.length>1&&e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:[s.batches.length," lotes utilizados"]})]}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:e.jsx("div",{className:"flex flex-col gap-1",children:s.batches.map((a,i)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800",children:a.batchCode}),e.jsxs("span",{className:"text-xs text-gray-600",children:["(",a.quantity," ",s.sellByPackage!==!1?"pct":"un",")"]})]},i))})}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:[e.jsx("span",{className:"font-medium text-gray-900",children:s.totalQuantity})," ",s.sellByPackage!==!1?"pct":"un"]}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:["R$ ",s.unitPrice.toFixed(2)]}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium",children:["R$ ",s.totalSubtotal.toFixed(2)]})]},s.productId))})()})]})})]}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Subtotal:"}),e.jsxs("span",{className:"text-sm text-gray-900",children:["R$ ",o.items.reduce((t,s)=>t+s.subtotal,0).toFixed(2)]})]}),o.discount>0&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Desconto:"}),e.jsxs("span",{className:"text-sm text-red-600",children:["- R$ ",o.discount.toFixed(2)]})]}),(o.shippingCost>0||o.freight>0)&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Frete:"}),e.jsxs("span",{className:"text-sm text-gray-900",children:["R$ ",(o.freightCustomerAmount??o.freight??o.shippingCost??0).toFixed(2)]})]}),e.jsx("div",{className:"border-t border-gray-200 pt-2",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-base font-medium text-gray-900",children:"Total:"}),e.jsxs("span",{className:"text-base font-bold text-gray-900",children:["R$ ",(o.items.reduce((t,s)=>t+s.subtotal,0)-o.discount+(o.freightCustomerAmount??o.freight??o.shippingCost??0)).toFixed(2)]})]})})]})})]})}),e.jsx(vs,{isOpen:le,onClose:()=>Z(!1),title:"Importar Pedidos via CSV",templateUrl:"/import/orders/template",templateFilename:"template-vendas.csv",onPreview:t=>H.mutateAsync(t),onConfirm:t=>Ce.mutateAsync(t),isPreviewLoading:H.isPending,isConfirmLoading:Ce.isPending,entityLabel:"pedido"})]})};export{na as default};
