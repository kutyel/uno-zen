/**
 * uno-zen - Minimalist and Elegant theme for Ghost
 * @version v2.2.3
 * @link    https://github.com/kikobeats/uno-zen
 * @author  Kiko Beats (https://github.com/kikobeats)
 * @license MIT
 */
(function(){"use strict";$(function(){var Uno;return window.Uno=Uno={version:"2.2.3",search:{container:function(){return $("#results")},form:function(action){return $("#search-container")[action]()}},loadingBar:function(action){return $(".pace")[action]()},context:function(){var className;return className=document.body.className.split(" ")[0].split("-")[0],""===className?"error":className},is:function(property,value){return document.body.dataset[property]===value},readTime:function(){var DateInDays;return(DateInDays=function(selector,cb){return $(selector).each(function(){var postDate,postDateInDays,postDateNow;return postDate=$(this).html(),postDateNow=new Date(Date.now()),postDateInDays=Math.floor((postDateNow-new Date(postDate))/864e5),0===postDateInDays?postDateInDays="today":1===postDateInDays?postDateInDays="yesterday":postDateInDays+=" days ago",$(this).html(postDateInDays),$(this).mouseover(function(){return $(this).html(postDate)}),$(this).mouseout(function(){return $(this).html(postDateInDays)})}),"function"==typeof cb?cb():void 0})(".post.meta > time")},device:function(){var h,w;return w=window.innerWidth,h=window.innerHeight,480>=w?"mobile":1024>=w?"tablet":"desktop"}}})}).call(this),function(){"use strict";$(function(){var base,base1,el,postTitle,shareLink;return el=document.body,Uno.is("device","desktop")&&$(document.links).filter(function(){return this.hostname!==window.location.hostname}).attr("target","_blank"),null==(base=el.dataset).page&&(base.page=Uno.context()),null==(base1=el.dataset).device&&(base1.device=Uno.device()),$(window).on("resize",Uno.device()),$(window).on("orientationchange",Uno.device()),Uno.readTime(),Uno.is("device","desktop")||FastClick.attach(el),Uno.is("page","post")&&($(".main").readingTime({readingTimeTarget:".post.reading-time > span"}),$(".content").fitVids(),postTitle=$("#post-title").text(),postTitle=postTitle.substring(0,postTitle.length-1),shareLink="http://twitter.com/share?url="+encodeURIComponent(document.URL),shareLink+="&text="+encodeURIComponent(postTitle+" »"),$("#share_twitter").attr("href",shareLink)),Uno.is("page","error")?$("#panic-button").click(function(){var s;return s=document.createElement("script"),s.setAttribute("src","https://nthitz.github.io/turndownforwhatjs/tdfw.js"),document.body.appendChild(s)}):void 0})}.call(this),function(){"use strict";$(function(){var _animate,_expand,el,isOpen;return el=document.body,isOpen="#open"===location.hash,_animate=function(){return setTimeout(function(){return $(".cover").addClass("animated")},1e3)},_expand=function(options){var method;return null==options&&(options={}),method="hide"===options.toggle?"addClass":"toggleClass",$(".cover")[method]("expanded"),$(".link-item")[method]("expanded"),$("#particles-js")[method]("expanded"),null!=options.form?Uno.search.form(options.form):void 0},$("#blog-button").click(function(){return Uno.is("device","desktop")?_expand({hide:"toggle",form:"toggle"}):$("#menu-button").trigger("click")}),$("#menu-button").click(function(){return $(".cover").toggleClass("expanded"),$(".main").toggleClass("expanded"),$("#menu-button").toggleClass("expanded")}),Uno.is("device","desktop")&&Uno.is("page","home")&&(_animate(),!isOpen)?_expand({aside:"hide",form:"hide"}):void 0})}.call(this),function(){"use strict";$(function(){var hideSearch,showSearch;return showSearch=function(){return $(".content").hide(),$("#search-results").addClass("active")},hideSearch=function(){return $(".content").show(),$("#search-results").removeClass("active")},$("#search-field").ghostHunter({results:"#search-results",zeroResultsInfo:!1,onKeyUp:!0,displaySearchInfo:!0,result_template:"<a class=\"result\" href='{{link}}'>\n  <h2>{{title}}</h2>\n  <h4>{{pubDate}}</h4>\n</a>",onComplete:function(query){return query.length>0?showSearch():hideSearch()}})})}.call(this);