define(["underscore","backbone","backboneCommon","ajaxControl"],function(k,h,r,t){var b={};h.Collection.extend();h.Model.extend();b.exArr=[0,100,210,330,460,600,760,950,1180,1460,1800,2210,2690,3240,3860,4550,5310,6140,7040,8010,9050,10160,11340,12590,13910,15300,16760,18290,19890,21560,23300,25110,26990,28940,30960,33050,35210,37440,39740,42110,44550,47060,49640,52290,55010,57800,60660,63590,66590,69660];b.parExArr=[0,100,110,120,130,140,160,190,230,280,340,410,480,550,620,690,760,830,900,970,1040,
1110,1180,1250,1320,1390,1460,1530,1600,1670,1740,1810,1880,1950,2020,2090,2160,2230,2300,2370,2440,2510,2580,2650,2720,2790,2860,2930,3E3,3070];b.getComposeExp=function(a,e,g,f){var c=0,d=[100,200,500,1E3];k.each(g,function(a){switch(a.piece.rank){case "RANK_1":c+=d[0]+(a.experience+b.exArr[a.level-1])/10;break;case "RANK_2":c+=d[1]+(a.experience+b.exArr[a.level-1])/10;break;case "RANK_3":c+=d[2]+(a.experience+b.exArr[a.level-1])/10;break;case "RANK_4":c+=d[3]+(a.experience+b.exArr[a.level-1])/10;
break;default:c+=0}});return c};b.getNextExp=function(a,e){return b.parExArr[e]-a};b.getGuageLength=function(a,e){a=Math.floor(a/b.parExArr[e]*100);return 100<a?100:a};b.getComposeFactor=function(a){switch(a){case "RANK_1":return 1;case "RANK_2":return 2;case "RANK_3":return 3;case "RANK_4":return 4}return 60};var l=function(a){switch(a){case "RANK_1":return 10;case "RANK_2":return 15;case "RANK_3":return 20;case "RANK_4":return 30;case "RANK_5":return 50;default:return 30}};b.getMaxLevel=function(a,
e){e=4<e?4:e;a=l(a)+5*e;50<a&&(a=50);return a};var m=[1,1,1.05,1.11,1.16,1.22,1.27,1.33,1.38,1.44,1.5,1.55,1.6,1.65,1.7,1.75,1.8,1.85,1.9,1.95,2,2.05,2.1,2.15,2.2,2.25,2.3,2.35,2.4,2.45,2.5],n=[1,1,1.03,1.07,1.1,1.14,1.17,1.21,1.25,1.28,1.32,1.35,1.39,1.42,1.46,1.5,1.55,1.6,1.65,1.7,1.75,1.8,1.85,1.9,1.95,2,2.05,2.1,2.15,2.2,2.25,2.3,2.35,2.4,2.45,2.5],p=[1,1,1.02,1.05,1.07,1.1,1.13,1.15,1.18,1.21,1.23,1.26,1.28,1.31,1.34,1.36,1.39,1.42,1.44,1.47,1.5,1.55,1.6,1.65,1.7,1.75,1.8,1.85,1.9,1.95,2,2.05,
2.1,2.15,2.2,2.25,2.3,2.35,2.4,2.45,2.5],q=[1,1,1.01,1.03,1.05,1.06,1.08,1.1,1.12,1.13,1.15,1.17,1.18,1.2,1.22,1.24,1.25,1.27,1.29,1.31,1.32,1.34,1.36,1.37,1.39,1.41,1.43,1.44,1.46,1.48,1.5,1.55,1.6,1.65,1.7,1.75,1.8,1.85,1.9,1.95,2,2.05,2.1,2.15,2.2,2.25,2.3,2.35,2.4,2.45,2.5];b.getParam=function(a,e){var b=a.piece.attack|0,f=a.piece.defense|0,c=a.piece.rank,c="RANK_1"===c?m:"RANK_2"===c?n:"RANK_3"===c?p:q,d={};d.hp=Math.floor((a.piece.hp|0)*c[e])|0;d.attack=Math.floor(b*c[e])|0;d.defense=Math.floor(f*
c[e])|0;return d};b.priceArr=[0,100,300,1E3,5E3,2E3];b.priceCalc=function(a,e){a=a.split("_")[1];4<e&&(e=4);return b.priceArr[a]*(e+1)};b.getEffect=function(a){for(var b=4>a.lbCount?a.piece.pieceSkill:a.piece.pieceSkill2,g=!0,f=1,c=[];g;){if(b["art"+f]){var d;switch(b["art"+f].verbCode){case "HEAL":case "RESURRECT":case "REVOKE":d="HEAL";break;case "BUFF":case "BUFF_DYING":case "BUFF_HPMAX":case "BUFF_PARTY_DIE":case "BUFF_DIE":d="BUFF";break;case "DEBUFF":case "DEBUFF_DIE":d="ANTI";break;case "CONDITION_GOOD":case "IGNORE":case "ENCHANT":d=
"EFFECT";break;case "CONDITION_BAD":d="BADSTATUS";break;default:d="ETC"}if(1148===a.pieceId||1147===a.pieceId)d="ETC";""!==d&&-1===c.indexOf(d)&&c.push(d)}else g=!1;f++}0===c.length&&(c=["ETC"]);return c};return b});