!function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r,i,n,c,s,l,a,u,d,p,_;o(1);r=document.querySelector(".circle-preloader"),i=document.querySelector(".mobile-menu-toggle"),n=document.querySelector(".header-top-right"),c=document.querySelector(".header-top"),s=document.querySelector("body"),l=document.querySelector(".button-elongated-white_header_registration"),a=document.querySelector("#aut-form"),u=document.querySelector("#open-reg-form"),d=Array.from(document.querySelectorAll(".open-login-form")),p=document.querySelector("#reg-form"),_=Array.from(document.querySelectorAll(".popup")),document.addEventListener("DOMContentLoaded",(function(){r.remove()})),d.forEach((function(e){e.addEventListener("click",(function(){a.classList.add("popup_is_active"),p.classList.remove("popup_is_active")}))})),u.addEventListener("click",(function(){a.classList.remove("popup_is_active"),p.classList.add("popup_is_active")})),i.addEventListener("click",(function(){i.classList.contains("mobile-menu-toggle_is_active")?(a.classList.remove("popup_is_active"),i.classList.remove("mobile-menu-toggle_is_active")):(c.classList.toggle("header-top_mobile_is_active"),s.classList.toggle("overflow-hidden"))})),n.addEventListener("click",(function(e){!e.target.closest(".header-top-right__wrap")&&c.classList.contains("header-top_mobile_is_active")&&(c.classList.toggle("header-top_mobile_is_active"),s.classList.toggle("overflow-hidden"))})),l.addEventListener("click",(function(){c.classList.toggle("header-top_mobile_is_active"),s.classList.toggle("overflow-hidden"),a.classList.add("popup_is_active"),i.classList.add("mobile-menu-toggle_is_active")})),_.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target;(!t.closest(".popup__wrap")||t.classList.contains(".popup__close")||t.closest(".popup__close"))&&(a.classList.remove("popup_is_active"),p.classList.remove("popup_is_active"),s.classList.toggle("overflow-hidden"),i.classList.remove("mobile-menu-toggle_is_active"))}))}))},function(e,t,o){}]);