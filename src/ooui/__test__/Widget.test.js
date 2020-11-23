import Widget from "../Widget";

describe('A Widget', () => {
    it('should be constructed with a colspan by default', () => {
        const widget = new Widget();
        
        expect(widget.colspan).toBe(Widget.defaultColspan);
    });

    it('should properly set colspan', () => {
        const widget = new Widget();
        widget.colspan = 3;

        expect(widget.colspan).toBe(3);
    });

    it('should be readOnly false by default', () => {
        const widget = new Widget();

        expect(widget.readOnly).toBe(false);
    });

    it('colspan should be of type Number', () => {
        const widget = new Widget();

        expect(typeof widget.colspan).toBe("number");
    });

    it('set colspan as string should store as a number', () => {
        const widget = new Widget();

        widget.colspan = "3";
        
        expect(typeof widget.colspan).toBe("number");
        expect(widget.colspan).toBe(3);
    });
});