import { getValueForField } from "./fieldParser";

export const parseContext = ({
  context,
  values,
  fields,
}: {
  context?: string;
  values?: any;
  fields?: any;
}) => {
  // TODO: remove try/catch when we know for sure that all the incoming contexts formats are expected
  try {
    if (!context) return undefined;

    if (context.trim().length === 0) {
      return undefined;
    }

    // TODO: maybe this can be accomplished more performant and elegant with regex
    const strNoWhitespaces = context.replace(/\s/g, "");
    const strNoClauLeft = strNoWhitespaces.replace(/\{/g, "");
    const strNoClauRight = strNoClauLeft.replace(/\}/g, "");

    const entryValues = strNoClauRight.split(",");
    const valuesSplitted = entryValues.map((entry) => {
      return entry.split(":");
    });

    const parsedContext: any = {};

    valuesSplitted.forEach((entry) => {
      const fieldName = entry[1];

      if (entry[1].indexOf("'") === -1) {
        const valueForField = getValueForField({
          values,
          fields,
          fieldName: fieldName === "active_id" ? "id" : fieldName,
        });
        parsedContext[entry[0].replace(/'/g, "")] = valueForField || undefined;
      } else {
        parsedContext[entry[0].replace(/'/g, "")] = entry[1].replace(/'/g, "");
      }
    });

    return parsedContext;
  } catch (e) {
    return undefined;
  }
};
