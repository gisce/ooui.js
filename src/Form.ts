import WidgetFactory from "./WidgetFactory";
import Container from "./Container";
import ContainerWidget from "./ContainerWidget";
import Widget from "./Widget";
import { parseNodes } from "./helpers/nodeParser";
import { evaluateAttributes } from "./helpers/attributeParser";
import { evaluateStates, evaluateButtonStates } from "./helpers/stateParser";
import { parseContext } from "./helpers/contextParser";
import { parseOnChange } from "./helpers/onChangeParser";
import { parseDomain } from "./helpers/domainParser";

export type FormParseOptions = {
  readOnly?: boolean;
  values?: any;
};

class Form {
  /**
   * Object containing fields specification of the form.
   */
  _fields: any;
  get fields() {
    return this._fields;
  }

  _container: Container;
  get container(): Container {
    return this._container;
  }

  _string: string | null = null;
  get string(): string | null {
    return this._string;
  }

  /**
   * Widget type
   */
  _type: string = "form";
  get type(): string {
    return this._type;
  }

  /**
   * Determines if form is read only (default is false)
   */
  _readOnly: boolean = false;
  get readOnly(): boolean {
    return this._readOnly;
  }
  set readOnly(value: boolean) {
    this._readOnly = value;
  }

  /**
   * Context
   */
  _context: any = {};
  get context(): any {
    return this._context;
  }
  set context(value: any) {
    this._context = value;
  }

  /**
   * Collection of onChange actions for fields
   */
  _onChangeFields: any = {};
  get onChangeFields(): any {
    return this._onChangeFields;
  }
  set onChangeFields(value: any) {
    this._onChangeFields = value;
  }

  /*
  _widgets = {
    *[Symbol.iterator]() {
      if (this._container && this._container.length) {
        this._container.forEach((item) => {
          
          // yield item
        });
      }
    }
  };
  get widgets() {
    return this._widgets;
  }
  */

  constructor(fields: Object, columns: number = 4) {
    this._fields = fields;
    this._container = new Container(columns);
  }

  parse(xml: string, options?: FormParseOptions) {
    const { values = {}, readOnly = false } = options || {};

    const parser = new DOMParser();
    const view: Document = parser.parseFromString(xml, "text/xml");
    this._string = view.documentElement.getAttribute("string");
    this._readOnly = readOnly;
    this._context = values["id"]
      ? { active_id: values["id"], active_ids: [values["id"]] }
      : {};

    this.parseNode({
      node: view.documentElement,
      container: this._container,
      values,
    });
  }

  parseNode({
    node,
    container,
    values,
  }: {
    node: Element;
    container: Container;
    values: any;
  }) {
    const widgetFactory = new WidgetFactory();

    const nodesParsed = parseNodes(node.childNodes, this._fields);

    nodesParsed.forEach((nodeParsed) => {
      const { tag, tagAttributes, child } = nodeParsed;
      const evaluatedTagAttributes = evaluateAttributes({
        tagAttributes,
        values,
        fields: this._fields,
      });

      let evaluatedStateAttributes;

      if (tag === "button" && tagAttributes.states) {
        evaluatedStateAttributes = evaluateButtonStates({
          states: tagAttributes.states,
          values,
        });
      } else {
        evaluatedStateAttributes = evaluateStates({
          fieldName: tagAttributes.name,
          values,
          fields: this._fields,
        });
      }

      const widgetContext = parseContext({
        context: tagAttributes["context"] || this._fields["context"],
        values,
        fields: this._fields,
      });

      if (tag !== "button") {
        this._context = { ...this._context, ...widgetContext };
      }

      if (tagAttributes["on_change"]) {
        this._onChangeFields[tagAttributes.name] = parseOnChange(
          tagAttributes["on_change"]
        );
      }

      let domain;

      if (tagAttributes["domain"]) {
        domain = parseDomain({
          domainValue: tagAttributes["domain"],
          values,
          fields: this._fields,
        });
      }

      if (
        this._fields[tagAttributes.name] &&
        this._fields[tagAttributes.name].domain
      ) {
        domain = parseDomain({
          domainValue: this._fields[tagAttributes.name].domain,
          values,
          fields: this._fields,
        });
      }

      const widget = widgetFactory.createWidget(tag, {
        ...evaluatedTagAttributes,
        ...evaluatedStateAttributes,
        context: widgetContext,
        domain,
      });

      if (widget instanceof ContainerWidget) {
        this.parseNode({ node: child, container: widget.container, values });
      }

      // If the form is set to readonly, reflect it to its children
      widget.readOnly = widget.readOnly || this.readOnly;
      container.addWidget(widget);
    });
  }

  /**
   * Calls container's findById method to find the widgets matching with param id
   * @param {string} id id to find
   */
  findById(id: string): Widget | null {
    return this.container.findById(id);
  }
}

export default Form;
