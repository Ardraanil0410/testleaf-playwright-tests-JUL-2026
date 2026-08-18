"use strict";
class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log("This will simulate a click action-This is a message from Parent class");
    }
    focus() {
        console.log("This will focus on the component");
    }
}
class Button extends WebComponent {
    constructor(selector) {
        super(selector);
    }
    click() {
        super.click();
        console.log("This is a click function specific to buttons-this is overridded message");
    }
}
class TextInput extends WebComponent {
    value = "";
    constructor(selector) {
        super(selector);
    }
    enterText(text) {
        this.value = text;
        console.log(`Entering the text ${this.value}`);
    }
}
function testComponents() {
    let button = new Button("Click");
    let input = new TextInput("#username");
    button.click();
    input.enterText("Assignment related to Inheritance ");
}
testComponents();
