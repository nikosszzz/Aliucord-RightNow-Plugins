(function(swcHelpers,entities,metro,patcher,reactNative){'use strict';function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n["default"]=e;return Object.freeze(n)}var swcHelpers__namespace=/*#__PURE__*/_interopNamespace(swcHelpers);var UserDetails=function(Plugin1){swcHelpers__namespace.inherits(UserDetails,Plugin1);var _super=swcHelpers__namespace.createSuper(UserDetails);function UserDetails(){swcHelpers__namespace.classCallCheck(this,UserDetails);return _super.apply(this,arguments)}var _proto=UserDetails.prototype;_proto.start=function start(){return swcHelpers__namespace.asyncToGenerator(function*(){var UserProfileBio=metro.getByName("UserProfileBio");var MessageStyles=metro.Styles.createThemedStyleSheet({"title":{"fontFamily":"ABCGintoNormalVariable_Bold","fontSize":12,"lineHeight":16,"color":"#b9bbbe","textTransform":"uppercase","letterSpacing":.2,"marginLeft":15,"marginTop":20,"marginBottom":6},"text":{"fontFamily":"Whitney-Medium","fontSize":16,"textAlign":"left","color":"#ffffff","marginLeft":20,"flex":1}});patcher.after(UserProfileBio,"default",(ctx,bio)=>{var{user,guild}=ctx.args[0];if(typeof user=="undefined")return;var member=guild&&metro.GuildMemberStore.getMember(guild.id,user.id);ctx.result=[bio,metro.React.createElement(reactNative.Text,{style:MessageStyles.title},"User details"),metro.React.createElement(reactNative.Text,{style:MessageStyles.text},`Created: ${new Date(metro.SnowflakeUtils.extractTimestamp(user.id)).toLocaleString()}`),member&&metro.React.createElement(reactNative.Text,{style:MessageStyles.text},`Joined: ${new Date(member.joinedAt).toLocaleString()}`)];});})()};return UserDetails}(swcHelpers__namespace.wrapNativeSuper(entities.Plugin));return UserDetails;})(swcHelpers,globalThis.aliucord.entities,globalThis.aliucord.metro,globalThis.aliucord.utils.patcher,globalThis.aliucord.metro.ReactNative);