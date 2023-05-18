const slider=document.getElementById("SetFlowSlider");let time=null,dt=null;const Ln1="km/h",Ln2="l/ha",Ln3="l/min",Ln4="ha",Ln5="km",Ln6="RESET",Ln7="STOP",Ln8="START",Ln9="NOT READY",Ln10="READY",Ln11="TESTING",Ln12="MANUAL MODE",Ln13="FLOW FAULT",Ln14="PUMP OVERLOAD",Ln15="RUN",Ln16="bar",Ln17="l",C1="#0078DB",C2="#00325B",C3="#004800",C4="#E8E8DF",C5="#90E900",C6="#FCF3D5",C7="#F0A912",C8="#3EAB0C",C9="#003816",CA="#006600",CB="#BC0028",CC="#660000",CD="#ABAB9A",CE="#004000",CF="#009D3A",C10="#12CEF0";function OnOfInd(n,e,t,d,l){let i=document.getElementById(n);i.style=e&t?"background-color:"+d:"background-color:"+l}function Inn(n,e){document.getElementById(n).innerHTML=e}function RInd(){let o,r,e,I=0,a="12.6",c=Ln1,C="00000",s={drCm:!0,drTx:!0,odTx:!0,fnFa:"Arial",fnSt:C3,bdWi:1,IndWi:15,BrdCl:C4,IndCl:C5,IndInCl:C3,FrCl:C4,StA:-220,EnA:40,MxInd:20,MnInd:0};function l(){var n,e,t,d,l,i;o.clearRect(0,0,r.width,r.height),o.save(),o.fillStyle=s.BrdCl,o.beginPath(),o.arc(r.width/2,r.height/2,r.width/2,0,2*Math.PI),o.closePath(),o.fill(),o.restore(),l=r.width/2,i=r.height/2,n=r.width/2-s.bdWi,e=(I*(s.EnA-s.StA)/100+s.StA)*Math.PI/180,t=s.StA*Math.PI/180,d=s.EnA*Math.PI/180,o.save(),o.fillStyle=s.IndCl,o.moveTo(l,i),o.beginPath(),o.lineTo(l+n*Math.cos(t),i+n*Math.sin(t)),o.arc(l,i,n,t,e),o.lineTo(l,i),o.closePath(),o.fill(),o.fillStyle=s.IndInCl,o.moveTo(l,i),o.beginPath(),o.lineTo(l+n*Math.cos(e),i+n*Math.sin(e)),o.arc(l,i,n,e,d),o.lineTo(l,i),o.closePath(),o.fill(),o.restore(),d=r.width/2,l=r.height/2,i=r.width/2-s.bdWi-.16*d,o.save(),o.fillStyle=s.FrCl,o.beginPath(),o.arc(d,l,i,0,2*Math.PI),o.closePath(),o.fill(),o.restore(),s.drTx&&(o.save(),s.fontSize=parseFloat(r.width/2.9)+"px",o.font=u(),o.fillStyle=s.fnSt,o.textAlign="center",o.textBaseline="middle",o.fillText(a,r.width/2,r.height/2*.99),s.drCm&&(s.fontSize=parseFloat(r.width/9)+"px",o.font=u(),o.fillText(c,r.width/2,r.height/2*1.42)),s.odTx&&(s.fontSize=parseFloat(r.width/7)+"px",o.font=u(),o.fillText(C,r.width/2,r.height/2*1.73)),o.restore())}function i(n,e,t){return Math.min(Math.max(n,e),t)}function u(){return s.fontSize+" "+s.fnFa}return{init:function(n){if(!n.TC)throw"empty or invalid container";e=n.TC,I=i(n.Ind,0,100),n.op&&(s.drCm=!1!==n.op.drCm,s.drTx=!1!==n.op.drTx,s.fnFa=n.op.fnFa||s.fnFa,s.fontSize=n.op.fontSize||s.fontSize,s.fnSt=n.op.fnSt||s.fnSt,s.bdWi=n.op.bdWi||s.bdWi,s.IndWi=n.op.IndWi||s.IndWi,s.BrdCl=n.op.BrdCl||s.BrdCl,s.IndCl=n.op.IndCl||s.IndCl,s.FrCl=n.op.FrCl||s.FrCl,s.IndInCl=n.op.IndInCl||s.IndInCl,s.StA=n.op.StA||s.StA,s.EnA=n.op.EnA||s.EnA,s.MxInd=n.op.MxInd,s.MnInd=n.op.MnInd),function(){r=document.createElement("canvas");var n=e.getBoundingClientRect();r.width=n.width-1,r.height=n.height-1,o=r.getContext("2d"),e.appendChild(r)}(),l()},SetIndicator:function(n,e,t,d){n=(n-s.MnInd)/(s.MxInd-s.MnInd)*100;I=i(n,0,100),a=e,c=t,C=d,l()},SMaxInd:function(n){s.MxInd=n}}}function PInd(){let d,l,e,i=0;let o="1000",r="l",I={drCm:!0,drTx:!0,fnFa:"Arial",fnSt:C3,bdWi:1,IndWi:15,BrdCl:C4,IndCl:C5,IndInCl:C3,FrCl:C4,StartLevel:0,EndLevel:100,MxInd:20,MnInd:0};function t(){var n=l.width-I.bdWi,e=l.height-I.bdWi,t=e*(100-i)/100;d.clearRect(0,0,l.width,l.height),d.save(),d.fillStyle=I.BrdCl,d.beginPath(),d.fillRect(0+I.bdWi,0+I.bdWi,l.width-I.bdWi,l.height-I.bdWi),d.closePath(),d.fill(),d.restore(),d.save(),d.fillStyle=I.IndCl,d.fillRect(0,t,n,e),d.restore(),I.drTx&&(d.save(),I.fontSize=parseFloat(l.width/2.5)+"px",d.font=c(),d.fillStyle=I.fnSt,d.textAlign="center",d.textBaseline="middle",d.fillText(o,l.width/2,l.height/2*1.05),I.drCm&&(I.fontSize=parseFloat(l.width/4.5)+"px",d.font=c(),d.fillText(r,l.width/2,l.height/2*1.8)),d.restore())}function a(n,e,t){return Math.min(Math.max(n,e),t)}function c(){return I.fontSize+" "+I.fnFa}return{init:function(n){if(!n.TC)throw"empty or invalid container";e=n.TC,i=a(n.IndLv,0,100),n.op&&(I.drCm=!1!==n.op.drCm,I.drTx=!1!==n.op.drTx,I.fnFa=n.op.fnFa||I.fnFa,I.fnSt=n.op.fnSt||I.fnSt,I.bdWi=n.op.bdWi||I.bdWi,I.IndWi=n.op.IndWi||I.IndWi,I.BrdCl=n.op.BrdCl||I.BrdCl,I.IndCl=n.op.IndCl||I.IndCl,I.FrCl=n.op.FrCl||I.FrCl,I.IndInCl=n.op.IndInCl||I.IndInCl,I.MxInd=n.op.MxInd,I.MnInd=n.op.MnInd),function(){l=document.createElement("canvas");var n=e.getBoundingClientRect();l.width=n.width,l.height=n.height,d=l.getContext("2d"),e.appendChild(l)}()},STkInd:function(n){var e=(n-I.MnInd)/(I.MxInd-I.MnInd)*100;i=a(e,0,100),o=n.toFixed(0),r=Ln17,t()},SbCl:function(n){I.BrdCl=n,t()},SPrInd:function(n){var e=(n-I.MnInd)/(I.MxInd-I.MnInd)*100;i=a(e,0,100),o=n.toFixed(1),r=Ln16,t()},SMaxInd:function(n){I.MxInd=n}}}document.getElementById("StatusInfo").innerHTML=Ln9,document.getElementById("ResetBottom").innerHTML=Ln6,document.getElementById("StopBottom").innerHTML=Ln7,document.getElementById("StartBottom").innerHTML=Ln8;let SpInd=new RInd;SpInd.init({TC:document.getElementById("SpeedInd"),Ind:75,op:{fontSize:64,fnSt:C2,bdWi:2,IndWi:20,BrdCl:C6,IndCl:CF,IndInCl:CD,FrCl:C6,MxInd:20,MnInd:0}});let TkInd=new PInd;TkInd.init({TC:document.getElementById("FluidInd"),IndLv:75,op:{fnSt:C2,BrdCl:C6,IndCl:C10,IndInCl:CE,FrCl:C6,MxInd:1e3,MnInd:0}});let PrInd=new PInd;PrInd.init({TC:document.getElementById("PressInd"),IndLv:45,op:{fnSt:C2,BrdCl:C6,IndCl:C7,IndInCl:CE,FrCl:C6,MxInd:6,MnInd:0}});let PuInd=new RInd;PuInd.init({TC:document.getElementById("PumpInd"),Ind:45,op:{fnSt:C2,BrdCl:C6,IndCl:"#E68211",IndInCl:CD,FrCl:C6,MxInd:100,MnInd:0}});let FlInd=new RInd;if(FlInd.init({TC:document.getElementById("FlowInd"),Ind:45,op:{fnSt:"#004FB5",BrdCl:C6,IndCl:"#1D77DD",IndInCl:CD,FrCl:C6,MxInd:720,MnInd:0}}),window.EventSource){let n=new EventSource("/events");n.addEventListener("open",function(n){console.log("Events Connected")},!1),n.addEventListener("error",function(n){n.target.readyState!=EventSource.OPEN&&console.log("Events Disconnected")},!1),n.addEventListener("message",function(n){},!1),n.addEventListener("SetData",function(n){var e=JSON.parse(n.data);let t=e.A;var d=t.indexOf("#",0),l=t.slice(0,d),i=Number(l)/10,n=t.indexOf("#",d+1),l=t.slice(d+1,n);Number(l);l=t.slice(n+1),i=Number(l)/10,SpInd.SMaxInd(i),t=e.B,d=t.indexOf("#",0),l=t.slice(0,d),i=Number(l)/10,slider.value=i,n=t.indexOf("#",d+1),l=t.slice(d+1,n),Number(l),slider.max=i,FlInd.SMaxInd(i),t=e.C,d=t.indexOf("#",0),n=t.indexOf("#",d+1),l=t.slice(d+1,n),i=Number(l)/10,PuInd.SMaxInd(i),t=e.D,d=t.indexOf("#",0),l=t.slice(0,d),i=Number(l)/10,PrInd.SMaxInd(i),n=t.indexOf("#",d+1),l=t.slice(n+1),i=Number(l),TkInd.SMaxInd(i),t=e.E,d=t.indexOf("#",0),n=t.indexOf("#",d+1),l=t.slice(d+1,n),Inn("LineInfo",(i=Number(l)/10).toFixed(1)+" m"),t=e.F,d=t.indexOf("#",0),n=t.indexOf("#",d+1),l=t.slice(n+1),0==(i=Number(l))&&(Ln1="km/h",Ln2="l/ha",Ln3="l/min",Ln4="ha",Ln5="km",Ln6="RESET",Ln7="STOP",Ln8="START",Ln9="NOT READY",Ln10="READY",Ln11="TESTING",Ln12="MANUAL MODE",Ln13="FLOW FAULT",Ln14="PUMP OVERLOAD",Ln15="RUN",Ln16="bar",Ln17="l"),1==i&&(Ln1="км/ч",Ln2="л/га",Ln3="л/мин",Ln4="га",Ln5="км",Ln6="СБРОС",Ln7="СТОП",Ln8="СТАРТ",Ln9="НЕ ГОТОВ",Ln10="ГОТОВ",Ln11="ТЕСТИРОВАНИЕ",Ln12="РУЧНОЙ РЕЖИМ",Ln13="ОШИБКА ПОТОКА",Ln14="НАСОС ПЕРЕГРУЖЕН",Ln15="РАБОТА",Ln16="бар",Ln17="л"),Inn("StatusInfo",Ln9),Inn("ResetBottom",Ln6),Inn("StopBottom",Ln7),Inn("StartBottom",Ln8),Inn("FlowInf",slider.value+" "+Ln2)},!1),n.addEventListener("NewData",function(n){var e=JSON.parse(n.data);let t=e.A,d=t,l=document.getElementById("ConnectLamp");d="#"==t[0]?(l.style="background-color:#6ACDFF",1):(l.style="background-color:"+C9,0),Inn("TimeStamp",o=t[1]+t[2]+":"+t[3]+t[4]+":"+t[5]+t[6]),Inn("SquareInfo",o=t[7]+t[8]+":"+t[9]+t[10]+":"+t[11]+t[12]),t=e.B;var i=t.indexOf("#",0),o=t.slice(0,i),r=Number(o)/10,I=t.indexOf("#",i+1);o=t.slice(i+1,I);var a=Number(o)/10;o=t.slice(I+1);n=Number(o)/10;SpInd.SetIndicator(r,r.toFixed(1),Ln1,a.toFixed(1)+" "+Ln5),t=e.C,i=t.indexOf("#",0),o=t.slice(0,i),r=Number(o)/10,I=t.indexOf("#",i+1),o=t.slice(i+1,I),a=Number(o)/10,PuInd.SetIndicator(r,r.toFixed(1),Ln3,a.toFixed(1)+" A"),t=e.D,i=t.indexOf("#",0),I=t.indexOf("#",i+1),o=t.slice(i+1,I),r=Number(o)/10,FlInd.SetIndicator(r,r.toFixed(0),Ln2,n.toFixed(0)+" "+Ln4),t=e.E,i=t.indexOf("#",0),o=t.slice(0,i),r=Number(o)/10,PrInd.SPrInd(r),I=t.indexOf("#",i+1),o=t.slice(I+1),r=Number(o),TkInd.STkInd(r),t=e.F,i=t.indexOf("#",0),I=t.indexOf("#",i+1),o=t.slice(i+1,I),OnOfInd("PA",r=Number(o),1,C8,C9),OnOfInd("PB",r,1,C8,C9),OnOfInd("PC",r,1,C8,C9),OnOfInd("PD",r,1,C8,C9),o=t.slice(I+1),1&(r=Number(o))?OnOfInd("SW1",r,16,C8,CB):OnOfInd("SW1",1,1,C1,CB),2&r?OnOfInd("SW2",r,32,C8,CB):OnOfInd("SW1",1,1,C1,CB),4&r?OnOfInd("SW1",r,64,C8,CB):OnOfInd("SW1",1,1,C1,CB),t=e.S,i=t.indexOf("#",0),o=t.slice(0,i),Inn("StatusInfo",1&(r=Number(o))?Ln10:Ln9),2&r&&Inn("StatusInfo",Ln15),OnOfInd("ConnectGPS",r,16,C7,C9),OnOfInd("StartBottom",r,4,C8,CA),OnOfInd("StopBottom",r,8,CB,CC),32&r&&Inn("StatusInfo",Ln12),I=t.indexOf("#",i+1),o=t.slice(i+1,I),r=Number(o),l=document.getElementById("StatusInfo"),1&r?(l.style="background-color:"+CB,l.innerHTML=Ln13):l.style="background-color:"+C1,8&r?(l.style="background-color:"+CB,l.innerHTML=Ln14):l.style="background-color:#"+C1,TkInd.SbCl(C6),64&r&&d&&TkInd.SbCl(C7),128&r&&d&&TkInd.SbCl(CB)},!1)}TkInd.STkInd(500),PrInd.SPrInd(1);let v=7;function StopF(){let n=new XMLHttpRequest;n.open("GET","/STOP",!0),n.send(),console.log("StopBottom")}SpInd.SetIndicator(v,v.toFixed(1),"km/h","10.2 km"),v=17,PuInd.SetIndicator(v,v.toFixed(1),"l/min","18.2 A"),v=170,FlInd.SetIndicator(v,v.toFixed(0),"l/ha","15.7 ha");let setflow=100;slider.oninput=function(){setflow=slider.value,Inn("FlowInf",setflow+" "+Ln2)};let BST=document.getElementById("StartBottom"),BRS=document.getElementById("ResetBottom"),lp=!1,lt=null,longtarget=null,cancel=function(n){null!==lt&&(clearTimeout(lt),lt=null),this.classList.remove("lp")},clickstart=function(n){if(null!==lt&&(clearTimeout(lt),lt=null),this.classList.remove("lp"),lp)return!1;let e=new XMLHttpRequest;setflow=slider.value,e.open("GET","/START?SFL1="+setflow,!0),e.send()},clearerror=function(n){if(null!==lt&&(clearTimeout(lt),lt=null),this.classList.remove("lp"),lp)return!1;var e=new XMLHttpRequest;e.open("GET","/CLEARERROR",!0),e.send()},manual=function(n){if("click"!==n.type||0===n.button)return lp=!1,this.classList.add("lp"),null===lt&&(lt=setTimeout(function(){let n=new XMLHttpRequest;setflow=slider.value,n.open("GET","/MANUAL?SFL1="+setflow,!0),n.send(),lp=!0},1500)),!1},resettank=function(n){if("click"!==n.type||0===n.button)return lp=!1,this.classList.add("lp"),null===lt&&(lt=setTimeout(function(){let n=new XMLHttpRequest;n.open("GET","/RESET",!0),n.send(),lp=!0},1500)),!1};BST.addEventListener("mousedown",manual),BST.addEventListener("touchstart",manual),BST.addEventListener("click",clickstart),BST.addEventListener("mouseout",cancel),BST.addEventListener("touchend",cancel),BST.addEventListener("touchleave",cancel),BST.addEventListener("touchcancel",cancel),BRS.addEventListener("mousedown",resettank),BRS.addEventListener("touchstart",resettank),BRS.addEventListener("click",clearerror),BRS.addEventListener("mouseout",cancel),BRS.addEventListener("touchend",cancel),BRS.addEventListener("touchleave",cancel),BRS.addEventListener("touchcancel",cancel);