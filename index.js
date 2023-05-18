const slider=document.getElementById("SetFlowSlider");
let time=null;
let dt=null;
const Ln1="km/h";
const Ln2="l/ha";
const Ln3="l/min";
const Ln4="ha";
const Ln5="km";
const Ln6="RESET";
const Ln7="STOP";
const Ln8="START";
const Ln9="NOT READY";
const Ln10="READY";
const Ln11="TESTING";
const Ln12="MANUAL MODE";
const Ln13="FLOW FAULT";
const Ln14="PUMP OVERLOAD";
const Ln15="RUN";
const Ln16="bar";
const Ln17="l";
const C1="#0078DB";
const C2="#00325B";
const C3="#004800";
const C4="#E8E8DF";
const C5="#90E900";
const C6="#FCF3D5";
const C7="#F0A912";
const C8="#3EAB0C";
const C9="#003816";
const CA="#006600";
const CB="#BC0028";
const CC="#660000";
const CD="#ABAB9A";
const CE="#004000";
const CF="#009D3A";
const C10="#12CEF0";
document.getElementById("StatusInfo").innerHTML=Ln9 ;
document.getElementById("ResetBottom").innerHTML=Ln6 ;
document.getElementById("StopBottom").innerHTML=Ln7 ;
document.getElementById("StartBottom").innerHTML=Ln8 ;
function OnOfInd(IDi,z,m,co,cf){
    let c = document.getElementById(IDi); 
    if(z&m){
        c.style="background-color:"+co;
    } else {
        c.style="background-color:"+cf;
    };
};
function Inn(IDi,TS){
    document.getElementById(IDi).innerHTML=TS;
}; 
function RInd() {
    let cnx;
    let cnv;
    let TC;
    let Ind=0;
    let TxInd="12.6";
    let TxCom=Ln1 ;
    let TxOdo="00000";
    let op={
        drCm:true,
        drTx:true,
        odTx:true,
        fnFa:"Arial",
        fnSt:C3,
        bdWi:1,
        IndWi:15,   
        BrdCl:C4, 
        IndCl:C5,
        IndInCl:C3,
        FrCl:C4,
        StA:-220,
        EnA:40,
        MxInd:20,
        MnInd:0
    };
    function setupCanvas(){
        cnv=document.createElement('canvas');
        let rect=TC.getBoundingClientRect();
        cnv.width=rect.width-1;
        cnv.height=rect.height-1;
        cnx=cnv.getContext("2d");
        TC.appendChild(cnv);
    }
    function draw(){
        cnx.clearRect(0,0,cnv.width,cnv.height);
        drawBackground();
        drawIndicator();
        drawFront();
        if (op.drTx){
            drTx();
        }
    }
    function drawBackground(){
        cnx.save();
        cnx.fillStyle=op.BrdCl;
        cnx.beginPath();
        cnx.arc(cnv.width/2,cnv.height/2,cnv.width/2,0,2*Math.PI);
        cnx.closePath();
        cnx.fill();
        cnx.restore();
    }
    function drawIndicator(){
        let CX=cnv.width/2;
        let CY=cnv.height/2;
        let RI=cnv.width/2-op.bdWi;
        let IndicatorAngle=(Ind*(op.EnA-op.StA)/100+op.StA)*Math.PI/180 ;
        let AngleBegin=op.StA*Math.PI/180;
        let AngleEnd=op.EnA*Math.PI/180 ;
        cnx.save();
        cnx.fillStyle=op.IndCl;
        cnx.moveTo(CX,CY) ;
        cnx.beginPath();
        cnx.lineTo(CX+RI*Math.cos(AngleBegin),CY+RI*Math.sin(AngleBegin));
        cnx.arc(CX,CY,RI,AngleBegin,IndicatorAngle);
        cnx.lineTo(CX,CY);
        cnx.closePath();
        cnx.fill();
        cnx.fillStyle = op.IndInCl;
        cnx.moveTo(CX,CY) ;
        cnx.beginPath();
        cnx.lineTo(CX+RI*Math.cos(IndicatorAngle),CY+RI*Math.sin(IndicatorAngle));
        cnx.arc(CX,CY,RI,IndicatorAngle,AngleEnd);
        cnx.lineTo(CX,CY);
        cnx.closePath();
        cnx.fill();
        cnx.restore();
    }
    function drawFront(){
        let CX=cnv.width/2;
        let CY=cnv.height/2;
        let RT=cnv.width/2-op.bdWi-CX*0.16;
        cnx.save();
        cnx.fillStyle = op.FrCl;
        cnx.beginPath();
        cnx.arc(CX,CY,RT,0,2*Math.PI);
        cnx.closePath();
        cnx.fill();
        cnx.restore();
    }
    function drTx(){
        cnx.save();
        op.fontSize=parseFloat(cnv.width/2.9)+"px";
        cnx.font=getFontSize();
        cnx.fillStyle=op.fnSt;
        cnx.textAlign="center";
        cnx.textBaseline='middle';
        cnx.fillText(TxInd,cnv.width/2,(cnv.height/2)*0.99);
        if (op.drCm){
            op.fontSize=parseFloat(cnv.width/9)+"px";
            cnx.font=getFontSize(); 
            cnx.fillText(TxCom,cnv.width/2,(cnv.height/2)*1.42);
        }
        if (op.odTx){
            op.fontSize=parseFloat(cnv.width/7)+"px";
            cnx.font=getFontSize(); 
            cnx.fillText(TxOdo,cnv.width/2,(cnv.height/2)*1.73);
        }
        cnx.restore();
    }
    function clamp(number,min,max){
        return Math.min(Math.max(number,min),max);
    };
    function getFontSize(){
        return op.fontSize+" "+op.fnFa;
    }
    return {
        init:function (env){
            if (!env.TC) throw "empty or invalid container";
            TC=env.TC;
            Ind=clamp(env.Ind,0,100);
            if (env.op){
                op.drCm=env.op.drCm === false ? false : true;
                op.drTx=env.op.drTx === false ? false : true;
                op.fnFa=env.op.fnFa||op.fnFa;
                op.fontSize=env.op.fontSize||op.fontSize;
                op.fnSt=env.op.fnSt||op.fnSt;   
                op.bdWi=env.op.bdWi||op.bdWi;
                op.IndWi=env.op.IndWi||op.IndWi;    
                op.BrdCl=env.op.BrdCl||op.BrdCl;
                op.IndCl=env.op.IndCl||op.IndCl;
                op.FrCl=env.op.FrCl||op.FrCl;
                op.IndInCl=env.op.IndInCl||op.IndInCl;
                op.StA=env.op.StA||op.StA;
                op.EnA=env.op.EnA||op.EnA;
                op.MxInd=env.op.MxInd;
                op.MnInd=env.op.MnInd;
            }
            setupCanvas();
            draw();
        },
        SetIndicator(S,R,E,T){
            let I=(S-op.MnInd)/(op.MxInd-op.MnInd)*100;
            Ind=clamp(I,0,100);
            TxInd=R;
            TxCom=E;
            TxOdo=T;
            draw();
        },
        SMaxInd(S){
            op.MxInd=S ;
        },
    };
}


