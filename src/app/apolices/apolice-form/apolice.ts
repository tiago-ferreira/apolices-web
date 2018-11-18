export interface Apolice {
    tipo_documento:string,
    numero_documento:string,
    nome_segurado:string,
    nome_seguradora:string,
    nome_produto:string,
    nome_familia:string,
    inicio_vigencia:Date,
    fim_vigencia:Date,
    documento_vigente:boolean,
    nome_corretora:string,
    cnpj_corretora:string,
    cnpj_seguradora:string,
    numero_processo_susep:string,
    pagamento_em_atraso:string,
    valor_parcela:number,
    importancia_segurada:number
}