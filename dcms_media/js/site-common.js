/*
 * このファイルは - 直 接 修 正 禁 止 - です。
 * ファイルを別途作成し、そのファイルに追加・修正してください。
*/
"use strict";var lh="";lh=location.href,lh.match(/dcmsadm/)?($("html").addClass("is-editor"),$(".c-pagetitle__img").addClass("active"),$(".l-loading__logo").addClass("active")):$(function(){$(function(){var i=$(".l-header__gnav");$(window).scroll(function(){$(this).scrollTop()>200&&0==i.hasClass("js-gnav-fixed")?(i.css({transition:"all 1.4s ease 0s;"}),i.addClass("js-gnav-fixed")):$(this).scrollTop()<200&&1==i.hasClass("js-gnav-fixed")&&i.removeClass("js-gnav-fixed")})}),$(".js-biggerlink").click(function(){window.location=$(this).find("a").attr("href")}),$(".js-biggerlink-blank").click(function(){var i=$(this).find("a").attr("href");window.open(i,"_blank")}),$(window).width()>690,navigator.userAgent.match(/(iPhone|iPod|Android)/)&&$(function(){$(".js-tel").each(function(){var i=$(this).html();$(this).children().is("img")?$(this).html($("<a>").attr("href","tel:"+$(this).children().attr("alt").replace(/-/g,"")).append(i+"</a>")):$(this).html($("<a>").attr("href","tel:"+$(this).text().replace(/-/g,"")).append(i+"</a>"))})}),$(".js-g-menu-btn").click(function(){$(this).toggleClass("active"),$(this).next("#js-gnav").toggleClass("show"),$(this).hasClass("active")?$("header").addClass("js-menu-open"):$("header").removeClass("js-menu-open")}),$(".js-2nd-menu-btn").click(function(){$(this).toggleClass("is-open"),$(this).siblings(".l-header__gnav-mega").slideToggle()}),$(".js-3rd-menu-btn").click(function(){$(this).toggleClass("is-open"),$(this).hasClass("is-open")?$(this).next(".l-header__mega__child-items").addClass("is-open"):$(this).next(".l-header__mega__child-items").removeClass("is-open")}),$(function(){function i(){$(".l-banner").addClass("is-loading")}$(window).on("load",function(){setTimeout(function(){i()},3e3)})}),$(".c-pagetitle").insertAfter("#locator"),$(window).on("load",function(){$(".c-pagetitle__img").addClass("active")}),$(function(){var i=$(".top-link01");i.hide(),$(window).scroll(function(){$(this).scrollTop()>100?i.fadeIn():i.fadeOut()}),i.click(function(){return $("body, html").animate({scrollTop:0},500),!1})})});
