(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"8Vt5":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("vVgw"),i=n("iNPk"),c=n("/MKj"),u=n("EC67"),s=n("ZrOX"),l=n("4IMT"),f=n.n(l),p=n("qu0K"),m=n.n(p),y=n("iJl9"),b=n.n(y),d=n("Pbn2"),h=n.n(d),g=n("qPIi"),v=n.n(g),O=n("ATwu"),w=n.n(O),S=n("E+oP"),j=n.n(S),E=n("7++0"),_=n("Falu"),P=n("4ztd"),k=n("fVSG"),M=n("aXyS");function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e){return(C="function"==typeof Symbol&&"symbol"===T(Symbol.iterator)?function(e){return T(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":T(e)})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=Object(E.c)({successful:{id:"reset_password.send_action_successful",defaultMessage:"Your action was successful."}}),N=function(e){function t(e){var n,r,o,a,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=L(t).call(this,e),n=!o||"object"!==C(o)&&"function"!=typeof o?D(r):o,a=D(n),c=function(e){e.preventDefault();var t=n.props,r=t.form,o=t.intl,a=n.api,i=a.axios,c=(0,a.route)("auth.reset-password.send-email-token");r.validateFields((function(e,t){j()(e)&&(i.post(c.url(),t).then((function(e){return Object(k.c)(e,r,(function(){n.setState({confirmLoading:!1}),n.triggerSent(t.email)}),o.formatMessage(x.successful))})).catch((function(e){return Object(k.b)(e,r,t,(function(){n.setState({confirmLoading:!1})}))})),n.setState({confirmLoading:!0}))}))},(i="handleSubmit")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,n.api=new _.b,n.state={confirmLoading:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),n=t,(r=[{key:"componentWillUnmount",value:function(){this.api.cancel()}},{key:"triggerSent",value:function(e){var t=this.props.onSent;if("function"==typeof t)return t(e)}},{key:"render",value:function(){var e=this.props,t=(e.intl,e.form),n=e.recaptcha,r=t.getFieldDecorator,a=t.getFieldError,i=this.state.confirmLoading;return o.a.createElement(m.a,{onSubmit:this.handleSubmit},o.a.createElement(m.a.Item,{className:"mt-3"},r("email",{rules:[{required:!0},{type:"email"}]})(o.a.createElement(b.a,null))),n.enable&&o.a.createElement(m.a.Item,null,r("recaptcha",{rules:[{required:!0}]})(o.a.createElement(M.a,{errors:a("recaptcha"),settings:n}))),o.a.createElement(f.a,{loading:i,type:"primary",htmlType:"submit"},o.a.createElement("span",null,o.a.createElement(E.a,{defaultMessage:"Send Code",id:"common.send_code"}))))}}])&&I(n.prototype,r),a&&I(n,a),t}(r.Component),F=Object(i.c)(Object(c.b)((function(e){return{recaptcha:e.settings.recaptcha}})),Object(P.a)())(N),R=n("3OWR"),q=n.n(R),W=n("MRim");function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e){return(Y="function"==typeof Symbol&&"symbol"===U(Symbol.iterator)?function(e){return U(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":U(e)})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=Object(E.c)({invalidPhone:{id:"reset_password.invalid_phone",defaultMessage:"You phone is invalid."},successful:{id:"reset_password.send_action_successful",defaultMessage:"Your action was successful."}}),Z=function(e){function t(e){var n,r,o,a,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=G(t).call(this,e),n=!o||"object"!==Y(o)&&"function"!=typeof o?J(r):o,a=J(n),c=function(e){e.preventDefault();var t=n.props,r=t.form,o=t.intl,a=n.api,i=a.axios,c=(0,a.route)("auth.reset-password.send-phone-token");r.validateFields((function(e,t){if(j()(e)){var a=q()({},t);if(n.itl){var u=n.itl.getSelectedCountryData();a.phone_country=u.iso2}i.post(c.url(),a).then((function(e){return Object(k.c)(e,r,(function(){n.setState({confirmLoading:!1}),n.triggerSent(a.phone)}),o.formatMessage(X.successful))})).catch((function(e){return Object(k.b)(e,r,a,(function(){n.setState({confirmLoading:!1})}))})),n.setState({confirmLoading:!0})}}))},(i="handleSubmit")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,n.api=new _.b,n.state={confirmLoading:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,e),n=t,(r=[{key:"componentWillUnmount",value:function(){this.api.cancel()}},{key:"triggerSent",value:function(e){var t=this.props.onSent;if("function"==typeof t)return t(e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.form,r=e.recaptcha,a=n.getFieldDecorator,i=n.getFieldError,c=this.state.confirmLoading,u=this;return o.a.createElement(m.a,{onSubmit:this.handleSubmit},o.a.createElement(m.a.Item,{className:"mt-3"},a("phone",{rules:[{required:!0},{validator:function(e,n,r){u.itl&&!u.itl.isValidNumber()&&n&&r(t.formatMessage(X.invalidPhone)),r()}}]})(o.a.createElement(W.a,{itl:function(e){return u.itl=e}}))),r.enable&&o.a.createElement(m.a.Item,null,a("recaptcha",{rules:[{required:!0}]})(o.a.createElement(M.a,{errors:i("recaptcha"),settings:r}))),o.a.createElement(f.a,{loading:c,type:"primary",htmlType:"submit"},o.a.createElement("span",null,o.a.createElement(E.a,{defaultMessage:"Send Code",id:"common.send_code"}))))}}])&&A(n.prototype,r),a&&A(n,a),t}(r.Component),z=Object(i.c)(Object(c.b)((function(e){return{recaptcha:e.settings.recaptcha}})),Object(P.a)(),E.d)(Z);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){return(H="function"==typeof Symbol&&"symbol"===B(Symbol.iterator)?function(e){return B(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":B(e)})(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=Object(E.c)({successful:{id:"reset_password.verification_action_successful",defaultMessage:"Your action was successful."}}),ae=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=ee(t).call(this,e),n=!o||"object"!==H(o)&&"function"!=typeof o?te(r):o,re(te(n),"handleSubmit",(function(e){e.preventDefault();var t=n.props,r=t.form,o=t.intl,a=t.target,i=n.api,c=i.axios,u=(0,i.route)("auth.reset-password.verify-email-token");r.validateFields((function(e,t){if(j()(e)){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{email:a});c.post(u.url(),i).then((function(e){return Object(k.c)(e,r,(function(e){n.setState({confirmLoading:!1}),n.triggerVerified(e.token)}),o.formatMessage(oe.successful))})).catch((function(e){return Object(k.b)(e,r,i,(function(){n.setState({confirmLoading:!1})}))})),n.setState({confirmLoading:!0})}}))})),n.api=new _.b,n.state={confirmLoading:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,e),n=t,(r=[{key:"componentWillUnmount",value:function(){this.api.cancel()}},{key:"triggerVerified",value:function(e){var t=this.props.onVerified;if("function"==typeof t)return t(e)}},{key:"render",value:function(){var e=this.props,t=(e.intl,e.form),n=this.state.confirmLoading,r=t.getFieldDecorator;return o.a.createElement(m.a,{onSubmit:this.handleSubmit},o.a.createElement(m.a.Item,{className:"mt-3"},r("token",{rules:[{required:!0}]})(o.a.createElement(b.a,null))),o.a.createElement(f.a,{loading:n,type:"primary",htmlType:"submit"},o.a.createElement("span",null,o.a.createElement(E.a,{defaultMessage:"Verify Code",id:"common.verify_code"}))))}}])&&$(n.prototype,r),a&&$(n,a),t}(r.Component),ie=Object(i.c)(Object(P.a)())(ae);function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e){return(ue="function"==typeof Symbol&&"symbol"===ce(Symbol.iterator)?function(e){return ce(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":ce(e)})(e)}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=Object(E.c)({successful:{id:"reset_password.verification_action_successful",defaultMessage:"Your action was successful."}}),de=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=fe(t).call(this,e),n=!o||"object"!==ue(o)&&"function"!=typeof o?pe(r):o,ye(pe(n),"handleSubmit",(function(e){e.preventDefault();var t=n.props,r=t.form,o=t.intl,a=t.target,i=n.api,c=i.axios,u=(0,i.route)("auth.reset-password.verify-phone-token");r.validateFields((function(e,t){if(j()(e)){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){ye(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{phone:a});c.post(u.url(),i).then((function(e){return Object(k.c)(e,r,(function(e){n.setState({confirmLoading:!1}),n.triggerVerified(e.token)}),o.formatMessage(be.successful))})).catch((function(e){return Object(k.b)(e,r,i,(function(){n.setState({confirmLoading:!1})}))})),n.setState({confirmLoading:!0})}}))})),n.api=new _.b,n.state={confirmLoading:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,e),n=t,(r=[{key:"componentWillUnmount",value:function(){this.api.cancel()}},{key:"triggerVerified",value:function(e){var t=this.props.onVerified;if("function"==typeof t)return t(e)}},{key:"render",value:function(){var e=this.props,t=(e.intl,e.form),n=this.state.confirmLoading,r=t.getFieldDecorator;return o.a.createElement(m.a,{onSubmit:this.handleSubmit},o.a.createElement(m.a.Item,{className:"mt-3"},r("token",{rules:[{required:!0}]})(o.a.createElement(b.a,null))),o.a.createElement(f.a,{loading:n,type:"primary",htmlType:"submit"},o.a.createElement("span",null,o.a.createElement(E.a,{defaultMessage:"Verify Code",id:"common.verify_code"}))))}}])&&le(n.prototype,r),a&&le(n,a),t}(r.Component),he=Object(i.c)(Object(P.a)())(de);function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e){return(ve="function"==typeof Symbol&&"symbol"===ge(Symbol.iterator)?function(e){return ge(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":ge(e)})(e)}function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pe=Object(E.c)({successful:{id:"reset_password.successful",defaultMessage:"Password changed Successfully."},password:{id:"reset_password.password",defaultMessage:"Password"},verifyPassword:{id:"reset_password.verify_password",defaultMessage:"Verify Password"}}),ke=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=Se(t).call(this,e),n=!o||"object"!==ve(o)&&"function"!=typeof o?je(r):o,_e(je(n),"handleVerificationChange",(function(e){n.setState({verification:e.target.value})})),_e(je(n),"handleTokenSent",(function(e){n.setState({target:e,tokenSent:!0})})),_e(je(n),"handleTokenVerified",(function(e){n.setState({nonce:e})})),_e(je(n),"resendToken",(function(){n.setState({target:"",tokenSent:!1,nonce:""})})),_e(je(n),"handleSubmit",(function(e){e.preventDefault();var t=n.state,r=t.nonce,o=t.verification,a=t.target,i=n.api,c=i.axios,u=i.route,s=n.props,l=s.form,f=s.intl,p=s.history,m=u("auth.reset-password.reset");l.validateFields((function(e,t){if(j()(e)){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(n,!0).forEach((function(t){_e(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{token:r});i[o]=a,c.post(m.url(),i).then((function(e){return Object(k.c)(e,l,(function(){n.setState({confirmLoading:!1}),j()(p)||p.replace("/")}),f.formatMessage(Pe.successful))})).catch((function(e){return Object(k.b)(e,l,i,(function(){n.setState({confirmLoading:!1})}))})),n.setState({confirmLoading:!0})}}))})),n.api=new _.b,n.state={target:"",verification:"email",nonce:"",confirmLoading:!1,tokenSent:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(t,e),n=t,(r=[{key:"componentWillUnmount",value:function(){this.api.cancel()}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.form,r=e.recaptcha,a=this.state,i=a.verification,c=a.tokenSent,u=a.target,s=a.nonce,l=a.confirmLoading,p=n.getFieldDecorator,y=n.getFieldError,d={display:"block",padding:"10px 0"};return o.a.createElement("div",{className:"cp-login-container"},o.a.createElement("div",{className:"cp-login-content"},o.a.createElement("div",{className:"text-center cp-login-header"},o.a.createElement("h1",{className:"cp-login-title"},o.a.createElement(E.a,{defaultMessage:"Reset Password",id:"common.reset_password"}))),!s&&o.a.createElement("div",{className:"text-justify"},c?o.a.createElement(w.a,{type:"success",message:o.a.createElement(E.a,{defaultMessage:"A code has been sent to your selected method, you should receive it if it is associated with an account and has been verified. Enter the code received below to continue. {resend}",id:"reset_password.verify_token_info",values:{resend:o.a.createElement("a",{className:"font-weight-semi-bold",onClick:this.resendToken},o.a.createElement(E.a,{defaultMessage:"Resend Code?",id:"common.resend_code"}))}})}):o.a.createElement(w.a,{type:"info",message:o.a.createElement(E.a,{defaultMessage:"Select your preferred {verification} method to reset your password. We will send you a code if this method is associated with any account and has been verified.",id:"reset_password.select_method_info",values:{verification:o.a.createElement("span",{className:"font-weight-semi-bold"},o.a.createElement(E.a,{defaultMessage:"Verification",id:"common.verification"}))}})})),o.a.createElement("div",{className:"mt-3"},!c&&o.a.createElement(v.a.Group,{onChange:this.handleVerificationChange,value:i},o.a.createElement(v.a,{style:d,value:"email"},o.a.createElement("span",{className:"font-weight-medium"},o.a.createElement(E.a,{defaultMessage:"Email Address",id:"common.email_address"}))),o.a.createElement(v.a,{style:d,value:"phone"},o.a.createElement("span",{className:"font-weight-medium"},o.a.createElement(E.a,{defaultMessage:"Phone Number",id:"common.phone_number"})))),s?o.a.createElement(m.a,{onSubmit:this.handleSubmit},o.a.createElement(m.a.Item,null,p("password",{rules:[{required:!0}]})(o.a.createElement(b.a.Password,{placeholder:t.formatMessage(Pe.password),prefix:o.a.createElement(h.a,{type:"lock"})}))),o.a.createElement(m.a.Item,null,p("password_confirmation",{rules:[{required:!0}]})(o.a.createElement(b.a.Password,{placeholder:t.formatMessage(Pe.verifyPassword),prefix:o.a.createElement(h.a,{type:"lock"})}))),r.enable&&o.a.createElement(m.a.Item,null,p("recaptcha",{rules:[{required:!0}]})(o.a.createElement(M.a,{errors:y("recaptcha"),settings:r}))),o.a.createElement(m.a.Item,{className:"text-center"},o.a.createElement(f.a,{loading:l,htmlType:"submit",type:"primary"},o.a.createElement("span",null,o.a.createElement(E.a,{defaultMessage:"Change Password",id:"common.change_password"}))))):o.a.createElement("div",null,"email"===i&&(c&&u?o.a.createElement(ie,{onVerified:this.handleTokenVerified,target:u}):o.a.createElement(F,{onSent:this.handleTokenSent})),"phone"===i&&(c&&u?o.a.createElement(he,{onVerified:this.handleTokenVerified,target:u}):o.a.createElement(z,{onSent:this.handleTokenSent}))))))}}])&&we(n.prototype,r),a&&we(n,a),t}(r.Component),Me=Object(i.c)(Object(c.b)((function(e){return{recaptcha:e.settings.recaptcha}})),Object(P.a)(),u.h)(ke);t.default=Object(i.c)(Object(c.b)((function(e){var t=e.auth;return{auth:new a.a(t)}})))((function(e){var t=e.auth,n=e.match;if(t.check())return o.a.createElement(s.a,{to:"/",status:302});var r=n.path;return o.a.createElement(u.d,null,o.a.createElement(s.a,{from:"".concat(r,"/"),to:"".concat(r,"/reset_password"),exact:!0,status:301}),o.a.createElement(u.b,{path:"".concat(r,"/reset_password"),component:Me}))}))},MRim:function(e,t,n){"use strict";var r=n("mwIZ"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=n("BfO1"),u=n.n(c),s=(n("cfI3"),n("Falu")),l=n("fVSG");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"===f(Symbol.iterator)?function(e){return f(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":f(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n,r,o,a,c,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=d(t).call(this,e),n=!o||"object"!==p(o)&&"function"!=typeof o?h(r):o,a=h(n),u=function(e){var t=n.props.onChange;if("function"==typeof t)return t(e.target.value)},(c="handleChange")in a?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[c]=u,n.phoneInputRef=i.a.createRef(),n.api=new s.b,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.initIntlTelInput()}},{key:"initIntlTelInput",value:function(){var e=this.props.itl,t=this.phoneInputRef.current,n=this.api,r=n.axios,a=n.route;this.intlTelInput=u()(t,{initialCountry:"auto",nationalMode:!1,geoIpLookup:function(e){var t=a("ip.info");r.post(t.url()).then((function(t){return Object(l.d)(t,(function(t){e(o()(t,"iso_code"))}))})).catch((function(e){return Object(l.a)(e)}))}}),"function"==typeof e&&e(this.intlTelInput)}},{key:"componentWillUnmount",value:function(){this.intlTelInput.destroy(),this.api.cancel()}},{key:"render",value:function(){var e=this.props,t=(e.itl,e.value),n=y(e,["itl","value"]);return i.a.createElement("input",m({ref:this.phoneInputRef,className:"ant-input"},n,{value:t||"",onChange:this.handleChange,style:{width:"100%"}}))}}])&&b(n.prototype,r),a&&b(n,a),t}(a.Component);t.a=v}}]);