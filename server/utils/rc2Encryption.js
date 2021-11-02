const os = require('os');
const chilkat = require('@chilkat/ck-node14-win64');
function EncryptText(text) {

    const crypt = new chilkat.Crypt2();

    // Establecer el algoritmo de encriptación = "rc2"
    crypt.CryptAlgorithm = "rc2";

    // CipherMode puede ser "ecb" o "cbc"
    crypt.CipherMode = "cbc";

    // La longitud de la clave puede ser de entre 8 y 1024 bits
    crypt.KeyLength = 128;

    // RC2 también tiene una propiedad de longitud de clave efectiva
    // que también puede ir de 8 bits a 1024 bits:
    crypt.Rc2EffectiveKeyLength = 128;

    // El esquema de relleno determina el contenido de los bytes
    // que se añaden para rellenar el resultado a un múltiplo del
    // tamaño de bloque del algoritmo de encriptación.  RC2 tiene un tamaño de bloque
    // tamaño de bloque de 8 bytes, por lo que la salida encriptada es siempre
    // un múltiplo de 8.
    crypt.PaddingScheme = 0;

    // EncodingMode especifica la codificación de la salida para
    // cifrado, y de la entrada para el descifrado.
    // Puede ser "hex", "url", "base64", o "quoted-printable".
    crypt.EncodingMode = "hex";

    // Se requiere un vector de inicialización si se utiliza el modo CBC.
    // El modo ECB no utiliza un IV.
    // La longitud del IV es igual al tamaño del bloque del algoritmo.
    // NO es igual a la longitud de la clave.
    const ivHex = "0001020304050607";
    crypt.SetEncodedIV(ivHex,"hex");

    // La clave secreta debe ser igual al tamaño de la clave.
    // Para el cifrado de 128 bits, la clave secreta binaria es de 16 bytes.
    const keyHex = "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F";
    crypt.SetEncodedKey(keyHex,"hex");

    // Cifrar una cadena...
    // La cadena de entrada tiene 44 caracteres ANSI (es decir, 44 bytes), por lo que
    // la salida debe ser de 48 bytes (un múltiplo de 8).
    // Como la salida es una cadena hexadecimal, debería
    // ser de 96 caracteres (2 caracteres por byte).
    // const encStr = crypt.EncryptStringENC("The quick brown fox jumps over the lazy dog.");
    //BBB0EF0769CBDFEBEDD02B2ABEBC7E8856642371EA33A72C83B1AD3255C99C950D66DE8E8EA6ABCD2AB672FE204961E1
    const encStr = crypt.EncryptStringENC(text);
    console.log(encStr);

    //Regresar resultado
    return encStr
}
module.exports= EncryptText;

