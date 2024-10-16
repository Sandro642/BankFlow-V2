const Logger = {
    log: (s: any) => {
        console.log('\u001b[1;32m[BankFlow V2] [LOG]\u001b[0m', s);
    },
    info: (s: any) => {
        console.log('\u001b[1;34m[BankFlow V2] [INFO]\u001b[0m', s);
    },
    error: (s: any) => {
        console.log('\u001b[1;31m[BankFlow V2] [ERROR]\u001b[0m', s);
    },
    warn: (s: any) => {
        console.log('\u001b[1;33m[BankFlow V2] [WARN]\u001b[0m', s);
    }
}

export {Logger};