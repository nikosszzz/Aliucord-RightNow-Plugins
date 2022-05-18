(function(swcHelpers,entities,metro,patcher){'use strict';function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n["default"]=e;return Object.freeze(n)}var swcHelpers__namespace=/*#__PURE__*/_interopNamespace(swcHelpers);var CreateWebhooks=function(Plugin1){swcHelpers__namespace.inherits(CreateWebhooks,Plugin1);var _super=swcHelpers__namespace.createSuper(CreateWebhooks);function CreateWebhooks(){swcHelpers__namespace.classCallCheck(this,CreateWebhooks);return _super.apply(this,arguments)}var _proto=CreateWebhooks.prototype;_proto.start=function start(){return swcHelpers__namespace.asyncToGenerator(function*(){var ConnectedWebhooksOverview=metro.getModule(m=>m.default?.name==="ConnectedWebhooksOverview");var{create:createWebhook}=metro.getByProps("update","create","fetchForChannel");patcher.after(ConnectedWebhooksOverview,"default",(ctx,component)=>{if(!createWebhook)return;var{guild,channel}=component.props;if(channel&&guild){ctx.result=metro.React.createElement(metro.ReactNative.FlatList,{data:[0,1],renderItem:({item})=>{console.log(item);if(item=="0")return component;else return metro.React.createElement(metro.ReactNative.Button,{title:"Create Webhook",onPress:()=>{createWebhook(guild.id,channel.id);}})}});}});})()};return CreateWebhooks}(swcHelpers__namespace.wrapNativeSuper(entities.Plugin));return CreateWebhooks;})(swcHelpers,globalThis._globals.aliucord.entities,globalThis._globals.aliucord.metro,globalThis._globals.aliucord.utils.patcher);