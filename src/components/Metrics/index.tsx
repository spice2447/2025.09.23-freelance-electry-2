"use client"; // Компонент Script требует клиентской среды

import Script from 'next/script';
import React from 'react';

const Metrics = () => {
  return (
    <>
      {/* --- Marquiz Script --- */}
      <Script id="marquiz-script" strategy="afterInteractive">
        {`
          (function(w, d, s, o){
            var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() {
              if (document.readyState !== 'loading') Marquiz.init(o);
              else document.addEventListener("DOMContentLoaded", function() {
                Marquiz.init(o);
              });
            };
            d.head.insertBefore(j, d.head.firstElementChild);
          })(window, document, 'script', {
            host: '//quiz.marquiz.ru',
            region: 'ru',
            id: '68bc138ede46c100197a6379',
            autoOpen: false,
            autoOpenFreq: 'once',
            openOnExit: false,
            disableOnMobile: false
          });
        `}
      </Script>

      {/* --- Roistat Counter Script --- */}
      <Script id="roistat-script" strategy="afterInteractive">
        {`
          (function(w, d, s, h, id) {
            w.roistatProjectId = id; w.roistatHost = h;
            var p = d.location.protocol == "https:" ? "https://" : "http://";
            var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
            var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
          })(window, document, 'script', 'cloud.roistat.com', 'e12cdc627d55f86be0f93586a0d54125');
        `}
      </Script>

      {/* --- Yandex.Metrika Counter Script --- */}
      <Script id="yandex-metrika-script" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
          
          ym(99885681, 'init', {
            webvisor: true,
            clickmap: true,
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}
      </Script>
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/99885681" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
    </>
  );
};

export default Metrics;