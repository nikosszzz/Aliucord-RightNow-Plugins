(function(swcHelpers,entities,metro){'use strict';function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n["default"]=e;return Object.freeze(n)}var swcHelpers__namespace=/*#__PURE__*/_interopNamespace(swcHelpers);var MetroTools=function(Plugin1){swcHelpers__namespace.inherits(MetroTools,Plugin1);var _super=swcHelpers__namespace.createSuper(MetroTools);function MetroTools(){swcHelpers__namespace.classCallCheck(this,MetroTools);return _super.apply(this,arguments)}var _proto=MetroTools.prototype;_proto.start=function start(){var _this=this;return swcHelpers__namespace.asyncToGenerator(function*(){var ClydeUtils=metro.getByProps("sendBotMessage");try{_this.commands.registerCommand({name:"findprops",description:"Find module by props.",options:[{name:"query",description:"What to search for. Use space for multiple props.",required:true,type:3},{name:"exact",description:"Whether to match exactly or search for substrings",required:false,type:5}],execute(args,ctx){var query=args[0].value;var exact=args[1]?.value||false;var module=null;if(exact){module=metro.getByProps(...query.split(/\s/g));}else {module=metro.getModule(m=>{var stringified=JSON.stringify(Object.keys(m));return query.split(/\s/g).filter(keyword=>!stringified.includes(keyword)).length<1});}if(module){var embed={type:"rich",title:"Found module",color:5814783,fields:[]};Object.keys(module).forEach(prop=>{try{var repr="unknown";var descriptor=Object.getOwnPropertyDescriptor(module,prop);if(descriptor?.get){repr="getter";}else {var value=module[prop];if(value instanceof Function){repr=AliuHermes.getBytecode(value).split("\n",1)[0];}else {repr=JSON.stringify(value);}}embed.fields.push({name:prop,value:repr});}catch(ex){embed.fields.push({name:prop,value:`${ex}`});}});ClydeUtils.sendBotMessage(ctx.channel.id,"",[embed]);}else {ClydeUtils.sendBotMessage(ctx.channel.id,"No module found :pensive:");}}});}catch(ex){_this.logger.error(ex);}})()};return MetroTools}(swcHelpers__namespace.wrapNativeSuper(entities.Plugin));return MetroTools;})(swcHelpers,globalThis.aliucord.entities,globalThis.aliucord.metro);