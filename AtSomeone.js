(function(swcHelpers,entities,metro,patcher){'use strict';function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n["default"]=e;return Object.freeze(n)}var swcHelpers__namespace=/*#__PURE__*/_interopNamespace(swcHelpers);var AtSomeone=function(Plugin1){swcHelpers__namespace.inherits(AtSomeone,Plugin1);var _super=swcHelpers__namespace.createSuper(AtSomeone);function AtSomeone(){swcHelpers__namespace.classCallCheck(this,AtSomeone);return _super.apply(this,arguments)}var _proto=AtSomeone.prototype;_proto.start=function start(){return swcHelpers__namespace.asyncToGenerator(function*(){var{getChannel}=metro.getByProps("getChannel");var{getMemberIds}=metro.getByProps("getMemberIds");patcher.before(metro.MessageActions,"sendMessage",ctx=>{var[channelId,message]=ctx.args;if(message.content.includes("@someone")){var channel=getChannel(channelId);var members=getMemberIds(channel.guildId);var member=members[Math.floor(Math.random()*members.length)];message.content.replace("@someone",`<@${member}>`);}});})()};return AtSomeone}(swcHelpers__namespace.wrapNativeSuper(entities.Plugin));return AtSomeone;})(swcHelpers,globalThis._globals.aliucord.entities,globalThis._globals.aliucord.metro,globalThis._globals.aliucord.utils.patcher);