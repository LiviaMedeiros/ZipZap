define("underscore backbone backboneCommon ajaxControl QuestUtil text!template/quest/QuestDetailPopup.html command".split(" "),function(g,l,a,m,h,n,k){return l.View.extend({tagName:"li",className:function(){return"quest se_decide"},events:function(){var c={};c[a.cgti+" .touchObj"]=this.questStart;c[a.cgti+" .treasure"]=this.popupQuestDetail;return c},initialize:function(a){this.popupInitFlag=!1;this.listenTo(this.parentView,"removeView",this.removeView);this.model.rewardCodeArr=[];a=h.dropItemJson(this.model);
a.firstClearReward&&(this.model.firstClearReward=a.firstClearReward);a.firstClearRewardName&&(this.model.firstClearRewardName=a.firstClearRewardName);a.firstClearRewardQuantity&&(this.model.firstClearRewardQuantity=a.firstClearRewardQuantity);a.addDropItem&&(this.model.addDropItem=a.addDropItem);a.addDropItemName&&(this.model.addDropItemName=a.addDropItemName);a.addDropItemQuantity&&(this.model.addDropItemQuantity=a.addDropItemQuantity);this.model.rewardCodeArr=a.list;this.model.rewardNameArr=a.nameList;
this.model.rewardQuantityArr=a.quantityList},render:function(){this.$el.html(this.template({model:this.model}));if("NORMAL"!==this.model.questBattle.consumeType)switch(this.model.questBattle.consumeType){case "FREE_AT_NOT_CLEAR":this.model.cleared?this.model.halfAp&&(this.model.overwriteAp=this.model.halfAp,a.addClass(this.el,"HALF_AP")):(this.model.overwriteAp="0",a.addClass(this.el,this.model.questBattle.consumeType))}else this.model.campaignFreeAtNotClear?(this.model.overwriteAp=0,a.addClass(this.el,
"FREE_AT_NOT_CLEAR")):this.model.halfAp&&(this.model.overwriteAp=this.model.halfAp,a.addClass(this.el,"HALF_AP"));!this.model.cleared&&this.model.questBattle.automationPossibleAtFirst&&a.addClass(this.el,"AUTO_FIRST");this.model.questBattle.limitTurn&&a.addClass(this.el,"limitTurn");this.el.dataset.scrollHash=this.model.questBattleId;return this},popupQuestDetail:function(c){c.preventDefault();if(!a.isScrolled()){var d=g.template(n);c=c.currentTarget.parentNode.querySelector(".questTitle").textContent;
new a.PopupClass({title:c?"Quest Information "+c:"Quest Information",content:"",exClass:"questDetail"},null,null,function(){});a.doc.getElementById("popupArea").getElementsByClassName("popupTextArea")[0].innerHTML=d({model:this.model});a.scrollSet("dropListWrap","dropList");$(".dropList img").on(a.cgti,function(b){b.preventDefault();a.isScrolled()||(a.removeClass(a.doc.querySelector(".dropList .show"),"show"),setTimeout(function(){a.addClass(b.currentTarget.parentNode,"show")},10))});k.getBaseData(a.getNativeObj())}},
questStart:function(c){c.preventDefault();if(!a.isScrolled()){var d=this.parentView.modelSend(c);"HARD"==this.model.questBattle.questBattleType&&"HARD"!==a.mainQuestMode&&(a.mainQuestMode="HARD");var b=d.section;this.model.questType=b.questType;this.model.chapterNoForView=b.chapterNoForView;this.model.genericIndex=b.genericIndex;this.model.title=b.title;this.model.battleTitle=c.currentTarget.parentNode.querySelector(".questTitle").textContent;this.model.userQuestAdventureList=m.getPageJson().userQuestAdventureList;
b.secret&&(this.model.secret=b.secret);d.eventObj&&(this.model.eventObj=d.eventObj,this.model.eventObj.parameter=b.titleParameter?b.titleParameter:b.parameter);if("MAIN"!==b.questType&&"SUB"!==b.questType&&"CHARA"!==b.questType&&"COSTUME"!==b.questType){console.log(c.currentTarget.getElementsByClassName("questIndex"));var e=c.currentTarget.parentNode.getElementsByClassName("questIndex").length?c.currentTarget.parentNode.getElementsByClassName("questIndex")[0].dataset.questindex:0,b=b.questBattleList?
b.questBattleList[e-1]:d.questBattle?d.questBattle:null;if(!b){k.nativeReload("#/TopPage");return}"ITEM"==b.questBattle.consumeType?(this.model.needItemNum=b.questBattle.needItemNum,this.model.useItemId=b.questBattle.useItemId):this.model.ap=b.questBattle.ap;this.model.difficulty=b.questBattle.difficulty;this.model.canPlay=b.canPlay}else this.model.ap=b.ap?b.ap:this.model.questBattle.ap,this.model.difficulty=b.difficulty?b.difficulty:this.model.questBattle.difficulty,"HARD"==a.mainQuestMode&&"MAIN"==
b.questType&&this.model.questBattle&&this.model.questBattle.ap&&(this.model.ap=this.model.questBattle.ap,this.model.difficulty=this.model.questBattle.difficulty,this.model.mainQuestMode="HARD");a.questBattleModel=this.model;if(a.tutorialId)a.tutorialUtil[a.tutorialId]();else if((this.model.questType&&"COMPOSE"==this.model.questType||this.model.questType&&"MATERIAL"==this.model.questType)&&a.getClientTime(),e=a.globalMenuView.getUserStatus(),b=this.model.overwriteAp||0===this.model.overwriteAp?Number(this.model.overwriteAp):
this.model.ap,e=e.ACP,b&&e<b){new a.PopupClass({title:"Confirm",content:"Insufficient AP",closeBtnText:"Cancel"});var g=this;a.globalMenuView.apPopup(c,"Insufficient AP",function(){g.questStart(c)})}else{if(this.model.needItemNum&&this.model.useItemId&&(b=a.storage.userItemList.findWhere({itemId:this.model.useItemId}),e=this.model.needItemNum,(b?b.toJSON().quantity:0)<e)){new a.PopupClass({title:"Insufficient Items",content:"Gather required items for each quest\x3cbr\x3eby completing the following:\x3cbr\x3eMain, Another Story, Magical Girl, and Daily quests.",
closeBtnText:"Cancel",popupType:"typeC"});return}var f="#/SupportSelect";this.model.questBattle.skipHelper&&(a.questSupportModel=null,f="#/DeckFormation/quest");d.nextPage&&(a.questSupportModel=null,f=d.nextPage);this.model.questBattle.onlyCharaIds||this.model.questBattle.containCharaIds?(d=h.charaConditionText(this.model.questBattle),new a.PopupClass({title:"Quest Conditions",popupId:"charaConditionPopup",content:d,decideBtnText:"OK",canClose:!1},null,function(){$("#charaConditionPopup .decideBtn").on(a.cgti,
function(a){$("#charaConditionPopup .decideBtn").off();location.href=f})})):(a.scrollMemory=this.model.questBattleId,location.href=f)}}},removeView:function(){this.trigger("removeView");this.off();this.remove()}})});