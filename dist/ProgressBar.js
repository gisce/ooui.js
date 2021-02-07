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
 * FloatTime input
 */
var FloatTime = /** @class */ (function (_super) {
    __extends(FloatTime, _super);
    function FloatTime(props) {
        var _this = _super.call(this, props) || this;
        if (props.string) {
            if (!props.colspan) {
                _this.colspan = 2;
            }
        }
        return _this;
    }
    return FloatTime;
}(Field));
export default FloatTime;
//# sourceMappingURL=ProgressBar.js.map