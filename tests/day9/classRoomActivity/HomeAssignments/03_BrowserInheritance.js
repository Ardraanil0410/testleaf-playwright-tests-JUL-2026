"use strict";
class Browser {
    browserName;
    browserVersion;
    constructor(browserName, browserVersion) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    openURL() {
        console.log("Launch the URL");
    }
    closeBrowser() {
        console.log(`This will close the ${this.browserName} Browser`);
    }
    navigateBack() {
        console.log("This is navigate back");
    }
}
class Chrome extends Browser {
    openIncognito() {
        console.log(`This will open the ${this.browserName} in Incognito`);
    }
    clearCache() {
        console.log("This method will clear the Cache");
    }
}
class Edge extends Browser {
    takeSnap() {
        console.log("This method will take the snapshot");
    }
    clearCookies() {
        console.log("This method will clear the cookies");
    }
}
class Safari extends Browser {
    readerMode() {
        console.log("This methode will open the browser in readerMode");
    }
    fullScreenMode() {
        console.log("This methode will open the browser in full Screen Mode");
    }
}
let browserparent = new Browser("Chrome", 56.87787);
browserparent.openURL();
browserparent.closeBrowser();
browserparent.navigateBack();
let browserchild1 = new Chrome("Chrome", 56.87787);
browserchild1.openIncognito();
browserchild1.clearCache();
let browserchild2 = new Edge("Edge", 23.4234);
browserchild2.takeSnap();
browserchild2.clearCookies();
let browserchild3 = new Safari("Safari", 23.4234);
browserchild3.fullScreenMode();
browserchild3.readerMode();
