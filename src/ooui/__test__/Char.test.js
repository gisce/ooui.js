import WidgetFactory from "../WidgetFactory";

describe('A Char', () => {
    it('should have an id corresponding to field name', () => {
        const widgetFactory = new WidgetFactory();
        const props = {
            name: "char1"
        };

        const widget = widgetFactory.createWidget("char", props);

        expect(widget.id).toBe("char1");
    });

    it('should have colspan 1 by default (with no label)', () => {
        const widgetFactory = new WidgetFactory();
        const props = {
            name: "char1",
        };
        const widget = widgetFactory.createWidget("char", props);
        
        expect(widget.colspan).toBe(1);
    });

    it('with label should have colspan 2', () => {
        const widgetFactory = new WidgetFactory();
        const props = {
            name: "char1",
            string: "Char caption"
        };
        const widget = widgetFactory.createWidget("char", props);

        expect(widget.colspan).toBe(2);
    });

    it('should properly set label', () => {
        const widgetFactory = new WidgetFactory();
        const props = {
            name: "char1",
            string: "Char caption"
        };
        const widget = widgetFactory.createWidget("char", props);

        expect(widget.label).toBe("Char caption");
    });

    it('should properly set size', () => {
        const widgetFactory = new WidgetFactory();
        const props = {
            name: "char1",
            size: 256
        };
        const widget = widgetFactory.createWidget("char", props);

        expect(widget.size).toBe(256);
    });

    it('should properly set readonly', () => {
        const widgetFactory = new WidgetFactory();
        const props = {
            name: "char1",
            readonly: 1,
        };
        const widget = widgetFactory.createWidget("char", props);

        expect(widget.readOnly).toBe(true);
    });
});