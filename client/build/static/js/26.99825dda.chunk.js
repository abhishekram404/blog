(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[26],{324:function(t,e,n){"use strict";t.exports=n(325)},325:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=s(n(1)),i=s(n(6)),a=s(n(13));function s(t){return t&&t.__esModule?t:{default:t}}var c=n(326),u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onLoad=n.onLoad.bind(n),n.state={isScriptLoaded:t.isScriptLoaded},n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.state.isScriptLoaded?this.onLoad():c(this.props.scriptUrl,this.onLoad)}},{key:"componentWillReceiveProps",value:function(t){var e=this.editorInstance;e&&e.getData()!==t.content&&e.setData(t.content)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"onLoad",value:function(){if(!this.unmounting)if(this.setState({isScriptLoaded:!0}),window.CKEDITOR)for(var t in this.editorInstance=window.CKEDITOR.appendTo(a.default.findDOMNode(this),this.props.config,this.props.content),this.props.events){var e=this.props.events[t];this.editorInstance.on(t,e)}else console.error("CKEditor not found")}},{key:"render",value:function(){return r.default.createElement("div",{className:this.props.activeClass})}}]),e}(r.default.Component);u.defaultProps={content:"",config:{},isScriptLoaded:!1,scriptUrl:"https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js",activeClass:"",events:{}},u.propTypes={content:i.default.any,config:i.default.object,isScriptLoaded:i.default.bool,scriptUrl:i.default.string,activeClass:i.default.string,events:i.default.object},e.default=u},326:function(t,e){function n(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,r){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"===typeof e&&(r=e,e={}),e=e||{},r=r||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(a,e.attrs),e.text&&(a.text=""+e.text),("onload"in a?n:o)(a,r),a.onload||n(a,r),i.appendChild(a)}}}]);
//# sourceMappingURL=26.99825dda.chunk.js.map