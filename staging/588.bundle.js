(self["webpackChunkpersonal_webapp"] = self["webpackChunkpersonal_webapp"] || []).push([[588],{

/***/ 8616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ Trans)
});

// UNUSED EXPORTS: nodesToString

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(5245);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,objectWithoutPropertiesLoose/* default */.Z)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/void-elements/index.js
var void_elements = __webpack_require__(1739);
var void_elements_default = /*#__PURE__*/__webpack_require__.n(void_elements);
;// CONCATENATED MODULE: ./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements_default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const html_parse_stringify_module = (c);
//# sourceMappingURL=html-parse-stringify.module.js.map

;// CONCATENATED MODULE: ./node_modules/html-escaper/esm/index.js
/**
 * Copyright (C) 2017-present by Andrea Giammarchi - @WebReflection
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var replace = ''.replace;

var ca = /[&<>'"]/g;
var es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;

var esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
};
var unes = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"'
};

function esm_escape(es) {
  return replace.call(es, ca, pe);
};

function esm_unescape(un) {
  return replace.call(un, es, cape);
};

function pe(m) {
  return esca[m];
}

function cape(m) {
  return unes[m];
}

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/context.js
var es_context = __webpack_require__(8718);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/utils.js
var utils = __webpack_require__(8236);
;// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/Trans.js



var _excluded = ["format"],
    _excluded2 = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function hasChildren(node, checkLength) {
  if (!node) return false;
  var base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
}

function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return react.isValidElement(child);
  });
}

function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}

function mergeProps(source, target) {
  var newTarget = _objectSpread({}, target);

  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
}

function nodesToString(children, i18nOptions) {
  if (!children) return '';
  var stringNode = '';
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
  childrenArray.forEach(function (child, childIndex) {
    if (typeof child === 'string') {
      stringNode += "".concat(child);
    } else if (react.isValidElement(child)) {
      var childPropsCount = Object.keys(child.props).length;
      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
      var childChildren = child.props.children;

      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
        stringNode += "<".concat(child.type, "/>");
      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (child.props.i18nIsDynamicList) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
      } else {
        var content = nodesToString(childChildren, i18nOptions);
        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
      }
    } else if (child === null) {
      (0,utils/* warn */.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");
    } else if ((0,esm_typeof/* default */.Z)(child) === 'object') {
      var format = child.format,
          clone = _objectWithoutProperties(child, _excluded);

      var keys = Object.keys(clone);

      if (keys.length === 1) {
        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
        stringNode += "{{".concat(value, "}}");
      } else {
        (0,utils/* warn */.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0,utils/* warn */.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
  if (targetString === '') return [];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
  var data = {};

  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0,esm_typeof/* default */.Z)(child) === 'object' && !react.isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  var ast = html_parse_stringify_module.parse("<0>".concat(targetString, "</0>"));

  var opts = _objectSpread(_objectSpread({}, data), combinedTOpts);

  function renderInner(child, node, rootReactNode) {
    var childs = getChildren(child);
    var mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
  }

  function pushTranslatedJSX(child, inner, mem, i, isVoid) {
    if (child.dummy) child.children = inner;
    mem.push(react.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      key: i
    }), isVoid ? undefined : inner));
  }

  function mapAST(reactNode, astNode, rootReactNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

      if (node.type === 'tag') {
        var tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        var isElement = react.isValidElement(child);
        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0,esm_typeof/* default */.Z)(child) === 'object' && child.dummy && !isElement;
        var isKnownComponent = (0,esm_typeof/* default */.Z)(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);

        if (typeof child === 'string') {
          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
            var inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i);
          } else if (isEmptyTransWithHTML) {
          var _inner = mapAST(reactNodes, node.children, rootReactNode);

          mem.push(react.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            var _inner2 = renderInner(child, node, rootReactNode);

            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(react.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

              mem.push(react.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner3));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
          }
        } else if ((0,esm_typeof/* default */.Z)(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          mem.push(react.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), translationContent));
        } else {
          mem.push(react.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        var wrapTextNodes = i18nOptions.transWrapTextNodes;

        var _content = shouldUnescape ? esm_unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

        if (wrapTextNodes) {
          mem.push(react.createElement(wrapTextNodes, {
            key: "".concat(node.name, "-").concat(i)
          }, _content));
        } else {
          mem.push(_content);
        }
      }

      return mem;
    }, []);
  }

  var result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      context = _ref.context,
      _ref$tOptions = _ref.tOptions,
      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      shouldUnescape = _ref.shouldUnescape,
      additionalProps = _objectWithoutProperties(_ref, _excluded2);

  var _ref2 = (0,react.useContext)(es_context/* I18nContext */.OO) || {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0,es_context/* getI18n */.nI)();

  if (!i18n) {
    (0,utils/* warnOnce */.O4)('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  if (context) tOptions.context = context;

  var reactI18nextOptions = _objectSpread(_objectSpread({}, (0,es_context/* getDefaults */.JP)()), i18n.options && i18n.options.react);

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? tOptions.interpolation : {
    interpolation: _objectSpread(_objectSpread({}, tOptions.interpolation), {}, {
      prefix: '#$?',
      suffix: '?$#'
    })
  };

  var combinedTOpts = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, tOptions), {}, {
    count: count
  }, values), interpolationOverride), {}, {
    defaultValue: defaultValue,
    ns: namespaces
  });

  var translation = key ? t(key, combinedTOpts) : defaultValue;
  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? react.createElement(useAsParent, additionalProps, content) : content;
}

