(function(swcHelpers,entities,metro){'use strict';function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n["default"]=e;return Object.freeze(n)}var swcHelpers__namespace=/*#__PURE__*/_interopNamespace(swcHelpers);var AtSomeone=function(Plugin1){swcHelpers__namespace.inherits(AtSomeone,Plugin1);var _super=swcHelpers__namespace.createSuper(AtSomeone);function AtSomeone(){swcHelpers__namespace.classCallCheck(this,AtSomeone);return _super.apply(this,arguments)}var _proto=AtSomeone.prototype;_proto.start=function start(){var _this=this;return swcHelpers__namespace.asyncToGenerator(function*(){_this.commands.registerCommand({name:"@someone",description:"@someone randomly on the server",options:[],execute(_,ctx){var members=metro.GuildMemberStore.getMemberIds(ctx.channel.guild_id);var member=members[Math.floor(Math.random()*members.length)];metro.MessageActions.sendMessage(ctx.channel.id,{content:`<@${member}>`});}});})()};return AtSomeone}(swcHelpers__namespace.wrapNativeSuper(entities.Plugin));return AtSomeone;})(swcHelpers,globalThis.aliucord.entities,globalThis.aliucord.metro);