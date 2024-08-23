"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[552],{3576:function(e,t,n){n.d(t,{k:function(){return l}});var r,a,o=n(6540),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=(0,o.createContext)(void 0),s="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",c="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";t.A=function(e){var t=e.config,n=void 0===(n=e.version)?3:n,u=void 0===(u=e.src)?2===n?s:c:u,h=e.onStartup,d=e.onLoad,f=e.onError,p=e.typesettingOptions,m=void 0===(m=e.renderMode)?"post":m,y=e.hideUntilTypeset;e=e.children;if(void 0!==(null==(v=(0,o.useContext)(l))?void 0:v.version)&&(null==v?void 0:v.version)!==n)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(2===n&&void 0!==a||3===n&&void 0!==r)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var v,b=(0,o.useRef)(v);if(null===(v=(0,o.useRef)((null==v?void 0:v.version)||null)).current)v.current=n;else if(v.current!==n)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var w=u||(2===n?s:c);function x(e,n){t&&(window.MathJax=t);var r=document.createElement("script");r.type="text/javascript",r.src=w,r.async=!1,r.addEventListener("load",(function(){var t=window.MathJax;h&&h(t),e(t),d&&d()})),r.addEventListener("error",(function(e){return n(e)})),document.getElementsByTagName("head")[0].appendChild(r)}return void 0===b.current&&(v={typesettingOptions:p,renderMode:m,hideUntilTypeset:y},2===n?void 0===r&&("undefined"!=typeof window?(r=new Promise(x)).catch((function(e){if(!f)throw Error("Failed to download MathJax version 2 from '".concat(w,"' due to: ").concat(e));f(e)})):(r=Promise.reject()).catch((function(e){}))):void 0===a&&("undefined"!=typeof window?(a=new Promise(x)).catch((function(e){if(!f)throw Error("Failed to download MathJax version 3 from '".concat(w,"' due to: ").concat(e));f(e)})):(a=Promise.reject()).catch((function(e){}))),b.current=i(i({},v),2===n?{version:2,promise:r}:{version:3,promise:a})),o.createElement(l.Provider,{value:b.current},e)}},1386:function(e,t,n){var r=n(6540),a=n(3576),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},l=function(e){return"Typesetting failed: ".concat(void 0!==e.message?e.message:e.toString())};t.A=function(e){function t(){var e;"every"===x&&M&&"post"===E&&null!==b.current&&(b.current.style.visibility=null!=(e=null==(e=y.style)?void 0:e.visibility)?e:"visible"),A.current||("first"===x&&null!==b.current&&(b.current.style.visibility="visible"),c&&c(),A.current=!0),u&&u(),T.current=!1}var n=void 0!==(s=e.inline)&&s,s=e.hideUntilTypeset,c=e.onInitTypeset,u=e.onTypeset,h=e.text,d=e.dynamic,f=e.typesettingOptions,p=e.renderMode,m=e.children,y=i(e,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),v=(0,r.useRef)(""),b=(0,r.useRef)(null),w=(0,r.useContext)(a.k),x=null!=s?s:null==w?void 0:w.hideUntilTypeset,E=null!=p?p:null==w?void 0:w.renderMode,g=null!=f?f:null==w?void 0:w.typesettingOptions,M=!1!==d&&(d||!1),A=(0,r.useRef)(!1),T=(0,r.useRef)(!1);return!T.current&&null!==b.current&&M&&"every"===x&&"post"===E&&(b.current.style.visibility="hidden"),("undefined"!=typeof window?r.useLayoutEffect:r.useEffect)((function(){if((M||!A.current)&&null!==b.current){if(!w)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if("pre"===E){if(!("string"==typeof(e=h)&&0<e.length))throw Error("Render mode 'pre' requires text prop to be set and non-empty, which was currently \"".concat(h,'"'));if(!f||!f.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(2===w.version)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}"post"!==E&&h===v.current||T.current||(T.current=!0,3===w.version?w.promise.then((function(e){var r;"pre"===E?(r=function(n){v.current=h,e.startup.document.clear(),e.startup.document.updateDocument(),null!==b.current&&(b.current.innerHTML=n.outerHTML),t()},f.fn.endsWith("Promise")?e.startup.promise.then((function(){return e[g.fn](h,o(o({},(null==g?void 0:g.options)||{}),{display:!n}))})).then(r).catch((function(e){throw t(),Error(l(e))})):e.startup.promise.then((function(){var t=e[g.fn](h,o(o({},(null==g?void 0:g.options)||{}),{display:!n}));r(t)})).catch((function(e){throw t(),Error(l(e))}))):e.startup.promise.then((function(){return e.typesetClear([b.current]),e.typesetPromise([b.current])})).then(t).catch((function(e){throw t(),Error(l(e))}))})).catch((function(e){throw t(),Error(l(e))})):w.promise.then((function(e){e.Hub.Queue(["Typeset",e.Hub,b.current]),e.Hub.Queue(t)})).catch((function(e){throw t(),Error(l(e))})))}var e})),r.createElement("span",o({},y,{style:o(o({display:n?"inline":"block"},y.style),{visibility:x?"hidden":null==(e=y.style)?void 0:e.visibility}),ref:b}),m)}},5229:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(6540),a=n(4810);var o=e=>{let{children:t}=e;return r.createElement("div",null,r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(a.N_,{to:"/"},"Home")),r.createElement("li",null,r.createElement(a.N_,{to:"/blog"},"Blog")))),r.createElement("main",null,t))},i=n(3576),l=n(1386);var s=()=>r.createElement(o,null,r.createElement("h3",null,"Differentiating the Exponential"),r.createElement("h4",null,"Introduction"),r.createElement("p",null,"In high school, Calculus BC was the medium by which I came to love mathematics, facilitated by various personalities. Specifically something that I really came to enjoy was that, other than a few axiomatic assumptions about the derivative and integral, and some later axiomatic injections, the course was largely self contained, with an overarching narrative as previous results were used to derive new ones."),r.createElement("p",null,"This narrative was in large part driven by 3blue1brown (",r.createElement("a",{href:"https://www.3blue1brown.com/topics/calculus"},"his calculus series"),"), of which I am eternally grateful. However, I found the segment on the exponential derivative lacking, which has left me wanting resolution, that I satisfy here."),r.createElement("h4",null,"Exposition"),r.createElement("p",null,"The derivative has some nice properties, of which we will modestly make use."),r.createElement("p",null,r.createElement("u",null,"Homogeneity: "),r.createElement(i.A,null,r.createElement(l.A,null,"Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be a function (from the reals to the reals), and let \\(c \\in \\mathbb{R}\\) be a constant.")),r.createElement(i.A,null,r.createElement(l.A,null,"Then, \\( (c \\cdot f)' = c \\cdot (f')\\)")),"In English, scaling a function by a constant also scales its derivative by that constant."),r.createElement("p",null,r.createElement("u",null,"Translation: "),r.createElement(i.A,null,r.createElement(l.A,null,"Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be a function (from the reals to the reals), and let \\(x, c \\in \\mathbb{R}\\) be a constant.")),r.createElement(i.A,null,r.createElement(l.A,null,"Then, \\((f(x - c))' = f'(x - c) \\)")),"In English, translating a function horizontally also translates its derivative function the same way."),r.createElement("p",null,"I will also make use of the following algebraic property of real exponentiation:",r.createElement(i.A,null,r.createElement(l.A,null,"\\( x^{a + b} = x^a \\cdot x^b \\)")),r.createElement(i.A,null,r.createElement(l.A,null,"I will also assume without proof that the exponential is differentiable at \\( 0 \\), which turns out will show that the exponential is differentiable everywhere."))),r.createElement("h4",null,"Development"),r.createElement(i.A,null,r.createElement(l.A,null,"Let \\(f(x) = b^x\\), the function which we are investigating (with \\(b \\geq 0\\)), and define \\(c = f'(0) \\)                     (known to exist by assumption). Now define \\(g(x) = f(x - a)\\), for some real number \\(a\\).")),r.createElement("p",null,"Some calculations:"),r.createElement(i.A,null,r.createElement(l.A,null,"\\begin{align}                         g(x) &= f(x - a) \\\\                        &= b^{(x - a)} \\\\                        &= \\frac{b^x}{b^a} \\\\\\\\                        \\implies g(x) &= f(x) \\cdot b^a                     \\end{align}")),r.createElement(i.A,null,r.createElement(l.A,null,"Semantically, shifting a exponential function \\(b^x\\) horizontally by \\(a\\) corresponds to scaling it by \\(b^a\\).")),r.createElement("p",null,"Some more calculations abound:"),r.createElement(i.A,null,r.createElement(l.A,null,"\\begin{align}                         f'(a) &= g'(0) \\\\                        &= (b^a \\cdot f)'(0) \\\\                        &= b^a \\cdot (f'(0)) \\\\                        &= b^a \\cdot c \\\\                        &= f(a) \\cdot c                     \\end{align}")),r.createElement(i.A,null,r.createElement(l.A,null,"Now, \\(a\\) was arbitrary, which means the above equation is true for any real number I could feed into \\(f\\), and therefore \\(f'(x) = c \\cdot f(x)\\)")),r.createElement("p",null,"What?? What just happened? The derivative of an exponential is just scaling itself?"),r.createElement("h4",null,"Recapitulation"),r.createElement("p",null,"The property at play here is that exponentials are self similar: if you move horizontally along the graph, and then scale the vertical axis, you get the exact same shape! And of course, if you scale the vertical axis, then all slopes get scaled by that amount as well. You can see a hint of this displayed here, and you're welcome to open Desmos and try it for yourself."),r.createElement("h4",null,"Coda"),r.createElement("p",null,r.createElement(i.A,null,r.createElement(l.A,null,"We saw that for \\(f(x) = b^x, f'(x) = c \\cdot f(x) \\). Can we have some choice of \\(b\\) where \\(c = 1\\), and then \\(f(x) = f'(x)\\)?"))),r.createElement("p",null,"If you play around in Desmos, it's certainly believable: but more than that, it's provable within calculus! Later on in the course, Taylor series are introduced, and it turns out that exponentials have Taylor series that converge everywhere.",r.createElement(i.A,null,r.createElement(l.A,null,"Thus, you can plug in \\(c = 1\\), and this leads to a very good approximation/convergent series for \\(e\\), the famous constant."))),r.createElement("p",null,"I hope you enjoyed this post, and there will be accompanying visuals and brief expansions soon!"))}}]);
//# sourceMappingURL=component---src-pages-blogs-exponential-derivative-js-752599db3650241345cc.js.map