import{f as Tt,w as A,u as p,e as d,c as _}from"./index-DY2WHAhs.js";import{c as gt,r as ft,b as Bt,a as K}from"./index-D0OhPFHe.js";import{d as yt,C as wt,j as xt,b as Et,k as B,o as j,D as X,n as kt,u as St,E as Ot,p as zt,r as $t,F as P,f as Pt,g as H,q as It,m as jt,G as Y,H as q}from"./vue.esm-bundler-2VGXRcgK.js";var Ht=typeof global=="object"&&global&&global.Object===Object&&global,At=typeof self=="object"&&self&&self.Object===Object&&self,D=Ht||At||Function("return this")(),b=D.Symbol,ht=Object.prototype,Dt=ht.hasOwnProperty,Nt=ht.toString,m=b?b.toStringTag:void 0;function Gt(t){var e=Dt.call(t,m),n=t[m];try{t[m]=void 0;var r=!0}catch{}var a=Nt.call(t);return r&&(e?t[m]=n:delete t[m]),a}var Mt=Object.prototype,Ft=Mt.toString;function Rt(t){return Ft.call(t)}var Wt="[object Null]",Ut="[object Undefined]",L=b?b.toStringTag:void 0;function bt(t){return t==null?t===void 0?Ut:Wt:L&&L in Object(t)?Gt(t):Rt(t)}function Vt(t){return t!=null&&typeof t=="object"}var Kt="[object Symbol]";function N(t){return typeof t=="symbol"||Vt(t)&&bt(t)==Kt}function Xt(t,e){for(var n=-1,r=t==null?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}var G=Array.isArray,Yt=1/0,Z=b?b.prototype:void 0,J=Z?Z.toString:void 0;function vt(t){if(typeof t=="string")return t;if(G(t))return Xt(t,vt)+"";if(N(t))return J?J.call(t):"";var e=t+"";return e=="0"&&1/t==-Yt?"-0":e}function S(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var qt="[object AsyncFunction]",Lt="[object Function]",Zt="[object GeneratorFunction]",Jt="[object Proxy]";function Qt(t){if(!S(t))return!1;var e=bt(t);return e==Lt||e==Zt||e==qt||e==Jt}var I=D["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function te(t){return!!Q&&Q in t}var ee=Function.prototype,ne=ee.toString;function re(t){if(t!=null){try{return ne.call(t)}catch{}try{return t+""}catch{}}return""}var ae=/[\\^$.*+?()[\]{}|]/g,oe=/^\[object .+?Constructor\]$/,se=Function.prototype,ie=Object.prototype,ce=se.toString,le=ie.hasOwnProperty,ue=RegExp("^"+ce.call(le).replace(ae,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function pe(t){if(!S(t)||te(t))return!1;var e=Qt(t)?ue:oe;return e.test(re(t))}function de(t,e){return t==null?void 0:t[e]}function M(t,e){var n=de(t,e);return pe(n)?n:void 0}var tt=function(){try{var t=M(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ge=9007199254740991,fe=/^(?:0|[1-9]\d*)$/;function ye(t,e){var n=typeof t;return e=e??ge,!!e&&(n=="number"||n!="symbol"&&fe.test(t))&&t>-1&&t%1==0&&t<e}function he(t,e,n){e=="__proto__"&&tt?tt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function mt(t,e){return t===e||t!==t&&e!==e}var be=Object.prototype,ve=be.hasOwnProperty;function me(t,e,n){var r=t[e];(!(ve.call(t,e)&&mt(r,n))||n===void 0&&!(e in t))&&he(t,e,n)}var _e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ce=/^\w*$/;function Te(t,e){if(G(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||N(t)?!0:Ce.test(t)||!_e.test(t)||e!=null&&t in Object(e)}var C=M(Object,"create");function Be(){this.__data__=C?C(null):{},this.size=0}function we(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var xe="__lodash_hash_undefined__",Ee=Object.prototype,ke=Ee.hasOwnProperty;function Se(t){var e=this.__data__;if(C){var n=e[t];return n===xe?void 0:n}return ke.call(e,t)?e[t]:void 0}var Oe=Object.prototype,ze=Oe.hasOwnProperty;function $e(t){var e=this.__data__;return C?e[t]!==void 0:ze.call(e,t)}var Pe="__lodash_hash_undefined__";function Ie(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=C&&e===void 0?Pe:e,this}function g(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}g.prototype.clear=Be;g.prototype.delete=we;g.prototype.get=Se;g.prototype.has=$e;g.prototype.set=Ie;function je(){this.__data__=[],this.size=0}function O(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1}var He=Array.prototype,Ae=He.splice;function De(t){var e=this.__data__,n=O(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ae.call(e,n,1),--this.size,!0}function Ne(t){var e=this.__data__,n=O(e,t);return n<0?void 0:e[n][1]}function Ge(t){return O(this.__data__,t)>-1}function Me(t,e){var n=this.__data__,r=O(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function v(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}v.prototype.clear=je;v.prototype.delete=De;v.prototype.get=Ne;v.prototype.has=Ge;v.prototype.set=Me;var Fe=M(D,"Map");function Re(){this.size=0,this.__data__={hash:new g,map:new(Fe||v),string:new g}}function We(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function z(t,e){var n=t.__data__;return We(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Ue(t){var e=z(this,t).delete(t);return this.size-=e?1:0,e}function Ve(t){return z(this,t).get(t)}function Ke(t){return z(this,t).has(t)}function Xe(t,e){var n=z(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function f(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}f.prototype.clear=Re;f.prototype.delete=Ue;f.prototype.get=Ve;f.prototype.has=Ke;f.prototype.set=Xe;var Ye="Expected a function";function F(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Ye);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],s=n.cache;if(s.has(a))return s.get(a);var i=t.apply(this,r);return n.cache=s.set(a,i)||s,i};return n.cache=new(F.Cache||f),n}F.Cache=f;var qe=500;function Le(t){var e=F(t,function(r){return n.size===qe&&n.clear(),r}),n=e.cache;return e}var Ze=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Je=/\\(\\)?/g,Qe=Le(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Ze,function(n,r,a,s){e.push(a?s.replace(Je,"$1"):r||n)}),e});function tn(t){return t==null?"":vt(t)}function en(t,e){return G(t)?t:Te(t,e)?[t]:Qe(tn(t))}var nn=1/0;function rn(t){if(typeof t=="string"||N(t))return t;var e=t+"";return e=="0"&&1/t==-nn?"-0":e}function an(t,e,n,r){if(!S(t))return t;e=en(e,t);for(var a=-1,s=e.length,i=s-1,l=t;l!=null&&++a<s;){var c=rn(e[a]),u=n;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(a!=i){var y=l[c];u=void 0,u===void 0&&(u=S(y)?y:ye(e[a+1])?[]:{})}me(l,c,u),l=l[c]}return t}function h(t,e,n){return t==null?t:an(t,e,n)}const _t=Symbol("BUTTON_GROUP_CTX_KEY"),on=gt(yt({name:"ErButton",__name:"Button",props:{tag:{default:"button"},type:{},size:{},nativeType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},circle:{type:Boolean},plain:{type:Boolean},round:{type:Boolean},loadingIcon:{},autofocus:{type:Boolean},useThrottle:{type:Boolean,default:!0},throttleDuration:{default:500}},emits:["click"],setup(t,{expose:e,emit:n}){const r=t,a=n,s=wt(),i=xt(_t,void 0),l=Et(),c=B(()=>(i==null?void 0:i.size)??(r==null?void 0:r.size)??""),u=B(()=>(i==null?void 0:i.type)??(r==null?void 0:r.type)??""),y=B(()=>(i==null?void 0:i.disabled)||(r==null?void 0:r.disabled)||!1),R=B(()=>({marginRight:s.default?"6px":"0px"})),W=o=>a("click",o),Ct=Bt(W,r.throttleDuration,{trailing:!1});return e({ref:l,disabled:y,size:c,type:u}),(o,U)=>(j(),X(Ot(o.tag),{ref_key:"_ref",ref:l,class:kt(["er-button",{[`er-button--${u.value}`]:u.value,[`er-button--${c.value}`]:c.value,"is-plain":o.plain,"is-round":o.round,"is-circle":o.circle,"is-disabled":y.value,"is-loading":o.loading}]),autofocus:o.autofocus,type:o.tag==="button"?o.nativeType:void 0,disabled:!(!y.value&&!o.loading)||void 0,onClick:U[0]||(U[0]=V=>o.useThrottle?St(Ct)(V):W(V))},{default:It(()=>[o.loading?H(o.$slots,"loading",{key:0},()=>[jt(K,{class:"loading-icon",icon:o.loadingIcon??"spinner",style:Y(R.value),size:"1x",spin:""},null,8,["icon","style"])],!0):q("",!0),o.icon&&!o.loading?(j(),X(K,{key:1,icon:o.icon,style:Y(R.value),size:"1x"},null,8,["icon","style"])):q("",!0),H(o.$slots,"default",{},void 0,!0)]),_:3},8,["autofocus","type","disabled","class"]))}}),[["__scopeId","data-v-ac852cbd"]]),sn={class:"er-button-group"},cn=gt(yt({name:"ErButtonGroup",__name:"ButtonGroup",props:{size:{},type:{},disabled:{type:Boolean}},setup(t){const e=t;return zt(_t,$t({size:P(e,"size"),type:P(e,"type"),disabled:P(e,"disabled")})),(n,r)=>(j(),Pt("div",sn,[H(n.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-641fb44d"]]),T=ft(on),ln=ft(cn),gn={title:"Example/Button",component:T,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},size:{control:{type:"select"},options:["large","default","small",""]},disabled:{control:"boolean"},loading:{control:"boolean"},useThrottle:{control:"boolean"},throttleDuration:{control:"number"},autofocus:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}},args:{onClick:Tt()}},$=t=>`
<div style="margin:5px">
  ${t}
</div>
`,w={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"Button"},render:t=>({components:{ErButton:T},setup(){return{args:t}},template:$('<er-button data-testid="story-test-btn" v-bind="args">{{args.content}}</er-button>')}),play:async({canvasElement:t,args:e,step:n})=>{const a=A(t).getByTestId("story-test-btn");await n("When useThrottle is set to true, the onClick should be called once",async()=>{h(e,"useThrottle",!0),await p.tripleClick(a),d(e.onClick).toHaveBeenCalledOnce(),_()}),await n("When useThrottle is set to false, the onClick should be called three times",async()=>{h(e,"useThrottle",!1),await p.tripleClick(a),d(e.onClick).toHaveBeenCalledTimes(3),_()}),await n("When disabled is set to true, the onClick should not be called",async()=>{h(e,"disabled",!0),await p.click(a),d(e.onClick).toHaveBeenCalledTimes(0),h(e,"disabled",!1),_()}),await n("When loading is set to true, the onClick should not be called",async()=>{h(e,"loading",!0),await p.click(a),d(e.onClick).toHaveBeenCalledTimes(0),h(e,"loading",!1),_()})}},x={argTypes:{content:{control:{type:"text"}}},args:{content:"Button",autofocus:!0},render:t=>({components:{ErButton:T},setup(){return{args:t}},template:$(`
      <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
      <er-button data-testid="story-test-btn" v-bind="args">{{args.content}}</er-button>
      `)}),play:async({args:t})=>{await p.keyboard("{enter}"),d(t.onClick).toHaveBeenCalledOnce(),_()}},E={args:{icon:"search"},render:t=>({components:{ErButton:T},setup(){return{args:t}},template:$(`
      <er-button circle v-bind="args"/>
    `)}),play:async({canvasElement:t,args:e,step:n})=>{const r=A(t);await n("click button",async()=>{await p.click(r.getByRole("button"))}),d(e.onClick).toHaveBeenCalled()}},k={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},groupSize:{control:{type:"select"},options:["large","default","small",""]},groupDisabled:{control:"boolean"},content1:{control:{type:"text"},defaultValue:"Button1"},content2:{control:{type:"text"},defaultValue:"Button2"}},args:{round:!0,content1:"Button1",content2:"Button2"},render:t=>({components:{ErButton:T,ErButtonGroup:ln},setup(){return{args:t}},template:$(`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    `)}),play:async({canvasElement:t,args:e,step:n})=>{const r=A(t);await n("click btn1",async()=>{await p.click(r.getByText("Button1"))}),await n("click btn2",async()=>{await p.click(r.getByText("Button2"))}),d(e.onClick).toHaveBeenCalled()}};var et,nt,rt;w.parameters={...w.parameters,docs:{...(et=w.parameters)==null?void 0:et.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    type: "primary",
    content: "Button"
  },
  render: args => ({
    components: {
      ErButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`<er-button data-testid="story-test-btn" v-bind="args">{{args.content}}</er-button>\`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId("story-test-btn");
    await step("When useThrottle is set to true, the onClick should be called once", async () => {
      set(args, "useThrottle", true);
      await userEvent.tripleClick(btn);
      expect(args.onClick).toHaveBeenCalledOnce();
      clearAllMocks();
    });
    await step("When useThrottle is set to false, the onClick should be called three times", async () => {
      set(args, "useThrottle", false);
      await userEvent.tripleClick(btn);
      expect(args.onClick).toHaveBeenCalledTimes(3);
      clearAllMocks();
    });
    await step("When disabled is set to true, the onClick should not be called", async () => {
      set(args, "disabled", true);
      await userEvent.click(btn);
      expect(args.onClick).toHaveBeenCalledTimes(0);
      set(args, "disabled", false);
      clearAllMocks();
    });
    await step("When loading is set to true, the onClick should not be called", async () => {
      set(args, "loading", true);
      await userEvent.click(btn);
      expect(args.onClick).toHaveBeenCalledTimes(0);
      set(args, "loading", false);
      clearAllMocks();
    });
  }
}`,...(rt=(nt=w.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var at,ot,st;x.parameters={...x.parameters,docs:{...(at=x.parameters)==null?void 0:at.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    content: "Button",
    autofocus: true
  },
  render: args => ({
    components: {
      ErButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
      <er-button data-testid="story-test-btn" v-bind="args">{{args.content}}</er-button>
      \`)
  }),
  play: async ({
    args
  }) => {
    await userEvent.keyboard("{enter}");
    expect(args.onClick).toHaveBeenCalledOnce();
    clearAllMocks();
  }
}`,...(st=(ot=x.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var it,ct,lt;E.parameters={...E.parameters,docs:{...(it=E.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    icon: "search"
  },
  render: args => ({
    components: {
      ErButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <er-button circle v-bind="args"/>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(lt=(ct=E.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,pt,dt;k.parameters={...k.parameters,docs:{...(ut=k.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  argTypes: {
    groupType: {
      control: {
        type: "select"
      },
      options: ["primary", "success", "warning", "danger", "info", ""]
    },
    groupSize: {
      control: {
        type: "select"
      },
      options: ["large", "default", "small", ""]
    },
    groupDisabled: {
      control: "boolean"
    },
    content1: {
      control: {
        type: "text"
      },
      defaultValue: "Button1"
    },
    content2: {
      control: {
        type: "text"
      },
      defaultValue: "Button2"
    }
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2"
  },
  render: args => ({
    components: {
      ErButton,
      ErButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(dt=(pt=k.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};const fn=["Default","Autofocus","Circle","Group"];export{x as Autofocus,E as Circle,w as Default,k as Group,fn as __namedExportsOrder,gn as default};
