// constants
import SmartContract from "../../contracts/TheBreadsFactory_Logo10k.json";
// log
import { fetchData } from "../data/dataActions";

let Web3Lib = null;
const getWeb3 = async () => {
  if (!Web3Lib) {
    const mod = await import("web3");
    Web3Lib = mod.Web3 ?? mod.default ?? mod;
  }
  return Web3Lib;
};

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

    if (metamaskIsInstalled) {
      const Web3 = await getWeb3();
      const web3 = new Web3(ethereum);

      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const chainId = await ethereum.request({
          method: "eth_chainId",
        });
        const chainIdDecimal = parseInt(chainId, 16).toString();
        // const NetworkData = await SmartContract.networks[networkId];
        if (chainIdDecimal === "137") {
          const SmartContractObj = new web3.eth.Contract(
            SmartContract.abi,
            "0x6710E0f18270bE32F9590503E306997B3162B83e"
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed("Change network to Polygon (Matic)."));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask wallet."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
