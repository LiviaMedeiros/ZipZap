define("underscore backbone backboneCommon ajaxControl command text!template/chara/CharaTop.html text!css/chara/CharaTop.css text!css/chara/CharaCommon.css cardUtil CharaCommon".split(" "),function(p,q,b,f,d,r,t,u,v,c){var e,h,k,l=null,g,w=q.View.extend({events:function(){var a={};a[b.cgti]=this.touch;a[b.cgti+" #leaderChangeBtn"]=this.confCharaChange;a[b.cgti+" #helperChangeBtn"]=this.confCharaChange;a[b.cgti+" #poseChangeBtn"]=this.standPoseChange;a[b.cgti+" .miniCharaWrap"]=this.miniCharaMotion;
return a},miniCharaMotion:function(a){a.preventDefault();b.isScrolled()||(a={},a.id=String(c.charaDataView.model.toJSON().card.miniCharaNo),a.x=400,a.y=Math.floor(b.doc.getElementsByTagName("body")[0].offsetHeight/2)+95,a.fade=.3,a.animeList=["reaction",b.miniCharaStandPose],d.showMiniChara(a))},standPoseChange:function(a){a.preventDefault();b.isScrolled()||(d.startSe(1008),a="wait"==b.miniCharaStandPose?"stance":"wait",localStorage.setItem("miniCharaStandPose",a),b.miniCharaStandPose=a,a={},a.id=
String(c.charaDataView.model.toJSON().card.miniCharaNo),a.x=400,a.y=Math.floor(b.doc.getElementsByTagName("body")[0].offsetHeight/2)+95,a.fade=.3,a.animeList=[b.miniCharaStandPose],d.showMiniChara(a))},initialize:function(a){this.template=p.template(r);this.createDom()},render:function(){this.$el.html(this.template(f.getPageJson()));return this},createDom:function(){b.content.prepend(this.render().el);this.createView()},createView:function(){v.createCardList();b.setGlobalView();b.firstNaviCheck(e);
b.tapBlock(!1);b.ready.hide()},confCharaChange:function(a){a.preventDefault();if(!b.isScrolled()){a=a.currentTarget.getAttribute("data-type");var m=c.charaDataView.model.toJSON(),d=m.card.cardName,e={};e.userCardId=m.userCardId;f.ajaxPost(b.linkList[a],e,function(a){b.responseSetStorage(a);n(m);new b.PopupClass({title:"Changed",content:d+" has been set as your favorite.",closeBtnText:"Close"})})}},touch:function(a){a.preventDefault();b.isScrolled()}}),n=function(a){var c=b.doc.querySelector("#leaderChangeBtn");
b.storage.gameUser.toJSON().leaderId==a.userCardId?b.addClass(c,"off"):b.removeClass(c,"off")};return{needModelIdObj:[{id:"user"},{id:"gameUser"},{id:"userStatusList"},{id:"itemList"},{id:"userItemList"},{id:"userCharaList"},{id:"userCardList"},{id:"userDoppelList"},{id:"userLive2dList"},{id:"userGiftList"},{id:"pieceList"},{id:"userPieceList"},{id:"userPieceSetList"},{id:"userDeckList"},{id:"userChapterList"},{id:"userSectionList"},{id:"userQuestBattleList"}],charaSelect:function(a){c.charaSelect(a);
n(a.model.toJSON());c.showMiniChara(a.model.toJSON().card.miniCharaNo)},fetch:function(a){l=a?a:null;f.pageModelGet(this.needModelIdObj)},init:function(){b.questBattleModel=null;e=f.getPageJson();b.setStyle(t+u);g=new w;c.charaViewInit(l);k=h=1;if(e.campaignList){var a=b.campaignParse(e.campaignList);a.POINT_UP&&a.POINT_UP.CARD_COMPOSE&&(a.POINT_UP.CARD_COMPOSE.EXCELLENT||a.POINT_UP.CARD_COMPOSE.GREAT)&&(h=a.POINT_UP.CARD_COMPOSE.EXCELLENT||1,k=a.POINT_UP.CARD_COMPOSE.GREAT||1)}1===h&&1===k||b.addClass(b.doc.querySelector("#btnArea"),
"campaignIcon");a=c.charaDataView.model.toJSON().card.miniCharaNo;c.showMiniChara(a);b.tapBlock(!1)},startCommand:function(){d.changeBg("web_common.ExportJson");d.startBgm(b.settingBgm)},remove:function(a){g&&(l=null,c.charaViewRemove(),g.trigger("remove"),g.remove());a()},charaCommon:function(){return c}}});