(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4809)}])},4809:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var i=t(5893),r=t(7294),c=t(9777),a=t(4733),o=t(5676),s=t.n(o);function d(e){var n,t=(0,a.MS)().theme.card.card.css();return t.width=null!==(n=e.width)&&void 0!==n?n:"auto",e.height&&(t.height=e.height),e.margin&&(t.margin=e.margin),(0,i.jsx)("div",{className:s().card,style:t,children:e.children})}var p=t(9058),u=t.n(p),l=t(9142),y=t.n(l),h=t(578),f=t.n(h),m=function(e){e&&(e("core","nodeExpansion",(function(){this.nodes().forEach((function(e){e.data("expanded",!1),e.incomers().length&&e.style("visibility","hidden"),e.outgoers().length&&e.style("shape","diamond")})),this.edges().forEach((function(e){e.style("visibility","hidden")}))})),e("collection","expanded",(function(){if(this.length>0){var e=this[0];return!!e.isNode()&&e.data("expanded")}})),e("collection","expand",(function(){if(this.length>0){var e=this[0];e.isNode()&&e.outgoers().length&&(e.data("expanded",!0),e.style("shape","ellipse"),e.outgoers("edge").forEach((function(e){e.style("visibility","visible"),e.target().style("visibility","visible")})))}})),e("collection","collapse",(function(){if(this.length>0){var e=this[0];e.isNode()&&(e.data("expanded",!1),e.outgoers("edge").forEach((function(n){e.style("shape","diamond");var t=n.target();t.style("visibility","hidden"),t.incomers("edge").forEach((function(n){var i=n.source();e.same(i)||i.data("expanded")&&t.style("visibility","visible")})),n.style("visibility","hidden"),t.collapse()})))}})))};"undefined"!==typeof cytoscape&&m(cytoscape);var v=m,g=t(9636);function T(e){var n=(0,r.useRef)(null),t=(0,r.useRef)(),c=(0,r.useRef)(),a=e.elements,o=e.layout,s=e.stylesheet;return(0,r.useEffect)((function(){return(0,g.tg)(t.current,e)||(u().use(y()),c.current=u()({container:n.current,layout:o,elements:a,style:s}),c.current.fit(),Object.getPrototypeOf(c.current).popper||u().use(f()),Object.getPrototypeOf(c.current).nodeExpansion||u().use(v),t.current=e),e.cy&&e.cy(c.current),function(){var n;(0,g.tg)(t.current,e)||(null===(n=c.current)||void 0===n||n.destroy())}})),(0,i.jsx)("div",{ref:n,style:{width:"100%",height:"100%"}})}var b=t(2122),E=t.n(b);function _(e){var n=(0,a.MS)().theme.layout.container.css();return(0,i.jsx)("div",{className:E().container,style:n,children:e.children})}var x=t(9008);function j(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.default,{children:(0,i.jsx)("title",{children:e.title})}),(0,i.jsx)(_,{children:e.children})]})}var O=JSON.parse('[{"id":"entity","name":"Entity","description":"","children":["entityType","issue","influence","entityHierarchy","feature","kpi"],"parents":[]},{"id":"entityType","name":"Entity Type","description":"","children":["companyEntityType","processEntityType","productEntityType","componentEntityType","datasourceEntityType"],"parents":["entity"]},{"id":"companyEntityType","name":"Company Entity Type","description":"","children":[],"parents":["entityType"]},{"id":"processEntityType","name":"","description":"Process Entity Type","children":[],"parents":["entityType"]},{"id":"productEntityType","name":"Product Entity Type","description":"","children":[],"parents":["entityType"]},{"id":"componentEntityType","name":"Component Entity Type","description":"","children":[],"parents":["entityType"]},{"id":"datasourceEntityType","name":"Datasource Entity Type","description":"","children":[],"parents":["entityType"]},{"id":"entityHierarchy","name":"Entity Hierarchy","description":"","children":[],"parents":["entity"]},{"id":"influence","name":"Influence","description":"","children":[],"parents":["influenceType","entity"]},{"id":"influenceType","name":"Influence Type","description":"","children":["influence"],"parents":[]},{"id":"issue","name":"Issue","description":"","children":["cause"],"parents":["entity","issueType"]},{"id":"issueType","name":"Issue Type","description":"","children":["issue"],"parents":[]},{"id":"cause","name":"Cause","description":"","children":["solution"],"parents":["issue","causeType"]},{"id":"causeType","name":"Cause Type","description":"","children":["cause"],"parents":[]},{"id":"solution","name":"Solution","description":"","children":[],"parents":["cause","solutionType"]},{"id":"solutionType","name":"Solution Type","description":"","children":["solution"],"parents":[]},{"id":"feature","name":"Feature","description":"","children":[],"parents":["entity"]},{"id":"kpi","name":"KPI","description":"","children":["kpiHierarchy"],"parents":["entity","kpiType"]},{"id":"kpiType","name":"KPI Type","description":"","children":["kpi","kpiTypeHierarchy"],"parents":[]},{"id":"kpiHierarchy","name":"KPI Hierarchy","description":"","children":[],"parents":["kpi"]},{"id":"kpiTypeHierarchy","name":"","description":"","children":[],"parents":["kpiType"]}]');function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){w(e,n,t[n])}))}return e}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){P(e,n,t[n])}))}return e}var S=(0,c.Z)((function(e){var n,t=(0,a.MS)().theme,c=(0,r.useRef)(),o=e.setTippy,s=[];O.forEach((function(e){s.push(function(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{data:k({id:"".concat(n),label:"".concat(t),kind:"".concat(e),entity:"".concat(n)},i)}}("unspecified",e.id,e.name,{description:e.description,hover:!1})),e.children.forEach((function(n){s.push(function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{data:C({id:"".concat(e,"-").concat(n),source:e,target:n,directed:t},i)}}(e.id,n))}))}));var p=(0,r.useCallback)((function(e){c.current!=e&&(e.nodeExpansion(),e.on("tap","node",(function(e){var n=e.target;n.expanded()?n.collapse():n.expand()})),e.on("mouseover","node",(function(e){var n=e.target;o(n.id(),{content:(0,i.jsx)(d,{width:"250px",children:n.data("description")}),popperRef:n.popperRef(),dispose:function(){return n.data("hover",!1)},tippyProps:{placement:"right"}}),n.data("hover",!0)})),e.on("mouseout","node",(function(e){var n=e.target;o(n.id(),{content:void 0,popperRef:void 0})})),c.current=e)}),[o]);return(0,i.jsx)(j,{title:"Test",children:(0,i.jsx)("div",{style:{height:"100vh",width:"100%"},children:(0,i.jsx)(T,{cy:p,elements:s,layout:{name:"dagre",nodeDimensionsIncludeLabels:!0,fit:!1},stylesheet:null===(n=t.cytoscape)||void 0===n?void 0:n.canvas})})})}))},5676:function(e){e.exports={card:"Card_card__MdBWe",cardDismissal:"Card_cardDismissal__wcfQg",cardTitle:"Card_cardTitle__AvJG5",cardSubTitle:"Card_cardSubTitle__guPa3",cardImage:"Card_cardImage__eebwX",cardBody:"Card_cardBody__S_jTh",cardAction:"Card_cardAction__1KmJE"}},2122:function(e){e.exports={container:"Container_container__6kKex"}}},function(e){e.O(0,[856,271,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);