/***/ }),

/***/ 7015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ HoverableCard),
  "P": () => (/* reexport */ MediaCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(5295);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/card/HoverableCard.tsx



function HoverableCard(props) {
    const [isMouseOver, setMouseOver] = (0,react.useState)(false);
    return ((0,jsx_runtime.jsx)(Card/* default */.Z, { sx: { ...props.sx }, elevation: isMouseOver ? 5 : 2, onMouseOver: () => setMouseOver(true), onMouseLeave: () => setMouseOver(false), children: props.children }));
}

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Launch.js
var Launch = __webpack_require__(7431);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(9161);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(2643);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(8515);
// EXTERNAL MODULE: ./node_modules/@mui/material/colors/grey.js
var grey = __webpack_require__(7036);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(6634);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 55 modules
var Tooltip = __webpack_require__(6454);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 22 modules
var format = __webpack_require__(3267);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/pt-BR/index.js + 5 modules
var pt_BR = __webpack_require__(8994);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/es/index.js + 5 modules
var es = __webpack_require__(1655);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(1695);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 2 modules
var useTranslation = __webpack_require__(4056);
// EXTERNAL MODULE: ./src/context/AppContext.tsx
var AppContext = __webpack_require__(1431);
// EXTERNAL MODULE: ./src/fonts/index.tsx + 5 modules
var fonts = __webpack_require__(390);
// EXTERNAL MODULE: ./src/i18n/index.tsx + 10 modules
var src_i18n = __webpack_require__(9706);
// EXTERNAL MODULE: ./src/routes/index.tsx
var routes = __webpack_require__(4399);
// EXTERNAL MODULE: ./src/components/chip/StaticChip.tsx
var StaticChip = __webpack_require__(549);
;// CONCATENATED MODULE: ./src/components/card/MediaCard.tsx






















function MediaCard(props) {
    const app = (0,AppContext/* useApp */.qD)();
    const { t, i18n } = (0,useTranslation/* useTranslation */.$)();
    const accessMediaButtonLabel = (0,react.useMemo)(() => {
        if (["post", "thesis"].includes(props.item.kind)) {
            return t("literal:read");
        }
        if (props.item.kind === "live") {
            return t("literal:watch");
        }
        if (props.item.kind === "conference") {
            return t("literal:slides");
        }
        return t("literal:view");
    }, [props.item.kind, t]);
    const dateLocale = (0,react.useMemo)(() => {
        switch (i18n.resolvedLanguage) {
            case src_i18n/* SupportedLanguages.Portuguese */.i.Portuguese:
                return pt_BR/* default */.Z;
            case src_i18n/* SupportedLanguages.Spanish */.i.Spanish:
                return es/* default */.Z;
            case src_i18n/* SupportedLanguages.English */.i.English:
            default:
                return en_US/* default */.Z;
        }
    }, [i18n.resolvedLanguage]);
    const formattedMediaDate = (0,react.useMemo)(() => {
        if (["code", "thesis"].includes(props.item.kind)) {
            return (0,format/* default */.Z)(props.item.releaseDate, "yyyy");
        }
        return (0,format/* default */.Z)(props.item.releaseDate, "PPP", {
            locale: dateLocale,
        });
    }, [dateLocale, props.item.kind, props.item.releaseDate]);
    const publicationIcon = (0,react.useMemo)(() => {
        switch (props.item.publication) {
            case "kieCommunity":
                return { name: t("literal:kieCommunity"), route: routes/* routes.images.kie */._.images.kie };
            case "towardsDataScience":
                return { name: t("literal:towardsDataScience"), route: routes/* routes.images.tds */._.images.tds };
            case "unicamp":
                return {
                    name: t("literal:unicamp"),
                    route: app.colorMode === "light" ? routes/* routes.images.unicamp.light */._.images.unicamp.light : routes/* routes.images.unicamp.dark */._.images.unicamp.dark,
                };
            case "theDevelopersConference":
                return { name: t("literal:theDevelopersConference"), route: routes/* routes.images.tdc */._.images.tdc };
            case "gitHub":
                return {
                    name: t("literal:github"),
                    route: app.colorMode === "light" ? routes/* routes.images.github.light */._.images.github.light : routes/* routes.images.github.dark */._.images.github.dark,
                };
            default:
                throw new Error("Unsupported publication type");
        }
    }, [app.colorMode, props.item.publication, t]);
    return ((0,jsx_runtime.jsxs)(HoverableCard, { children: [(0,jsx_runtime.jsx)(CardHeader/* default */.Z, { title: (0,jsx_runtime.jsx)(Typography/* default */.Z, { sx: {
                        fontFamily: fonts/* Fonts.OXYGEN */.F.OXYGEN,
                        fontSize: { xs: "14px", sm: "16px" },
                        fontWeight: "bold",
                        height: { xs: "auto", lg: "50px" },
                    }, color: grey/* default */.Z[app.colorMode === "light" ? 700 : 500], gutterBottom: true, children: props.item.title }), action: publicationIcon && ((0,jsx_runtime.jsx)(Tooltip/* default */.Z, { title: publicationIcon.name, arrow: true, children: (0,jsx_runtime.jsx)("img", { style: { margin: "4px 8px 0px 16px", width: "20px", height: "20px" }, src: publicationIcon.route, alt: "", loading: "lazy" }) })) }), (0,jsx_runtime.jsx)(CardContent/* default */.Z, { sx: { pt: 0 }, children: (0,jsx_runtime.jsx)(Grid/* default */.ZP, { sx: { height: { xs: "auto", lg: "50px" } }, container: true, spacing: 1, children: [...props.item.keywordKeys]
                        .sort((a, b) => b.length - a.length)
                        .map((keywordKey) => ((0,jsx_runtime.jsx)(Grid/* default */.ZP, { item: true, children: (0,jsx_runtime.jsx)(StaticChip/* StaticChip */.m, { label: t(`literal:${keywordKey}`), color: "success", variant: props.keywordSelection.selectionMap.get(keywordKey) ? "filled" : "outlined", size: "small", onClick: () => props.keywordSelection.onToggleSelection(keywordKey) }) }, `media-keyword-${keywordKey}`))) }) }), (0,jsx_runtime.jsx)(CardActions/* default */.Z, { sx: { pt: 0, px: "16px" }, children: (0,jsx_runtime.jsxs)(Box/* default */.Z, { sx: { width: 1 }, children: [(0,jsx_runtime.jsx)(Typography/* default */.Z, { sx: { fontSize: 13, float: "left", lineHeight: "30px" }, color: "text.secondary", component: "div", children: formattedMediaDate }), props.item.url && ((0,jsx_runtime.jsx)(Link/* default */.Z, { underline: "none", rel: "noreferrer", target: "_blank", href: props.item.url, children: (0,jsx_runtime.jsx)(Button/* default */.Z, { sx: { float: "right" }, size: "small", endIcon: (0,jsx_runtime.jsx)(Launch/* default */.Z, {}), color: "success", children: accessMediaButtonLabel }) }))] }) })] }));
}

;// CONCATENATED MODULE: ./src/components/card/index.tsx




/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ StaticChip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);


