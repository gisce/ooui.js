import { getValueForField } from "./fieldParser";
var stringHasNumber = function (str) {
    if (typeof str !== "string")
        return false; // we only process strings!
    return !isNaN(str) && !isNaN(parseFloat(str));
};
var parseDomain = function (_a) {
    var domainValue = _a.domainValue, values = _a.values, fields = _a.fields;
    var domain;
    if (typeof domainValue === "string") {
        domain = domainValue;
    }
    else {
        return domainValue;
    }
    var outputDomain = "";
    var firstParse = domain
        .slice(1, -1)
        .replace(/\s/g, "")
        .replace(/\"/g, "'")
        .replace(/True/g, "true")
        .replace(/False/g, "false");
    var entries = firstParse.split(",").filter(function (entry) { return entry !== ""; });
    entries.forEach(function (element, idx) {
        if (element.indexOf("(") !== -1) {
            outputDomain += element + ",";
            return;
        }
        if (element.indexOf("(") === -1 && element.indexOf(")") === -1) {
            outputDomain += element + ",";
            return;
        }
        if (element.indexOf(")") !== -1) {
            var value = element.replace(/\)/g, "").replace(/\'/g, "");
            if (value === "true" ||
                value === "false" ||
                stringHasNumber(value) ||
                element.indexOf("'") !== -1 ||
                element.indexOf("[") !== -1) {
                outputDomain += element;
            }
            else {
                var foundValue = getValueForField({
                    values: values,
                    fieldName: value,
                    fields: fields,
                });
                if (!isNaN(foundValue)) {
                    outputDomain += foundValue + ")";
                }
                else {
                    outputDomain += "'" + foundValue + "')";
                }
            }
            if (idx < entries.length - 1) {
                outputDomain += ",";
            }
            return;
        }
    });
    var output = "[" + outputDomain
        .replace(/\(/g, "[")
        .replace(/\)/g, "]")
        .replace(/\'/g, '"') + "]";
    var outputParsed = JSON.parse(output);
    return outputParsed;
};
export { parseDomain };
//# sourceMappingURL=domainParser.js.map