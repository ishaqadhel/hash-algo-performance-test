'use strict';

const fs = require('fs');
const crypto = require('crypto');
const { performance } = require('perf_hooks');

async function main() {
    const assetsFolderPath = '/Users/ishaqadheltyo/git/github/its/final-thesis/hash-algo-performance-test/assets';
    const hashAlgorithm = 'sha1';

    /* #region  /**=========== Text File =========== */
    const text500 = fs.readFileSync(`${assetsFolderPath}/text-500kb.txt`);
    const text1000 = fs.readFileSync(`${assetsFolderPath}/text-1mb.txt`);
    const text2000 = fs.readFileSync(`${assetsFolderPath}/text-2mb.txt`);
    const text5000 = fs.readFileSync(`${assetsFolderPath}/text-5mb.txt`);
    const text10000 = fs.readFileSync(`${assetsFolderPath}/text-10mb.txt`);

    console.log ('----TEXT FILE----');

    /* #region  /**=========== Text File - 500 KB =========== */
    const startTime = performance.now();
    const hash = crypto.createHash(hashAlgorithm);
    hash.update(text500);
    const hashValue = hash.digest('hex');
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    console.log('----500KB----');
    console.log(`Hash value: ${hashValue}`);
    console.log(`Elapsed time: ${elapsedTime} milliseconds`);
    /* #endregion  /**======== Text File - 500 KB =========== */

    /* #region  /**=========== Text File - 1 MB =========== */
    const startTime2 = performance.now();
    const hash2 = crypto.createHash(hashAlgorithm);
    hash2.update(text1000);
    const hashValue2 = hash2.digest('hex');
    const endTime2 = performance.now();
    const elapsedTime2 = endTime2 - startTime2;

    console.log('----1MB----');
    console.log(`Hash value: ${hashValue2}`);
    console.log(`Elapsed time: ${elapsedTime2} milliseconds`);
    /* #endregion  /**======== Text File - 1 MB =========== */

    /* #region  /**=========== Text File - 2 MB =========== */
    const startTime3 = performance.now();
    const hash3 = crypto.createHash(hashAlgorithm);
    hash3.update(text2000);
    const hashValue3 = hash3.digest('hex');
    const endTime3 = performance.now();
    const elapsedTime3 = endTime3 - startTime3;

    console.log('----2MB----');
    console.log(`Hash value: ${hashValue3}`);
    console.log(`Elapsed time: ${elapsedTime3} milliseconds`);
    /* #endregion  /**======== Text File - 2 MB =========== */

    /* #region  /**=========== Text File - 5 MB =========== */
    const startTime4 = performance.now();
    const hash4 = crypto.createHash(hashAlgorithm);
    hash4.update(text5000);
    const hashValue4 = hash4.digest('hex');
    const endTime4 = performance.now();
    const elapsedTime4 = endTime4 - startTime4;

    console.log('----5MB----');
    console.log(`Hash value: ${hashValue4}`);
    console.log(`Elapsed time: ${elapsedTime4} milliseconds`);
    /* #endregion  /**======== Text File - 5 MB =========== */

    /* #region  /**=========== Text File - 10 MB =========== */
    const startTime5 = performance.now();
    const hash5 = crypto.createHash(hashAlgorithm);
    hash5.update(text10000);
    const hashValue5 = hash5.digest('hex');
    const endTime5 = performance.now();
    const elapsedTime5 = endTime5 - startTime5;

    console.log('----10MB----');
    console.log(`Hash value: ${hashValue5}`);
    console.log(`Elapsed time: ${elapsedTime5} milliseconds`);
    /* #endregion  /**======== Text File - 10 MB =========== */

    /* #endregion  /**======== Text File =========== */

}

main();