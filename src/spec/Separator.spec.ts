import WidgetFactory from "../WidgetFactory";

describe("A Separator", () => {
  it("should have an id corresponding to field name", () => {
    const widgetFactory = new WidgetFactory();
    const props = {
      string: "Text",
    };

    const widget = widgetFactory.createWidget("separator", props);

    expect(widget.label).toBe("Text");
  });
});