function StaticChip(props) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { ...props, sx: { borderWidth: "1px", borderStyle: "solid", borderColor: `${props.color}.main` } });
}


/***/ }),

/***/ 2079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wt": () => (/* reexport */ MediaSection),
  "T3": () => (/* reexport */ Page),
  "mr": () => (/* reexport */ PageHeader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js + 1 modules
var Divider = __webpack_require__(2116);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(6628);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/card/index.tsx + 2 modules
var card = __webpack_require__(7015);
;// CONCATENATED MODULE: ./src/components/page/MediaSection.tsx







const DEFAULT_FADE_TIME = {
    title: 500,
    item: 1000,
};
function MediaSection(props) {
    return ((0,jsx_runtime.jsx)(Fade/* default */.Z, { in: true, timeout: props.fadeTime?.title ?? DEFAULT_FADE_TIME.title, children: (0,jsx_runtime.jsxs)(Box/* default */.Z, { sx: { mt: "30px" }, children: [(0,jsx_runtime.jsx)(Divider/* default */.Z, { textAlign: "left", sx: { mb: "30px", "::before": { width: "1%" }, "::after": { width: "99%" } }, children: (0,jsx_runtime.jsx)(Typography/* default */.Z, { fontWeight: "light", variant: "overline", component: "div", sx: { fontSize: "14px", color: "text.secondary" }, children: props.title }) }), (0,jsx_runtime.jsx)(Grid/* default */.ZP, { container: true, spacing: 3, children: props.mediaItems.map((item, idx) => ((0,jsx_runtime.jsx)(Fade/* default */.Z, { in: true, timeout: props.fadeTime?.item ?? DEFAULT_FADE_TIME.item, children: (0,jsx_runtime.jsx)(Grid/* default */.ZP, { item: true, sx: { width: { xs: "100%", lg: "50%", xl: "33%" } }, children: (0,jsx_runtime.jsx)(card/* MediaCard */.P, { item: item, keywordSelection: props.keywordSelection }) }) }, `${props.title}-${idx}`))) })] }) }));
}

;// CONCATENATED MODULE: ./src/components/page/Page.tsx


function Page(props) {
    return ((0,jsx_runtime.jsx)(Box/* default */.Z, { "data-testid": `${props.name}-page`, sx: { p: "16px 24px", mb: "24px" }, children: props.children }));
}

;// CONCATENATED MODULE: ./src/components/page/PageHeader.tsx



const PageHeader_DEFAULT_FADE_TIME = 500;
function PageHeader(props) {
    return ((0,jsx_runtime.jsx)(Fade/* default */.Z, { in: true, timeout: props.fadeTime ?? PageHeader_DEFAULT_FADE_TIME, children: (0,jsx_runtime.jsx)(Box/* default */.Z, { children: props.children }) }));
}

;// CONCATENATED MODULE: ./src/components/page/index.tsx





/***/ }),

/***/ 7514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ usePageActive)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/hooks/useTimeout.tsx

function useTimeout(callback, delay) {
    const callbackRef = (0,react.useRef)(callback);
    const timeoutRef = (0,react.useRef)();
    (0,react.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    const set = (0,react.useCallback)(() => {
        timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
    }, [delay]);
    const clear = (0,react.useCallback)(() => {
        timeoutRef.current && window.clearTimeout(timeoutRef.current);
    }, []);
    (0,react.useEffect)(() => {
        set();
        return clear;
    }, [delay, set, clear]);
    const reset = (0,react.useCallback)(() => {
        clear();
        set();
    }, [clear, set]);
    return { reset, clear };
}

;// CONCATENATED MODULE: ./src/hooks/usePageActive.tsx


function usePageActive(delay) {
    const [active, setActive] = (0,react.useState)(false);
    useTimeout(() => setActive(true), delay);
    return active;
}


/***/ }),

/***/ 1739:
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ })

}]);