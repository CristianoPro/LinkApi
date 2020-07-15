import axios from 'axios';

const { BLING_APIKEY, BLING_URL } = process.env;

const handleXml = (title, value) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <pedido>
      <cliente>
          <nome>${title}</nome>
          <tipoPessoa>J</tipoPessoa>
          <endereco>Rua Visconde de São Gabriel</endereco>
          <cpf_cnpj>00000000000000</cpf_cnpj>
          <ie_rg>3067663000</ie_rg>
          <numero>392</numero>
          <complemento>Sala 54</complemento>
          <bairro>Cidade Alta</bairro>
          <cep>95.700-000</cep>
          <cidade>Bento Gonçalves</cidade>
          <uf>RS</uf>
          <fone>5481153376</fone>
          <email>teste@teste.com.br</email>
      </cliente>
      <transporte>
          <transportadora>Transportadora XYZ</transportadora>
          <tipo_frete>R</tipo_frete>
          <servico_correios>SEDEX - CONTRATO</servico_correios>
          <dados_etiqueta>
              <nome>Endereço de entrega</nome>
              <endereco>Rua Visconde de São Gabriel</endereco>
              <numero>392</numero>
              <complemento>Sala 59</complemento>
              <municipio>Bento Gonçalves</municipio>
              <uf>RS</uf>
              <cep>95.700-000</cep>
              <bairro>Cidade Alta</bairro>
          </dados_etiqueta>
          <volumes>
              <volume>
                  <servico>SEDEX - CONTRATO</servico>
                  <codigoRastreamento></codigoRastreamento>
              </volume>
          </volumes>
      </transporte>
      <itens>
          <item>
              <codigo>001</codigo>
              <descricao>Caneta 001 Teste</descricao>
              <un>Pç</un>
              <qtde>10</qtde>
              <vlr_unit>1.68</vlr_unit>
          </item>
      </itens>
      <parcelas>
          <parcela>
              <data>01/09/2009</data>
              <vlr>${value}</vlr>
              <obs>Teste obs 1</obs>
          </parcela>
      </parcelas>
      <vlr_frete>15</vlr_frete>
      <vlr_desconto>10</vlr_desconto>
      <obs>Testando o campo observações do pedido</obs>
      <obs_internas>Testando o campo observações internas do pedido</obs_internas>
  </pedido>`;
};

const getGenerateOrderConfig = async order => {
  const { title, value } = order;
  const xml = handleXml(title, value);
  return {
    url: `pedido/json/?apikey=${BLING_APIKEY}&xml=${encodeURI(xml)}`,
    baseURL: `${BLING_URL}`,
    method: 'post',
  };
};

const SendOrder = async order => {
  const config = await getGenerateOrderConfig(order);
  return axios(config)
    .then(resp => {
      const { data } = resp;
      return {
        data,
      };
    })
    .catch(err => {
      throw err;
    });
};

export default {
  getGenerateOrderConfig,
  SendOrder,
};
