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
 * Integer input
 */
var Integer = /** @class */ (function (_super) {
    __extends(Integer, _super);
    function Integer(props) {
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.string) {
            if (!props.colspan) {
                _this.colspan = 2;
            }
        }
        return _this;
    }
    return Integer;
}(Field));
export default Integer;
//# sourceMappingURL=Integer.js.map