function PInd(){
    let cnx;
    let cnv;
    let TC;
    let IndLv=0;
    let SetFlow=0;
    let TxInd="1000";
    let TxCom="l";
    let op={
        drCm:true,
        drTx:true,
        fnFa:"Arial",
        fnSt:C3,
        bdWi:1,
        IndWi:15,
        BrdCl:C4, 
        IndCl:C5,
        IndInCl:C3, 
        FrCl:C4,
        StartLevel:0,
        EndLevel:100,
        MxInd:20,
        MnInd:0
        };
    function setupCanvas(){
        cnv=document.createElement('canvas');
        let rect=TC.getBoundingClientRect();
        cnv.width=rect.width;
        cnv.height=rect.height;
        cnx=cnv.getContext("2d");
        TC.appendChild(cnv);
    }
    function drawBackground(){
        cnx.save();
        cnx.fillStyle=op.BrdCl;
        cnx.beginPath();
        cnx.fillRect(0+op.bdWi,0+op.bdWi,cnv.width-op.bdWi,cnv.height-op.bdWi);
        cnx.closePath();
        cnx.fill();
        cnx.restore();
    }
    function drawFluidLevel(){
        let CX=cnv.width-op.bdWi;
        let CY=cnv.height-op.bdWi;
        let Level=CY*(100-IndLv)/100;
        cnx.clearRect(0,0,cnv.width,cnv.height);
        drawBackground();
        cnx.save();
        cnx.fillStyle=op.IndCl;
        cnx.fillRect(0,Level,CX,CY);
        cnx.restore();
        if (op.drTx){drTx();} 
    }
    function drTx(){
        cnx.save();
        op.fontSize=parseFloat(cnv.width/2.5)+"px"  ;
        cnx.font=getFontSize();
        cnx.fillStyle=op.fnSt;
        cnx.textAlign="center";
        cnx.textBaseline='middle';
        cnx.fillText(TxInd,cnv.width/2,(cnv.height/2)*1.05);
        if (op.drCm){
            op.fontSize=parseFloat(cnv.width/4.5)+"px";
            cnx.font=getFontSize(); 
            cnx.fillText(TxCom,cnv.width/2,(cnv.height/2)*1.8);
        }
        cnx.restore();
    }
    function clamp(number,min,max){
        return Math.min(Math.max(number,min),max);
    }
    function getFontSize(){
        return op.fontSize+" "+op.fnFa;
    }
    return {
        init: function (env){
            if (!env.TC) throw "empty or invalid container";
            TC=env.TC;
            IndLv=clamp(env.IndLv,0,100);
            if (env.op){
                op.drCm=env.op.drCm === false ? false : true;
                op.drTx=env.op.drTx === false ? false : true;
                op.fnFa=env.op.fnFa || op.fnFa;
                op.fnSt=env.op.fnSt || op.fnSt;   
                op.bdWi=env.op.bdWi || op.bdWi;
                op.IndWi=env.op.IndWi || op.IndWi;    
                op.BrdCl=env.op.BrdCl || op.BrdCl;
                op.IndCl=env.op.IndCl || op.IndCl;
                op.FrCl=env.op.FrCl || op.FrCl;
                op.IndInCl=env.op.IndInCl || op.IndInCl;
                op.MxInd=env.op.MxInd;
                op.MnInd=env.op.MnInd;
            }
        setupCanvas();
        },
        STkInd(S){
            var Ind=(S-op.MnInd)/(op.MxInd-op.MnInd)*100;
            IndLv=clamp(Ind,0,100);
            TxInd=S.toFixed(0) ;
            TxCom=Ln17;
            drawFluidLevel();
        },
        SbCl(BK){
            op.BrdCl=BK;
            drawFluidLevel();
        },
        SPrInd(S){
            let Ind=(S-op.MnInd)/(op.MxInd-op.MnInd)*100;
            IndLv=clamp(Ind,0,100);
            TxInd=S.toFixed(1);
            TxCom=Ln16;
            drawFluidLevel();
        },
        SMaxInd(S) {
            op.MxInd=S ;
        },
    }
};

