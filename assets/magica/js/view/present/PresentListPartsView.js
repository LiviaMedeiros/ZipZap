define(["underscore","backbone","backboneCommon","ajaxControl","command"],function(k,g,a,h,c){return g.View.extend({tagName:"div",className:"present commonFrame4",events:function(){var b={};b[a.cgti+" .btn"]=this.receivePresent;return b},initialize:function(a){this.listenTo(this.parentView,"removeChildView",this.removeView);this.listenTo(this.model.collection,"remove",this.removeView);this.listenTo(this.model,"change",this.removeView)},render:function(){var a=this.model.toJSON(),c;"CARD"===a.presentType&&
(c=a.card);this.$el.html(this.template({model:a,card:c}));return this},receivePresent:function(b){b.preventDefault();if(!a.isScrolled()){a.androidKeyStop=!0;var d=this,e=!1;1==a.doc.getElementsByClassName("present").length&&(e=!0);b={};b.presentId=[this.model.toJSON().id];h.ajaxPost(a.linkList.receivePresent,b,function(b){a.responseSetStorage(b);var f=function(){new a.PopupClass({popupId:"successPopup",content:"1 Present received.",popupType:"typeC",closeBtnText:"Close"});d.parentView.presentListUpdate(d.parentView.pageNum,
e)};b.gachaAnimation&&!window.isBrowser?($("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();c.startBgm(a.settingBgm);setTimeout(function(){c.setWebView(!0);a.androidKeyStop=!1;a.ready.target.className="readyFadeOut";c.changeBg("web_common.ExportJson");f()},50)}),$(a.ready.target).on("webkitAnimationEnd",function(){c.stopBgm();c.changeBg("web_black.jpg");$(a.ready.target).off();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&
(a.ready.target.className="")});setTimeout(function(){c.setWebView(!1);c.startPresentAnimation({gachaAnimation:b.gachaAnimation})},500)}),a.addClass(a.ready.target,"preNativeFadeIn")):(a.androidKeyStop=!1,f())})}},removeView:function(){this.off();this.remove()}})});