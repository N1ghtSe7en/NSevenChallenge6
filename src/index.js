import 'regenerator-runtime/runtime'

import { initContract, login, logout } from './utils'
import { utils } from "near-api-js";
const BN = require("bn.js");

function showNotification() {
  document.querySelector('[data-behavior=notification]').style.display = 'block'
  setTimeout(() => {
    document.querySelector('[data-behavior=notification]').style.display = 'none'
  }, 7000)
}

let gd, ld, md


window.onload = async () => {

  gd = await window.contract.nft_token({
    token_id: window.accountId + 'p'
  });

  console.log(pd)

  ld = await window.contract.nft_token({
    token_id: window.accountId + 'k'
  });

  console.log(kd)

  md = await window.contract.nft_token({
    token_id: window.accountId + 'e'
  });

  console.log(ed)

  if (pd || kd || ed)
    showNotification()
}

const pform = document.
  getElementById('pform');

pform.addEventListener('submit', pformSubmit);

async function pformSubmit(event) {
  event.preventDefault();
  let amt = document.getElementById('panda').value
  amt = utils.format.parseNearAmount(amt.toString()).toString()
  try {
    // make an update call to the smart contract
    await window.contract.nft_mint({
      token_id: window.accountId + 'p',
      metadata: {
        title: "Thank you for help panda",
        description: "This NFT is a part of NEAR Spring Hackathon ;)",
        media: "https://i.gifer.com/YmbV.gif?wrap=0"
      },
      receiver_id: window.accountId,
    },
      300000000000000,
      new BN(amt))
  } catch (e) {
    alert(
      'Something went wrong! ' +
      'Maybe you need to sign out and back in? ' +
      'Check your browser console for more info.'
    )
    throw e
  }

}

const kform = document.
  getElementById('kform');

kform.addEventListener('submit', kformSubmit);

async function kformSubmit(event) {
  event.preventDefault();
  let amt = document.getElementById('kangaroo').value
  amt = utils.format.parseNearAmount(amt.toString()).toString()
  try {
    // make an update call to the smart contract
    await window.contract.nft_mint({
      token_id: window.accountId + 'k',
      metadata: {
        title: "Thank you for help kangaroo",
        description: "This NFT is a part of NEAR Spring Hackathon ;)",
        media: "https://i.gifer.com/BgYD.gif?wrap=0"
      },
      receiver_id: window.accountId,
    },
      300000000000000,
      new BN(amt))
  } catch (e) {
    alert(
      'Something went wrong! ' +
      'Maybe you need to sign out and back in? ' +
      'Check your browser console for more info.'
    )
    throw e
  }
}

const eform = document.
  getElementById('eform');

eform.addEventListener('submit', eformSubmit);

async function eformSubmit(event) {
  event.preventDefault();
  let amt = document.getElementById('elephant').value
  amt = utils.format.parseNearAmount(amt.toString()).toString()
  try {
    // make an update call to the smart contract
    await window.contract.nft_mint({
      token_id: window.accountId + 'e',
      metadata: {
        title: "Thank you for help elephant",
        description: "This NFT is a part of NEAR Spring Hackathon ;)",
        media: "https://i.gifer.com/LCc8.gif?wrap=0"
      },
      receiver_id: window.accountId,
    },
      300000000000000,
      new BN(amt))
  } catch (e) {
    alert(
      'Something went wrong! ' +
      'Maybe you need to sign out and back in? ' +
      'Check your browser console for more info.'
    )
    throw e
  }
}

document.querySelector('#sign-in-button').onclick = login
document.querySelector('#sign-out-button').onclick = logout

// Display the signed-out-flow container
function signedOutFlow() {
  document.querySelector('#signed-out-flow').style.display = 'block'
}

// Displaying the signed in flow container and fill in account-specific data
function signedInFlow() {
  document.querySelector('#signed-in-flow').style.display = 'block'

  document.querySelectorAll('[data-behavior=account-id]').forEach(el => {
    el.innerText = window.accountId
  })
}

// `nearInitPromise` gets called on page load
window.nearInitPromise = initContract()
  .then(() => {
    if (window.walletConnection.isSignedIn()) signedInFlow()
    else signedOutFlow()
  })
  .catch(console.error)
