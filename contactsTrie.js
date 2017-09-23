function processData(input) {
    const inputArr = input.split('\n');
    inputArr.shift();
    
    let trie = new Trie();
    
    let contacts = [];
    
    inputArr.forEach(input => {
        const op = input.split(' ');
        op[0] === 'add' ? trie.add(op[1]) : trie.find(op[1]);
    });
}

function Trie() {
    this.head = {};
    
    this.add = function(name) {
        let len = name.length;
        let current = this.head;
        for (let i = 1; i <= len; i++) {
            if (!current[name.slice(0, i)]) {
                current[name.slice(0, i)] = {};
            }
            current = current[name.slice(0, i)];
            if (i === len) {
                current['word'] = true;
            }
        }
    }
    
    this.find = function(partial) {
        const len = partial.length;
        let current = this.head;
        let counter = 0;
        
        for (let i = 1; i <= len; i++) {
            if (!current[partial.slice(0, i)]) {
                current = false
                break;
            }
            current = current[partial.slice(0, i)];
        }
        
        if (current) {
            counter = this.count(current)
        }
        
        console.log(counter);
    }
    
    this.count = function(current) {
        let counter = 0;
        for (var property in current) {
            if (current.hasOwnProperty(property)) {
                if (current[property]['word']) {
                    counter++;
                }
                counter += this.count(current[property]);
            }
        }
        return counter;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
