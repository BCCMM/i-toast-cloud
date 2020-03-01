var ToasterState = {
    notFlushed: 0,
    flushed: 1,
    doneToasting: 2
}

class Toaster {

    constructor() {
        this.state = ToasterState.notFlushed;
    }

    flush() {
        if (this.state == ToasterState.notFlushed) {
            this.state = ToasterState.flushed;
        } else {
            throw "Toaster was already flushed"
        }
    }

    isFlushed() {
        return this.state != ToasterState.notFlushed;
    }
}

module.exports = Toaster;