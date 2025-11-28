pragma circom 2.0.0;

template FibProof() {
    signal input n;
    signal output fib;

    signal fibs[ n + 1 ];

    fibs[0] <== 0;
    if (n >= 1) {
        fibs[1] <== 1;
    }

    for (var i = 2; i <= n; i++) {
        fibs[i] <== fibs[i - 1] + fibs[i - 2];
    }

    fib <== fibs[n];
}

component main = FibProof();