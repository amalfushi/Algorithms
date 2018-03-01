function spamClusterization(requests, ids, threshold) {
    if (requests.length < 2 || ids.length < 2) return [];
    for (let i = 0; i < requests.length; i++) {
        //turn each string into an array of words   then filter that into unique strings
        requests[i] = requests[i].toLowerCase().match(/[a-zA-z]+/g).filter((v, idx, self) => {
            return self.indexOf(v) === idx
        });
    }

    let JCindex = [];
    let output = [];

    for (let id = 0; id < ids.length; id++) {
        JCindex.push([]);
        let below = true;

        for (let req = 0; req < requests.length; req++) {
            if (id == req) JCindex[id].push(null);
            else JCindex[id].push(calcJCI(requests[id], requests[req]));
        }
    }

    for (let i = 0; i < JCindex.length / 2; i++) {
        let cluster = [];
        for (let k = 0; k < JCindex[i].length; k++) {
            if (JCindex[i][k] >= threshold) {
                let temp = getCluster(JCindex, JCindex[i][k])
                let add = true;;
                for (var out in output) {
                    if (output[out].includes(temp[0])) add = false;
                }

                if (add) output.push(temp);
            }
        }
    }

    output = output.reverse();
    return output

    /////////////
    function getCluster(jci, val) {
        let cluster = [];
        for (let m = 0; m < JCindex.length; m++) {
            if (jci[m].includes(val)) cluster.push(ids[m]);
        }
        return cluster.sort((a, b) => { return a > b });
    }

    ///////////
    function calcJCI(s1, s2) {
        let jci = 0;

        if (s1.length > s2.length) {
            var short = s2;
            var long = s1;
        } else {
            var short = s1;
            var long = s2
        }

        for (let w = 0; w < short.length; w++) {
            if (long.includes(short[w])) jci++;
        }

        return jci / (short.length + long.length - jci);
    }
}