let SpInd = new RInd();
SpInd.init({
    TC:document.getElementById("SpeedInd"),
    Ind:75,
    op:{
        fontSize:64,
        fnSt:C2,
        bdWi:2,
        IndWi:20,
        BrdCl:C6,
        IndCl:CF,
        IndInCl:CD,
        FrCl:C6,
        MxInd:20,
        MnInd:0 
    }
});
let TkInd = new PInd();
TkInd.init({
    TC:document.getElementById("FluidInd"),
    IndLv:75,
    op:{
        fnSt:C2,
        BrdCl:C6,
        IndCl:C10,
        IndInCl:CE,
        FrCl:C6,
        MxInd:1000,
        MnInd:0 
    }
});
let PrInd = new PInd();
PrInd.init({
    TC:document.getElementById("PressInd"),
    IndLv:45,
    op:{
        fnSt:C2,
        BrdCl:C6, 
        IndCl:C7,
        IndInCl:CE, 
        FrCl:C6,
        MxInd:6.0,
        MnInd:0 
    }
});
let PuInd = new RInd();
PuInd.init({
    TC:document.getElementById("PumpInd"),
    Ind:45,
    op:{
        fnSt:C2,
        BrdCl:C6, 
        IndCl:"#E68211",
        IndInCl:CD, 
        FrCl:C6,
        MxInd:100,
        MnInd:0 
    }
});
let FlInd = new RInd();
FlInd.init({
    TC:document.getElementById("FlowInd"),
    Ind:45,
    op:{
        fnSt:"#004FB5",
        BrdCl:C6, 
        IndCl:"#1D77DD",
        IndInCl:CD, 
        FrCl:C6,
        MxInd:720,
        MnInd:0 
    }
});
if (!!window.EventSource) {
    let source = new EventSource('/events');
    source.addEventListener('open', function(e) {
        console.log("Events Connected");
    }, false);
    source.addEventListener('error', function(e) {
    if (e.target.readyState != EventSource.OPEN)
        {console.log("Events Disconnected");
    }
    }, false);
    source.addEventListener('message', function(e) {
    }, false);
    source.addEventListener('SetData', function(e) {
    //   console.log("SetData", e.data);

    let obj=JSON.parse(e.data);
    let s=(obj.A);
    let i=s.indexOf('#',0);var TS=s.slice(0,i);var z=Number(TS)/10; 
    let j=s.indexOf('#',i+1);TS=s.slice(i+1,j);var l=Number(TS)/10;
    TS=s.slice(j+1);z=Number(TS)/10;SpInd.SMaxInd(z); 
    s=(obj.B);
    i=s.indexOf('#',0);TS=s.slice(0,i);z=Number(TS)/10;slider.value=z;
    j=s.indexOf('#',i+1);TS=s.slice(i+1,j);l=Number(TS)/10;slider.max=z;FlInd.SMaxInd(z); 
    s=(obj.C);
    i=s.indexOf('#',0);j=s.indexOf('#',i+1);TS=s.slice(i+1,j);z=Number(TS)/10;PuInd.SMaxInd(z); 
    s=(obj.D);
    i=s.indexOf('#',0);TS=s.slice(0,i);z=Number(TS)/10;PrInd.SMaxInd(z);
    j=s.indexOf('#',i+1);TS=s.slice(j+1);z=Number(TS);TkInd.SMaxInd(z);  
    s=(obj.E);
    i=s.indexOf('#',0);j=s.indexOf('#',i+1);TS=s.slice(i+1,j);z=Number(TS)/10;
    Inn("LineInfo",z.toFixed(1)+" m");
    s=(obj.F);
    i=s.indexOf('#',0);j=s.indexOf('#',i+1);TS=s.slice(j+1);z=Number(TS);
    if (z==0){
        Ln1="km/h";
        Ln2="l/ha";
        Ln3="l/min";
        Ln4="ha";
        Ln5="km";
        Ln6="RESET";
        Ln7="STOP";
        Ln8="START";
        Ln9="NOT READY";
        Ln10="READY";
        Ln11="TESTING";
        Ln12="MANUAL MODE";
        Ln13="FLOW FAULT";
        Ln14="PUMP OVERLOAD";
        Ln15="RUN";
        Ln16="bar";
        Ln17="l";
    } ; 
    if (z==1){
        Ln1="км/ч";
        Ln2="л/га";
        Ln3="л/мин";
        Ln4="га";
        Ln5="км";
        Ln6="СБРОС";
        Ln7="СТОП";
        Ln8="СТАРТ";
        Ln9="НЕ ГОТОВ";
        Ln10="ГОТОВ";
        Ln11="ТЕСТИРОВАНИЕ";
        Ln12="РУЧНОЙ РЕЖИМ";
        Ln13="ОШИБКА ПОТОКА";
        Ln14="НАСОС ПЕРЕГРУЖЕН";
        Ln15="РАБОТА";
        Ln16="бар";
        Ln17="л";
    };
    Inn("StatusInfo",Ln9);
    Inn("ResetBottom",Ln6);
    Inn("StopBottom",Ln7);
    Inn("StartBottom",Ln8);
    Inn("FlowInf",slider.value+" "+Ln2);
    }, false);
    source.addEventListener('NewData', function(e){
//    console.log("NewData", e.data);

    let obj=JSON.parse(e.data);
    let s=(obj.A);
    let p=s;
    let c=document.getElementById("ConnectLamp");  
    if (s[0]=='#'){c.style="background-color:#6ACDFF";p=1;} else {c.style="background-color:"+C9;p=0;};
    let TS=s[1]+s[2]+':'+s[3]+s[4]+':'+s[5]+s[6]; 
    Inn("TimeStamp",TS);
    TS=s[7]+s[8]+':'+s[9]+s[10]+':'+s[11]+s[12];
    Inn("SquareInfo",TS); 
    s=(obj.B); 
    let i=s.indexOf('#',0);TS=s.slice(0,i);var z=Number(TS)/10; 
    let j=s.indexOf('#',i+1);TS=s.slice(i+1,j);var l=Number(TS)/10;
    TS=s.slice(j+1);var ha=Number(TS)/10;  
    SpInd.SetIndicator(z,z.toFixed(1),Ln1,l.toFixed(1)+" "+Ln5); 
    s=(obj.C);
    i=s.indexOf('#',0);TS=s.slice(0,i);z=Number(TS)/10;
    j=s.indexOf('#',i+1);TS=s.slice(i+1,j);l=Number(TS)/10; 
    PuInd.SetIndicator(z,z.toFixed(1),Ln3,l.toFixed(1)+" A");
    s=(obj.D);
    i=s.indexOf('#',0);j=s.indexOf('#',i+1);TS=s.slice(i+1,j);z=Number(TS)/10; 
    FlInd.SetIndicator(z,z.toFixed(0),Ln2,ha.toFixed(0)+" "+Ln4);
    s=(obj.E);
    i=s.indexOf('#',0);TS=s.slice(0,i);z=Number(TS)/10;PrInd.SPrInd(z);
    j=s.indexOf('#',i+1);TS=s.slice(j+1);z=Number(TS);TkInd.STkInd(z);
    s=(obj.F);
    i=s.indexOf('#',0);j=s.indexOf('#',i+1);TS=s.slice(i+1,j);z=Number(TS);
    OnOfInd("PA",z,0x01,C8,C9);
    OnOfInd("PB",z,0x01,C8,C9);
    OnOfInd("PC",z,0x01,C8,C9);
    OnOfInd("PD",z,0x01,C8,C9);
    TS=s.slice(j+1);z=Number(TS);
    if(z&0x01){OnOfInd("SW1",z,0x10,C8,CB);} else {OnOfInd("SW1",1,1,C1,CB);}
    if(z&0x02){OnOfInd("SW2",z,0x20,C8,CB);} else {OnOfInd("SW1",1,1,C1,CB);}
    if(z&0x04){OnOfInd("SW1",z,0x40,C8,CB);} else {OnOfInd("SW1",1,1,C1,CB);}
 
    s=(obj.S); 
    i=s.indexOf('#',0);TS=s.slice(0,i);z=Number(TS);
    if(z&0x001){Inn("StatusInfo",Ln10);} else {Inn("StatusInfo",Ln9)};
    if(z&0x002){Inn("StatusInfo",Ln15)};
    OnOfInd("ConnectGPS",z,0x010,C7,C9); 
    OnOfInd("StartBottom",z,0x004,C8,CA);  
    OnOfInd("StopBottom",z,0x008,CB,CC);  
    if(z&0x020){Inn("StatusInfo",Ln12)}; 
    j=s.indexOf('#',i+1);TS=s.slice(i+1,j); z=Number(TS);
    c=document.getElementById("StatusInfo") ; //   console.log("fault",z);
    if(z&0x001){c.style="background-color:"+CB; c.innerHTML=Ln13;} else {c.style="background-color:"+C1;}; 
    if(z&0x008){c.style="background-color:"+CB; c.innerHTML=Ln14;} else {c.style="background-color:#"+C1;};
    TkInd.SbCl(C6);
    if ((z&0x40)&&(p)) TkInd.SbCl(C7); 
    if((z&0x80)&&(p)) TkInd.SbCl(CB);
    }, false);
};

