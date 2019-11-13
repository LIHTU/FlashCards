

var primeApp = new Vue({
    el: "#primeApp",
    data: {
        isPrime: null,
        num: null,
        candidate: 2,
        oldCandidate: 2,
        factor: 2,
        bigPrime: 15485863
    },
    methods: {
        checkIfPrime: function ()
        {
            // let n = Number(this.num);
            let n = this.num;
            let candidate = 2;
            let factorSetCeiling = Math.ceil(n / candidate + 1);
            console.time("prime")
            if (this.num == 2)
            {
                console.timeEnd('prime');
                this.isPrime = 'no';
                this.reset();
                return;
            }
            while (candidate < factorSetCeiling) {
                if (n % candidate == 0)
                { 
                    this.isPrime = 'no';
                    this.candidate = candidate;
                    this.factor = n / candidate;
                    console.timeEnd('prime');
                    return;
                }
                else
                {
                    candidate++;
                    factorSetCeiling = Math.ceil( n / candidate+1);
                }
            }
            this.oldCandidate = candidate;
            this.candidate = 2;
            this.isPrime = 'yes';
            console.timeEnd('prime');
        },
        bruteForce: function ()
        {
            console.time('bruteForce');
            if (this.num == 2)
            {
                console.timeEnd('bruteForce');
                this.isPrime = 'no';
                this.reset();
                return;
            }
            console.log('still going after 2');
            while (this.candidate < this.num)
            { 
                if (this.num%this.candidate==0)
                { 
                    console.timeEnd('bruteForce');
                    this.reset();
                    this.isPrime = 'no';
                    return;
                }else
                {
                    this.candidate++;
                }
            }
            console.timeEnd('bruteForce');
            this.isPrime = "yes";
            this.reset();
        },
        reset: function()
        {
            this.oldCandidate = this.candidate;
            this.candidate = 2;
        }
    }
})