var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Field from "./Field";
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, __assign(__assign({}, props), { nolabel: (props === null || props === void 0 ? void 0 : props.nolabel) !== undefined ? props.nolabel : true })) || this;
        /**
         * Type
         */
        _this._buttonType = "workflow";
        /**
         * Button caption
         */
        _this._caption = "";
        /**
         * Confirm string for modal in button types workflow
         */
        _this._confirmMessage = "";
        if (props) {
            if (props.string) {
                _this._caption = props.string;
            }
            if (props.buttonType) {
                _this._buttonType = props.buttonType;
            }
            if (props.confirm) {
                _this._confirmMessage = props.confirm;
            }
            if (props.special && props.special === "cancel") {
                _this._buttonType = "cancel";
            }
            if (props.icon) {
                _this._icon = props.icon;
            }
        }
        return _this;
    }
    Object.defineProperty(Button.prototype, "buttonType", {
        get: function () {
            return this._buttonType;
        },
        set: function (value) {
            this._buttonType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "caption", {
        get: function () {
            return this._caption;
        },
        set: function (value) {
            this._caption = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "confirmMessage", {
        get: function () {
            return this._confirmMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "confirm", {
        set: function (value) {
            this._confirmMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(Field));
export default Button;
//# sourceMappingURL=Button.js.map