TkInd.STkInd(500);
PrInd.SPrInd(1.0) ;
let v=7.0;
SpInd.SetIndicator(v,v.toFixed(1),"km/h","10.2 km");
v=17.0;
PuInd.SetIndicator(v,v.toFixed(1),"l/min","18.2 A"); 
v=170;
FlInd.SetIndicator(v,v.toFixed(0),"l/ha","15.7 ha");
function StopF(){
    let xhr=new XMLHttpRequest();
    xhr.open("GET","/STOP",true); 
    xhr.send();
    console.log("StopBottom");
}
let setflow=100 ;
slider.oninput=function(){
    setflow=slider.value;
    Inn("FlowInf",setflow+" "+ Ln2);
}

let BST=document.getElementById("StartBottom");
let BRS=document.getElementById("ResetBottom");
let lp=false;
let lt=null;
let longtarget=null;
let cancel=function(e){
    if (lt !== null){
        clearTimeout(lt);
        lt=null;
    }
    this.classList.remove("lp");
};
let clickstart=function(e){
    if (lt !== null){
    clearTimeout(lt);
    lt = null;
    }
    this.classList.remove("lp");
    if (lp){return false;}
    let xhr=new XMLHttpRequest();
    setflow=slider.value;
    xhr.open("GET","/START?SFL1="+setflow,true);
    xhr.send();
};
let clearerror=function(e){
    if (lt !== null){
        clearTimeout(lt);
        lt=null;
    }
    this.classList.remove("lp");
    if (lp){return false;}
    var xhr=new XMLHttpRequest();
    xhr.open("GET","/CLEARERROR",true);
    xhr.send();
};
let manual=function(e){
    if (e.type === "click" && e.button !== 0){return;}
    lp=false;
    this.classList.add("lp");
    if (lt === null){
        lt=setTimeout(function(){
            let xhr=new XMLHttpRequest();
            setflow=slider.value;
            xhr.open("GET","/MANUAL?SFL1="+setflow,true);
            xhr.send();
            lp=true;
        },1500);
    }
 return false;
};
let resettank=function(e){
    if (e.type === "click" && e.button !== 0){return;}
    lp=false;
    this.classList.add("lp");
    if (lt === null){
        lt=setTimeout(function(){
            let xhr=new XMLHttpRequest();
            xhr.open("GET","/RESET",true);
            xhr.send();
            lp=true;
        },1500);
    }
    return false;
};
BST.addEventListener("mousedown",manual);
BST.addEventListener("touchstart",manual);
BST.addEventListener("click",clickstart);
BST.addEventListener("mouseout",cancel);
BST.addEventListener("touchend",cancel);
BST.addEventListener("touchleave",cancel);
BST.addEventListener("touchcancel",cancel);
BRS.addEventListener("mousedown",resettank);
BRS.addEventListener("touchstart",resettank);
BRS.addEventListener("click",clearerror);
BRS.addEventListener("mouseout",cancel);
BRS.addEventListener("touchend",cancel);
BRS.addEventListener("touchleave",cancel);
BRS.addEventListener("touchcancel",cancel);