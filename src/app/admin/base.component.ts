import { OnInit } from "@angular/core";

export class BaseComponent implements OnInit {

    // Máscaras
    phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    // Config upload imagem
    afuConfig = {
        multiple: false,
        formatsAllowed: ".jpg,.png",
        maxSize: "1",
        uploadAPI: {
            url: "https://example-file-upload-api",
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=UTF-8"
            },
            params: {
                'page': '1'
            },
            responseType: 'blob',
        },
        theme: "dragNDrop",
        hideProgressBar: false,
        hideResetBtn: false,
        hideSelectBtn: false,
        fileNameIndex: true,
        replaceTexts: {
            selectFileBtn: 'Selecionar',
            resetBtn: 'Limpar',
            uploadBtn: 'Upload',
            dragNDropBox: 'Arraste e solte',
            attachPinBtn: 'Selecionando...',
            afterUploadMsg_success: 'Upload realizado com sucesso !',
            afterUploadMsg_error: 'Upload falhou !',
            sizeLimit: 'Tamanho máximo'
        }
    };
    closeResult: string;

    constructor() {
    }

    ngOnInit(): void { }

    voltar() {
        history.back();
    }
}