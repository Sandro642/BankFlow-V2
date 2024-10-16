const argPort = Number(process.argv.find((arg) => arg.startsWith('-p='))?.split('=')[1])
export const server_api_port = isNaN(argPort) ? 3000 : argPort;
export const server_api_ip = process.argv.find((arg) => arg.startsWith('-ip='))?.split('=')[1] || '127.0.0.1';