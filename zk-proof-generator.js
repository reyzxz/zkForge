const snarkjs = require("snarkjs");
const { ethers } = require("ethers");

async function generateProof(input) {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(input, "circuit.wasm", "circuit_final.zkey");

    return { proof, publicSignals };
}

async function verifyProof(proof, publicSignals, verificationKey) {
    return await snarkjs.groth16.verify(verificationKey, publicSignals, proof);
}

// Contoh penggunaan:
(async () => {
    const input = { a: 3, b: 5 };
    console.log("Generating proof...");
    const { proof, publicSignals } = await generateProof(input);
    console.log("Proof generated:", proof);
})();
