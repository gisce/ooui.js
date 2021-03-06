export function getValueForField(_a) {
    var values = _a.values, fieldName = _a.fieldName, fields = _a.fields;
    if (!fields) {
        return false;
    }
    if (!fields[fieldName]) {
        return values[fieldName] || false;
    }
    var fieldType = fields[fieldName].type;
    if (fieldType === "many2one") {
        return values[fieldName] ? values[fieldName][0] || null : false;
    }
    else if (fieldType === "one2many" || fieldType === "many2many") {
        return values[fieldName].map(function (item) { return item.id; });
    }
    else {
        return values[fieldName];
    }
}
//# sourceMappingURL=fieldParser.js.map