(self.webpackChunkMyMapStoreProject=self.webpackChunkMyMapStoreProject||[]).push([[6830],{91133:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(23645),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,'.MyMapStoreProject .ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n\n.MyMapStoreProject .ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.MyMapStoreProject .ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.MyMapStoreProject .ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n}\n.MyMapStoreProject .ol-overlay-container {\n  will-change: left,right,top,bottom;\n}\n\n.MyMapStoreProject .ol-unsupported {\n  display: none;\n}\n.MyMapStoreProject .ol-viewport, .MyMapStoreProject .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.MyMapStoreProject .ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.MyMapStoreProject .ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.MyMapStoreProject .ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.MyMapStoreProject .ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.MyMapStoreProject .ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.MyMapStoreProject .ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.MyMapStoreProject .ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.MyMapStoreProject .ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.MyMapStoreProject .ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.MyMapStoreProject .ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n@media print {\n  .MyMapStoreProject .ol-control {\n    display: none;\n  }\n}\n\n.MyMapStoreProject .ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.MyMapStoreProject .ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.MyMapStoreProject .ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.MyMapStoreProject .ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.MyMapStoreProject .ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.MyMapStoreProject .ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.MyMapStoreProject .ol-control button:hover,\n.MyMapStoreProject .ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.MyMapStoreProject .ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.MyMapStoreProject .ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.MyMapStoreProject .ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.MyMapStoreProject .ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  font-size: .7rem;\n  line-height: 1.375em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n.MyMapStoreProject .ol-attribution li {\n  display: inline;\n  list-style: none;\n  line-height: inherit;\n}\n.MyMapStoreProject .ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n.MyMapStoreProject .ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.MyMapStoreProject .ol-attribution ul, .MyMapStoreProject .ol-attribution button {\n  display: inline-block;\n}\n.MyMapStoreProject .ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.MyMapStoreProject .ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.MyMapStoreProject .ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n  height: 1.1em;\n  line-height: 1em;\n}\n.MyMapStoreProject .ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.MyMapStoreProject .ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.MyMapStoreProject .ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.MyMapStoreProject .ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.MyMapStoreProject .ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.MyMapStoreProject .ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.MyMapStoreProject .ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.MyMapStoreProject .ol-overviewmap .ol-overviewmap-map,\n.MyMapStoreProject .ol-overviewmap button {\n  display: inline-block;\n}\n.MyMapStoreProject .ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.MyMapStoreProject .ol-overviewmap:not(.ol-collapsed) button{\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n.MyMapStoreProject .ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.MyMapStoreProject .ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.MyMapStoreProject .ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.MyMapStoreProject .ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.MyMapStoreProject .ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const r=i},43624:(e,t,o)=>{var n=o(14259),i=o(40554);e.exports=function(e,t,o){var r=null==e?0:e.length;return r?(t=o||void 0===t?1:i(t),n(e,0,(t=r-t)<0?0:t)):[]}},97398:(e,t,o)=>{var n=o(55639).isFinite;e.exports=function(e){return"number"==typeof e&&n(e)}},3728:(e,t,o)=>{"use strict";o.d(t,{Z:()=>_});var n=o(78426),i=o(78471),r=o(40188),a=o(39850),l=o(58493),s=o(13910),p=o(93409),c=o(12868),d=o(86340),h=o(19530),u=o(90728),m=o(67644),b=o(85386),v=o(13002),g=o(73381),M=o(21915);function y(e){this.validateExtent_(),this.updateBox_()}const _=function(e){function t(t){var o=t||{};e.call(this,{element:document.createElement("div"),render:o.render||y,target:o.target}),this.collapsed_=void 0===o.collapsed||o.collapsed,this.collapsible_=void 0===o.collapsible||o.collapsible,this.collapsible_||(this.collapsed_=!1);var r=void 0!==o.className?o.className:"ol-overviewmap",a=void 0!==o.tipLabel?o.tipLabel:"Overview map",l=void 0!==o.collapseLabel?o.collapseLabel:"«";"string"==typeof l?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=l):this.collapseLabel_=l;var s=void 0!==o.label?o.label:"»";"string"==typeof s?(this.label_=document.createElement("span"),this.label_.textContent=s):this.label_=s;var d=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,h=document.createElement("button");h.setAttribute("type","button"),h.title=a,h.appendChild(d),(0,v.oL)(h,g.Z.CLICK,this.handleClick_,this),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.ovmap_=new i.default({controls:new n.Z,interactions:new n.Z,view:o.view});var u=this.ovmap_;o.layers&&o.layers.forEach(function(e){u.addLayer(e)}.bind(this));var b=document.createElement("div");b.className="ol-overviewmap-box",b.style.boxSizing="border-box",this.boxOverlay_=new p.Z({position:[0,0],positioning:c.Z.BOTTOM_LEFT,element:b}),this.ovmap_.addOverlay(this.boxOverlay_);var M=r+" "+m.XV+" "+m.hg+(this.collapsed_&&this.collapsible_?" "+m.hN:"")+(this.collapsible_?"":" ol-uncollapsible"),_=this.element;_.className=M,_.appendChild(this.ovmapDiv_),_.appendChild(h);var f=this,w=this.boxOverlay_,x=this.boxOverlay_.getElement(),S=function(e){var t,o={clientX:(t=e).clientX-x.offsetWidth/2,clientY:t.clientY+x.offsetHeight/2},n=u.getEventCoordinate(o);w.setPosition(n)},P=function(e){var t=u.getEventCoordinate(e);f.getMap().getView().setCenter(t),window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",P)};x.addEventListener("mousedown",(function(){window.addEventListener("mousemove",S),window.addEventListener("mouseup",P)}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setMap=function(t){var o=this.getMap();if(t!==o){if(o){var n=o.getView();n&&this.unbindView_(n),this.ovmap_.setTarget(null)}if(e.prototype.setMap.call(this,t),t){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push((0,v.oL)(t,s.Z.PROPERTYCHANGE,this.handleMapPropertyChange_,this)),0===this.ovmap_.getLayers().getLength()&&this.ovmap_.setLayerGroup(t.getLayerGroup());var i=t.getView();i&&(this.bindView_(i),i.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_()))}}},t.prototype.handleMapPropertyChange_=function(e){if(e.key===a.Z.VIEW){var t=e.oldValue;t&&this.unbindView_(t);var o=this.getMap().getView();this.bindView_(o)}},t.prototype.bindView_=function(e){(0,v.oL)(e,(0,l.v_)(d.Z.ROTATION),this.handleRotationChanged_,this)},t.prototype.unbindView_=function(e){(0,v.Ev)(e,(0,l.v_)(d.Z.ROTATION),this.handleRotationChanged_,this)},t.prototype.handleRotationChanged_=function(){this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())},t.prototype.validateExtent_=function(){var e=this.getMap(),t=this.ovmap_;if(e.isRendered()&&t.isRendered()){var o=e.getSize(),n=e.getView().calculateExtent(o),i=t.getSize(),r=t.getView().calculateExtent(i),a=t.getPixelFromCoordinate((0,M.rL)(n)),l=t.getPixelFromCoordinate((0,M.w$)(n)),s=Math.abs(a[0]-l[0]),p=Math.abs(a[1]-l[1]),c=i[0],d=i[1];s<.1*c||p<.1*d||s>.75*c||p>.75*d?this.resetExtent_():(0,M.r4)(r,n)||this.recenter_()}},t.prototype.resetExtent_=function(){var e=this.getMap(),t=this.ovmap_,o=e.getSize(),n=e.getView().calculateExtent(o),i=t.getView(),r=Math.log(7.5)/Math.LN2,a=1/(.1*Math.pow(2,r/2));(0,M.H9)(n,a),i.fit(n)},t.prototype.recenter_=function(){var e=this.getMap(),t=this.ovmap_,o=e.getView();t.getView().setCenter(o.getCenter())},t.prototype.updateBox_=function(){var e=this.getMap(),t=this.ovmap_;if(e.isRendered()&&t.isRendered()){var o=e.getSize(),n=e.getView(),i=t.getView(),r=n.getRotation(),a=this.boxOverlay_,l=this.boxOverlay_.getElement(),s=n.calculateExtent(o),p=i.getResolution(),c=(0,M.hC)(s),d=(0,M.Xv)(s),h=this.calculateCoordinateRotate_(r,c);a.setPosition(h),l&&(l.style.width=Math.abs((c[0]-d[0])/p)+"px",l.style.height=Math.abs((d[1]-c[1])/p)+"px")}},t.prototype.calculateCoordinateRotate_=function(e,t){var o,n=this.getMap().getView().getCenter();return n&&(o=[t[0]-n[0],t[1]-n[1]],(0,u.U1)(o,e),(0,u.IH)(o,n)),o},t.prototype.handleClick_=function(e){e.preventDefault(),this.handleToggle_()},t.prototype.handleToggle_=function(){this.element.classList.toggle(m.hN),this.collapsed_?(0,b.$H)(this.collapseLabel_,this.label_):(0,b.$H)(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;var e=this.ovmap_;this.collapsed_||e.isRendered()||(e.updateSize(),this.resetExtent_(),(0,v.Vx)(e,r.Z.POSTRENDER,(function(e){this.updateBox_()}),this))},t.prototype.getCollapsible=function(){return this.collapsible_},t.prototype.setCollapsible=function(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),!e&&this.collapsed_&&this.handleToggle_())},t.prototype.setCollapsed=function(e){this.collapsible_&&this.collapsed_!==e&&this.handleToggle_()},t.prototype.getCollapsed=function(){return this.collapsed_},t.prototype.getOverviewMap=function(){return this.ovmap_},t}(h.Z)},12337:(e,t,o)=>{"use strict";o.d(t,{ZP:()=>b});var n=o(58493),i=o(38906),r=o(19530),a=o(67644),l=o(13002),s=o(2285),p=o(40868),c="units",d="degrees",h="metric",u=[1,2,5];function m(e){var t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()}const b=function(e){function t(t){var o=t||{},i=void 0!==o.className?o.className:"ol-scale-line";e.call(this,{element:document.createElement("div"),render:o.render||m,target:o.target}),this.innerElement_=document.createElement("div"),this.innerElement_.className=i+"-inner",this.element.className=i+" "+a.XV,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=void 0!==o.minWidth?o.minWidth:64,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",(0,l.oL)(this,(0,n.v_)(c),this.handleUnitsChanged_,this),this.setUnits(o.units||h)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getUnits=function(){return this.get(c)},t.prototype.handleUnitsChanged_=function(){this.updateElement_()},t.prototype.setUnits=function(e){this.set(c,e)},t.prototype.updateElement_=function(){var e=this.viewState_;if(e){var t=e.center,o=e.projection,n=this.getUnits(),r=n==d?p.default.DEGREES:p.default.METERS,a=(0,s._Q)(o,e.resolution,t,r);o.getUnits()!=p.default.DEGREES&&o.getMetersPerUnit()&&r==p.default.METERS&&(a*=o.getMetersPerUnit());var l=this.minWidth_*a,c="";if(n==d){var m=p.METERS_PER_UNIT[p.default.DEGREES];o.getUnits()==p.default.DEGREES?l*=m:a/=m,l<m/60?(c="″",a*=3600):l<m?(c="′",a*=60):c="°"}else"imperial"==n?l<.9144?(c="in",a/=.0254):l<1609.344?(c="ft",a/=.3048):(c="mi",a/=1609.344):"nautical"==n?(a/=1852,c="nm"):n==h?l<.001?(c="μm",a*=1e6):l<1?(c="mm",a*=1e3):l<1e3?c="m":(c="km",a/=1e3):"us"==n?l<.9144?(c="in",a*=39.37):l<1609.344?(c="ft",a/=.30480061):(c="mi",a/=1609.3472):(0,i.h)(!1,33);for(var b,v,g=3*Math.floor(Math.log(this.minWidth_*a)/Math.log(10));;){if(b=u[(g%3+3)%3]*Math.pow(10,Math.floor(g/3)),v=Math.round(b/a),isNaN(v))return this.element.style.display="none",void(this.renderedVisible_=!1);if(v>=this.minWidth_)break;++g}var M=b+" "+c;this.renderedHTML_!=M&&(this.innerElement_.innerHTML=M,this.renderedHTML_=M),this.renderedWidth_!=v&&(this.innerElement_.style.width=v+"px",this.renderedWidth_=v),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},t}(r.Z)},1908:(e,t,o)=>{"use strict";o.d(t,{z:()=>a});var n=o(2285),i=o(84110),r=o(44183);function a(e){var t,o,a=Object.keys(e.defs),l=a.length;for(t=0;t<l;++t){var s=a[t];if(!(0,n.U2)(s)){var p=e.defs(s);(0,n.Sx)(new r.Z({code:s,axisOrientation:p.axis,metersPerUnit:p.to_meter,units:p.units}))}}for(t=0;t<l;++t){var c=a[t],d=(0,n.U2)(c);for(o=0;o<l;++o){var h=a[o],u=(0,n.U2)(h);if(!(0,i.U2)(c,h))if(e.defs[c]===e.defs[h])(0,n.rM)([d,u]);else{var m=e(c,h);(0,n.zY)(d,u,m.forward,m.inverse)}}}}},45902:(e,t,o)=>{"use strict";var n=o(93379),i=o.n(n),r=o(91133);i()(r.Z,{insert:"head",singleton:!1}),r.Z.locals}}]);