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
import Field from "./Field";
/**
 * DateTime input
 */
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Label
         */
        _this._label = "";
        if (props.string) {
            _this._label = props.string;
            if (!props.colspan) {
                _this.colspan = 2;
            }
        }
        return _this;
    }
    Object.defineProperty(DateTime.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    return DateTime;
}(Field));
export default DateTime;
//# sourceMappingURL=DateTime.js.map