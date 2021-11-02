const os = require('os');
const chilkat = require('@chilkat/ck-node14-win64');
function chilkatExample(encrypted) {

    const crypt = new chilkat.Crypt2();

    // Set the encryption algorithm = "rc2"
    crypt.CryptAlgorithm = "rc2";

    // CipherMode may be "ecb" or "cbc"
    crypt.CipherMode = "cbc";

    // KeyLength may range from 8 bits to 1024 bits
    crypt.KeyLength = 128;

    // RC2 also has an effective key length property
    // which can also range from 8 bits to 1024 bits:
    crypt.Rc2EffectiveKeyLength = 128;

    // The padding scheme determines the contents of the bytes
    // that are added to pad the result to a multiple of the
    // encryption algorithm's block size.  RC2 has a block
    // size of 8 bytes, so encrypted output is always
    // a multiple of 8.
    crypt.PaddingScheme = 0;

    // EncodingMode specifies the encoding of the output for
    // encryption, and the input for decryption.
    // It may be "hex", "url", "base64", or "quoted-printable".
    crypt.EncodingMode = "hex";

    // An initialization vector is required if using CBC mode.
    // ECB mode does not use an IV.
    // The length of the IV is equal to the algorithm's block size.
    // It is NOT equal to the length of the key.
    const ivHex = "0001020304050607";
    crypt.SetEncodedIV(ivHex,"hex");

    // The secret key must equal the size of the key.
    // For 128-bit encryption, the binary secret key is 16 bytes.
    const keyHex = "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F";
    crypt.SetEncodedKey(keyHex,"hex");

    // Encrypt a string...
    // The input string is 44 ANSI characters (i.e. 44 bytes), so
    // the output should be 48 bytes (a multiple of 8).
    // Because the output is a hex string, it should
    // be 96 characters long (2 chars per byte).
    // const encStr = crypt.EncryptStringENC("The quick brown fox jumps over the lazy dog.");
    // console.log(encStr);

    // Now decrypt:
    const decStr = crypt.DecryptStringENC(encrypted);
    console.log(decStr);

}

chilkatExample("BBB0EF0769CBDFEBEDD02B2ABEBC7E8856642371EA33A72C83B1AD3255C99C950D66DE8E8EA6ABCD2AB672FE204961E1");
