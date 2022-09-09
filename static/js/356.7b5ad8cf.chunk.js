"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[356],{356:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i=t(152),s=t(791),r=t(749),a=t(854);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,s,r=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(r.push(i.value),!n||r.length!==n);a=!0);}catch(o){l=!0,s=o}finally{try{a||null==t.return||t.return()}finally{if(l)throw s}}return r}}(e,n)||function(e,n){if(e){if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}var h=s.memo(s.forwardRef((function(e,n){var t=s.useRef(null),i=d(s.useState(!0),2),r=i[0],c=i[1],m=function(e){13===e.keyCode&&p(e)},p=function(n){c(!1),e.onRemove&&e.onRemove(n)};return s.useImperativeHandle(n,(function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({getElement:function(){return t.current}},e)})),r&&function(){var n=a.gb.findDiffKeys(e,h.defaultProps),i=(0,a.AK)("p-chip p-component",{"p-chip-image":null!=e.image},e.className),r=e.template?a.gb.getJSXElement(e.template,e):function(){var n=[];return e.image?n.push(s.createElement("img",{key:"image",src:e.image,alt:e.imageAlt,onError:e.onImageError})):e.icon&&n.push(a.Cz.getJSXIcon(e.icon,{key:"icon",className:"p-chip-icon"},{props:e})),e.label&&n.push(s.createElement("span",{key:"label",className:"p-chip-text"},e.label)),e.removable&&n.push(a.Cz.getJSXIcon(e.removeIcon,{key:"removeIcon",tabIndex:0,className:"p-chip-remove-icon",onClick:p,onKeyDown:m},{props:e})),n}();return s.createElement("div",o({ref:t,className:i,style:e.style},n),r)}()})));h.displayName="Chip",h.defaultProps={__TYPE:"Chip",label:null,icon:null,image:null,removable:!1,removeIcon:"pi pi-times-circle",className:null,style:null,template:null,imageAlt:"chip",onImageError:null,onRemove:null};var m=t(724),p=(t(682),t(360),t(980),t(975),t(25)),f=t(540),v=(t(989),t(14)),g=t(184),j=["family","patient"],b=["changes in short-term memory","changes in long-term memory","difficulty recalling words","repetitive questions","day/night behavior changes","disorientation outside familiar environments"],x=["paranoia","suspiciousness","hallucinations","delusions","agitation"],y=["medication errors","wandering","driving","cooking","preparing meals"],N=["difficulty with the senses of taste","difficulty with the senses of smell ","difficulty with balance","difficulty with walking ","difficulty with bladder control"],w=["change in appetite","change in weight","change in psychomotor activity","change in sleep","depressed mood","loss of energy","loss of interests/pleasure","thoughts about death or suicide","thoughts of worthlessness or guilt","trouble concentrating "],S=["depression","Parkinsonism","recent head trauma","stroke","peripheral arterial disease","coronary heart disease","thyroid disease","anemia","low vitamin B12","STD"],C=["ambulation","bathing and hygiene","feeding","continence","grooming","toileting","dressing","finances","housekeeping","reading","shopping","telephoning","travel outside home","writing"],P=["dementia","Alzheimer's disease"],k=["getting better","staying the same","getting worse"],O=function(e){return e?"":"not"},Z=function(e){return e&&e.length>0?e:"_____"};var A=function(){var e=(0,s.useState)(""),n=(0,i.Z)(e,2),t=n[0],a=n[1],l=(0,s.useState)(""),o=(0,i.Z)(l,2),c=o[0],d=o[1],u=(0,s.useState)(""),h=(0,i.Z)(u,2),A=h[0],E=h[1],D=(0,s.useState)(""),I=(0,i.Z)(D,2),M=I[0],F=I[1],T=(0,s.useState)(""),_=(0,i.Z)(T,2),H=_[0],R=_[1],B=(0,s.useState)(""),L=(0,i.Z)(B,2),z=L[0],X=L[1],J=(0,s.useState)(""),K=(0,i.Z)(J,2),q=K[0],V=K[1],U=(0,s.useState)(""),W=(0,i.Z)(U,2),Y=W[0],$=W[1],G=(0,s.useState)(!1),Q=(0,i.Z)(G,2),ee=Q[0],ne=Q[1],te=(0,s.useState)(!1),ie=(0,i.Z)(te,2),se=ie[0],re=ie[1],ae=(0,s.useState)(!1),le=(0,i.Z)(ae,2),oe=le[0],ce=le[1],de=(0,s.useState)(!1),ue=(0,i.Z)(de,2),he=ue[0],me=(ue[1],(0,s.useState)([])),pe=(0,i.Z)(me,2),fe=pe[0],ve=pe[1],ge=(0,s.useState)([]),je=(0,i.Z)(ge,2),be=je[0],xe=je[1],ye=(0,s.useState)([]),Ne=(0,i.Z)(ye,2),we=Ne[0],Se=Ne[1],Ce=(0,s.useState)([]),Pe=(0,i.Z)(Ce,2),ke=Pe[0],Oe=Pe[1],Ze=(0,s.useState)([]),Ae=(0,i.Z)(Ze,2),Ee=Ae[0],De=Ae[1],Ie=(0,s.useState)(""),Me=(0,i.Z)(Ie,2),Fe=Me[0],Te=Me[1],_e=(0,s.useState)([]),He=(0,i.Z)(_e,2),Re=He[0],Be=He[1],Le=(0,s.useState)([]),ze=(0,i.Z)(Le,2),Xe=ze[0],Je=ze[1],Ke=(0,s.useState)([]),qe=(0,i.Z)(Ke,2),Ve=qe[0],Ue=qe[1],We=(0,s.useState)([]),Ye=(0,i.Z)(We,2),$e=Ye[0],Ge=Ye[1],Qe=(0,s.useState)([]),en=(0,i.Z)(Qe,2),nn=en[0],tn=en[1],sn=(0,s.useState)([]),rn=(0,i.Z)(sn,2),an=rn[0],ln=rn[1],on=(0,s.useState)([]),cn=(0,i.Z)(on,2),dn=cn[0],un=cn[1],hn=(0,s.useState)(x),mn=(0,i.Z)(hn,2),pn=mn[0],fn=mn[1],vn=(0,s.useState)(x),gn=(0,i.Z)(vn,2),jn=gn[0],bn=gn[1],xn=(0,s.useState)(y),yn=(0,i.Z)(xn,2),Nn=yn[0],wn=yn[1],Sn=(0,s.useState)(y),Cn=(0,i.Z)(Sn,2),Pn=Cn[0],kn=Cn[1],On=(0,s.useState)(C),Zn=(0,i.Z)(On,2),An=Zn[0],En=Zn[1],Dn=(0,s.useState)(C),In=(0,i.Z)(Dn,2),Mn=In[0],Fn=In[1];return(0,s.useEffect)((function(){fn((function(){return x.filter((function(e){return!we.includes(e)}))})),bn((function(){return x.filter((function(e){return!be.includes(e)}))}))}),[be,we]),(0,s.useEffect)((function(){wn((function(){return y.filter((function(e){return!Ee.includes(e)}))})),kn((function(){return y.filter((function(e){return!ke.includes(e)}))}))}),[ke,Ee]),(0,s.useEffect)((function(){En((function(){return C.filter((function(e){return!an.includes(e)}))})),Fn((function(){return C.filter((function(e){return!nn.includes(e)}))}))}),[nn,an]),(0,g.jsxs)("div",{className:"flex flex-row",children:[(0,g.jsxs)("div",{className:"formgrid grid surface-0 p-3 shadow-2 border-round w-6",children:[(0,g.jsx)("div",{className:"text-3xl font-medium text-900 mb-3",children:"Memory Loss"}),(0,g.jsx)(m.i,{}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpEscortValue",value:c,onChange:function(e){return d(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpEscortValue",children:"Accompanied by?"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msInformant",value:dn,options:j,onChange:function(e){return un(e.value)},placeholder:"Informant",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpCarer",value:A,onChange:function(e){return E(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpCarer",children:"Primary caregiver"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpReside",value:M,onChange:function(e){return F(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpReside",children:"Patient resides with/in"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("div",{className:"field-checkbox",children:[(0,g.jsx)(f.X,{inputId:"cbOnset",checked:ee,onChange:function(e){return ne(e.checked)}}),(0,g.jsx)("label",{htmlFor:"cbOnset",children:"Sudden Onset"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpDurAd",value:t,onChange:function(e){return a(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpDurAd",children:"Duration of symptoms"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msAlzSymp",value:fe,options:b,onChange:function(e){return ve(e.value)},placeholder:"Main symptoms",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msMemProb",value:ke,options:Nn,onChange:function(e){return Oe(e.value)},placeholder:"Endorsed Memory Problems",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msMemProbAbs",value:Ee,options:Pn,onChange:function(e){return De(e.value)},placeholder:"Denied Memory Problems",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpForgot",value:z,onChange:function(e){return X(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpMedAd",children:"Examples of things forgotten"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msAlzBehav",value:be,options:pn,onChange:function(e){return xe(e.value)},placeholder:"Endorsed Behavior Problems",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msAlzBehavAbs",value:we,options:jn,onChange:function(e){return Se(e.value)},placeholder:"Denied Behavior Problems",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("div",{className:"field-checkbox",children:[(0,g.jsx)(f.X,{inputId:"cbLost",checked:oe,onChange:function(e){return ce(e.checked)}}),(0,g.jsx)("label",{htmlFor:"cbLost",children:"Tendency to get lost"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(v.L,{value:Fe,options:k,onChange:function(e){return Te(e.value)},placeholder:"Progression"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpMedAd",value:H,onChange:function(e){return R(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpMedAd",children:"Who administers patient's meds? "})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("div",{className:"field-checkbox",children:[(0,g.jsx)(f.X,{inputId:"cbChkBk",checked:se,onChange:function(e){return re(e.checked)}}),(0,g.jsx)("label",{htmlFor:"cbChkBk",children:"Controls checkbook"})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msDepressionSx",value:Xe,options:w,onChange:function(e){return Je(e.value)},placeholder:"Depression symptoms",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msOtherSx",value:Re,options:N,onChange:function(e){return Be(e.value)},placeholder:"Other symptoms",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msPMHAD",value:Ve,options:S,onChange:function(e){return Ue(e.value)},placeholder:"Past Medical History",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpOtherMeds",value:q,onChange:function(e){return V(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpOtherMeds",children:"Medications including OTCs? "})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msFamHx",value:$e,options:P,onChange:function(e){return Ge(e.value)},placeholder:"Family history",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsxs)("span",{className:"p-float-label",children:[(0,g.jsx)(p.o,{id:"inpEtOH",value:Y,onChange:function(e){return $(e.target.value)}}),(0,g.jsx)("label",{htmlFor:"inpEtOH",children:"Alcohol habits "})]})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msAcdPres",value:nn,options:An,onChange:function(e){return tn(e.value)},placeholder:"Independent in",display:"chip"})}),(0,g.jsx)("div",{className:"field m-3",children:(0,g.jsx)(r.N,{id:"msAcdAbs",value:an,options:Mn,onChange:function(e){return ln(e.value)},placeholder:"Needs help with",display:"chip"})})]}),(0,g.jsx)("div",{className:"surface-0 w-6 card m-3",children:(0,g.jsxs)("div",{className:"surface-0 p-4 shadow-2 border-round ",children:[(0,g.jsx)("div",{className:"text-3xl font-medium text-900 mb-3",children:"Memory Loss"}),(0,g.jsx)("div",{id:"dementiaText",className:"border-1 border-dashed border-300",children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("p",{children:[" Patient was accompanied by ",Z(c),". History was provided by ",Z(dn.join(" and ")),". Primary caregiver is ",Z(A),". Patient resides in/with ",Z(M),". Memory loss was ",O(ee)," sudden in onset. Duration of the problem: ",Z(t),". The ",Z(dn.join(" and "))," identified problems with ",Z(fe.join(", ")),". The ",Z(dn.join(" and "))," reported concerns about ",Z(ke.join(", ")),". However, ",Z(dn.join(" and "))," did not observe problems with ",Z(Ee.join(", ")),". Examples of what is forgotten include ",Z(z),". The ",Z(dn.join(" and "))," reported problems with ",Z(be.join(", ")),". The ",Z(dn.join(" and "))," denied problems with ",Z(we.join(", ")),". Patient does ",O(oe)," have a tendency to get lost. Patient's problems are reportedly ",Z(Fe),". Regarding medication administration, ",Z(H),". Patient does ",O(se)," still control the checkbook. Patient does ",O(he)," report headache. Depressive symptoms endorsed include ",Z(Xe.join(", ")),". Other complaints include ",Z(Re.join(", ")),". "]}),(0,g.jsxs)("p",{children:["Past medical history was notable for ",Z($e.join(", ")),". Medication history was notable for ",Z(q),". Family history was notable for ",Z($e.join(", ")),"."]}),(0,g.jsxs)("p",{children:["Drinking habits: ",Z(Y)," "]}),(0,g.jsxs)("h3",{children:["Functional Assessment",(0,g.jsx)("br",{}),"Activities of Daily Living (ADLs): "]}),(0,g.jsxs)("p",{children:["Patient is ",(0,g.jsx)("strong",{children:"independent"})," in the following: ",Z(nn.join(", "))]}),(0,g.jsxs)("p",{children:["Patient ",(0,g.jsx)("strong",{children:"requires assistance with "}),"the following: ",Z(an.join(", "))," "]})]})})]})})]})}}}]);
//# sourceMappingURL=356.7b5ad8cf.chunk.js.map