(function(swcHelpers,entities,metro,patcher){'use strict';function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n["default"]=e;return Object.freeze(n)}var swcHelpers__namespace=/*#__PURE__*/_interopNamespace(swcHelpers);var SilentTyping=function(Plugin1){swcHelpers__namespace.inherits(SilentTyping,Plugin1);var _super=swcHelpers__namespace.createSuper(SilentTyping);function SilentTyping(){swcHelpers__namespace.classCallCheck(this,SilentTyping);return _super.apply(this,arguments)}var _proto=SilentTyping.prototype;_proto.start=function start(){return swcHelpers__namespace.asyncToGenerator(function*(){var typing=metro.getByProps("startTyping");patcher.before(typing,"startTyping",ctx=>{ctx.result=null;});})()};return SilentTyping}(swcHelpers__namespace.wrapNativeSuper(entities.Plugin));return SilentTyping;})(swcHelpers,globalThis.aliucord.entities,globalThis.aliucord.metro,globalThis.aliucord.utils.patcher);