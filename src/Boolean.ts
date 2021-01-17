import Field from "./Field";

/**
 * Boolean input
 */
class Boolean extends Field {
  /**
   * Label
   */
  _label: string = "";
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
  }

  constructor(props: any) {
    super(props);

    if (props.string) {
      this._label = props.string;
      if (!props.colspan) {
        this.colspan = 2;
      }
    }
  }
}

export default Boolean;
