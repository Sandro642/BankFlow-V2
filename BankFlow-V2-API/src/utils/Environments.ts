import {isDevEnv} from "../BankFlowV2";
import {server_api_port} from "./Constants";

/**
 * Get the server endpoint for env
 */
export const getServerEndpoint = () => {
    return isDevEnv ? `http://localhost:${server_api_port}` : 'https://api.internet.com'
}