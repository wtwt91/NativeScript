﻿import * as app from "tns-core-modules/application";
import * as pageModule from "tns-core-modules/ui/page";
import * as labelModule from "tns-core-modules/ui/label";
import * as stackLayoutModule from "tns-core-modules/ui/layouts/stack-layout";
import * as textViewModule from "tns-core-modules/ui/text-view";
import * as buttonModule from "tns-core-modules/ui/button";

export function createPage() {

    var stackLayout = new stackLayoutModule.StackLayout();
    var label = new labelModule.Label();
    label.text = "CONSOLE MODULE";
    var textView = new textViewModule.TextView();
    textView.text = "Check out the console output.";
    stackLayout.addChild(label);
    stackLayout.addChild(textView);

    var page = new pageModule.Page();
    page.on(pageModule.Page.loadedEvent, function () {
        pageLoaded();
    });

    page.content = stackLayout;
    return page;
}

export function pageLoaded() {

    console.log("### TEST START ###");
    console.time("Time");

    var undef;
    var num = -1;
    var str = "text";
    var obj = { name: "John", age: 34 };
    var button = new buttonModule.Button();
    function Foo() {
        this.abc = "Hello";
        this.circular = this;
    }
    var foo = new Foo();

    console.log(true);
    console.log(false);
    console.log(null);
    console.log(undef);

    console.log(num);
    console.log(str);
    console.log(obj);

    console.log('number: %i', num);
    console.log('string: %s', str);
    console.log("%s %f", str, num);

    console.info("info");
    console.warn("warn");
    console.error("error");

    console.assert(false, "%d not equals %d", 0, 1);
    console.assert(true, "1 equals 1");

    if (app.android) {
        console.dir(true);
        console.dir(false);
        console.dir(null);
        console.dir(undef);

        console.dir(num);
        console.dir(str);

        console.dir(obj);
        console.dir(foo);
        console.log("%j", button);
    }

    console.trace();

    console.timeEnd("Time");
    console.log("### TEST END ###");
}
