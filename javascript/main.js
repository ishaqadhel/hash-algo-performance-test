'use strict';

const fs = require('fs');
const crypto = require('crypto');
const { performance } = require('perf_hooks');

async function main() {
    const assetsFolderPath = '/Users/ishaqadheltyo/git/github/its/final-thesis/hash-algo-performance-test/assets';
    const hashAlgorithm = 'md5';

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

    /* #region  /**=========== Audio File =========== */
    
    const audio500 = fs.readFileSync(`${assetsFolderPath}/audio-500kb.mp3`);
    const audio1000 = fs.readFileSync(`${assetsFolderPath}/audio-1mb.mp3`);
    const audio2000 = fs.readFileSync(`${assetsFolderPath}/audio-2mb.mp3`);
    const audio5000 = fs.readFileSync(`${assetsFolderPath}/audio-5mb.mp3`);
    const audio10000 = fs.readFileSync(`${assetsFolderPath}/audio-10mb.mp3`);

    console.log ('----AUDIO FILE----');

    /* #region  /**=========== Audio File - 500 KB =========== */
    const startTime6 = performance.now();
    const hash6 = crypto.createHash(hashAlgorithm);
    hash6.update(audio500);
    const hashValue6 = hash6.digest('hex');
    const endTime6 = performance.now();
    const elapsedTime6 = endTime6 - startTime6;

    console.log('----500KB----');
    console.log(`Hash value: ${hashValue6}`);
    console.log(`Elapsed time: ${elapsedTime6} milliseconds`);
    /* #endregion  /**======== Audio File - 500 KB =========== */
    
    /* #region  /**=========== Audio File - 1 MB =========== */
    const startTime7 = performance.now();
    const hash7 = crypto.createHash(hashAlgorithm);
    hash7.update(audio1000);
    const hashValue7 = hash7.digest('hex');
    const endTime7 = performance.now();
    const elapsedTime7 = endTime7 - startTime7;

    console.log('----1MB----');
    console.log(`Hash value: ${hashValue7}`);
    console.log(`Elapsed time: ${elapsedTime7} milliseconds`);
    /* #endregion  /**======== Audio File - 1 MB =========== */

    /* #region  /**=========== Audio File - 2 MB =========== */
    const startTime8 = performance.now();
    const hash8 = crypto.createHash(hashAlgorithm);
    hash8.update(audio2000);
    const hashValue8 = hash8.digest('hex');
    const endTime8 = performance.now();
    const elapsedTime8 = endTime8 - startTime8;

    console.log('----2MB----');
    console.log(`Hash value: ${hashValue8}`);
    console.log(`Elapsed time: ${elapsedTime8} milliseconds`);
    /* #endregion  /**======== Audio File - 2 MB =========== */

    /* #region  /**=========== Audio File - 5 MB =========== */
    const startTime9 = performance.now();
    const hash9 = crypto.createHash(hashAlgorithm);
    hash9.update(audio5000);
    const hashValue9 = hash9.digest('hex');
    const endTime9 = performance.now();
    const elapsedTime9 = endTime9 - startTime9;

    console.log('----5MB----');
    console.log(`Hash value: ${hashValue9}`);
    console.log(`Elapsed time: ${elapsedTime9} milliseconds`);
    /* #endregion  /**======== Audio File - 5 MB =========== */

    /* #region  /**=========== Audio File - 10 MB =========== */
    const startTime10 = performance.now();
    const hash10 = crypto.createHash(hashAlgorithm);
    hash10.update(audio10000);
    const hashValue10 = hash10.digest('hex');
    const endTime10 = performance.now();
    const elapsedTime10 = endTime10 - startTime10;

    console.log('----10MB----');
    console.log(`Hash value: ${hashValue10}`);
    console.log(`Elapsed time: ${elapsedTime10} milliseconds`);
    /* #endregion  /**======== Audio File - 10 MB =========== */

    /* #endregion  /**======== Audio File =========== */

    /* #region  /**=========== Video File =========== */
    
    const video500 = fs.readFileSync(`${assetsFolderPath}/video-500kb.mp4`);
    const video1000 = fs.readFileSync(`${assetsFolderPath}/video-1mb.mp4`);
    const video2000 = fs.readFileSync(`${assetsFolderPath}/video-2mb.mp4`);
    const video5000 = fs.readFileSync(`${assetsFolderPath}/video-5mb.mp4`);
    const video10000 = fs.readFileSync(`${assetsFolderPath}/video-10mb.mp4`);

    console.log ('----VIDEO FILE----');

    /* #region  /**=========== Video File - 500 KB =========== */
    const startTime11 = performance.now();
    const hash11 = crypto.createHash(hashAlgorithm);
    hash11.update(video500);
    const hashValue11 = hash11.digest('hex');
    const endTime11 = performance.now();
    const elapsedTime11 = endTime11 - startTime11;

    console.log('----500KB----');
    console.log(`Hash value: ${hashValue11}`);
    console.log(`Elapsed time: ${elapsedTime11} milliseconds`);
    /* #endregion  /**======== Video File - 500 KB =========== */

    /* #region  /**=========== Video File - 1 MB =========== */
    const startTime12 = performance.now();
    const hash12 = crypto.createHash(hashAlgorithm);
    hash12.update(video1000);
    const hashValue12 = hash12.digest('hex');
    const endTime12 = performance.now();
    const elapsedTime12 = endTime12 - startTime12;

    console.log('----1MB----');
    console.log(`Hash value: ${hashValue12}`);
    console.log(`Elapsed time: ${elapsedTime12} milliseconds`);
    /* #endregion  /**======== Video File - 1 MB =========== */

    /* #region  /**=========== Video File - 2 MB =========== */
    const startTime13 = performance.now();
    const hash13 = crypto.createHash(hashAlgorithm);
    hash13.update(video2000);
    const hashValue13 = hash13.digest('hex');
    const endTime13 = performance.now();
    const elapsedTime13 = endTime13 - startTime13;

    console.log('----2MB----');
    console.log(`Hash value: ${hashValue13}`);
    console.log(`Elapsed time: ${elapsedTime13} milliseconds`);
    /* #endregion  /**======== Video File - 2 MB =========== */

    /* #region  /**=========== Video File - 5 MB =========== */
    const startTime14 = performance.now();
    const hash14 = crypto.createHash(hashAlgorithm);
    hash14.update(video5000);
    const hashValue14 = hash14.digest('hex');
    const endTime14 = performance.now();
    const elapsedTime14 = endTime14 - startTime14;

    console.log('----5MB----');
    console.log(`Hash value: ${hashValue14}`);
    console.log(`Elapsed time: ${elapsedTime14} milliseconds`);
    /* #endregion  /**======== Video File - 5 MB =========== */

    /* #region  /**=========== Video File - 10 MB =========== */
    const startTime15 = performance.now();
    const hash15 = crypto.createHash(hashAlgorithm);
    hash15.update(video10000);
    const hashValue15 = hash15.digest('hex');
    const endTime15 = performance.now();
    const elapsedTime15 = endTime15 - startTime15;

    console.log('----10MB----');
    console.log(`Hash value: ${hashValue15}`);
    console.log(`Elapsed time: ${elapsedTime15} milliseconds`);
    /* #endregion  /**======== Video File - 10 MB =========== */

    /* #endregion  /**======== Video File =========== */

    /* #region  /**=========== Result =========== */
    console.log('\n----RESULT----');
    console.log(`Hash Algorithm: ${hashAlgorithm}`);

    const data = [
        { fileSize: '500 KB', fileType: '.txt', hashTime: `${elapsedTime} milliseconds` },
        { fileSize: '1 MB', fileType: '.txt', hashTime: `${elapsedTime2} milliseconds` },
        { fileSize: '2 MB', fileType: '.txt', hashTime: `${elapsedTime3} milliseconds` },
        { fileSize: '5 MB', fileType: '.txt', hashTime: `${elapsedTime4} milliseconds` },
        { fileSize: '10 MB', fileType: '.txt', hashTime: `${elapsedTime5} milliseconds` },
        { fileSize: '500 KB', fileType: '.mp3', hashTime: `${elapsedTime6} milliseconds` },
        { fileSize: '1 MB', fileType: '.mp3', hashTime: `${elapsedTime7} milliseconds` },
        { fileSize: '2 MB', fileType: '.mp3', hashTime: `${elapsedTime8} milliseconds` },
        { fileSize: '5 MB', fileType: '.mp3', hashTime: `${elapsedTime9} milliseconds` },
        { fileSize: '10 MB', fileType: '.mp3', hashTime: `${elapsedTime10} milliseconds` },
        { fileSize: '500 KB', fileType: '.mp4', hashTime: `${elapsedTime11} milliseconds` },
        { fileSize: '1 MB', fileType: '.mp4', hashTime: `${elapsedTime12} milliseconds` },
        { fileSize: '2 MB', fileType: '.mp4', hashTime: `${elapsedTime13} milliseconds` },
        { fileSize: '5 MB', fileType: '.mp4', hashTime: `${elapsedTime14} milliseconds` },
        { fileSize: '10 MB', fileType: '.mp4', hashTime: `${elapsedTime15} milliseconds` },
    ];
      
    console.table(data, ['fileSize', 'fileType', 'hashTime']);
    /* #endregion  /**======== Result =========== */

}

main();