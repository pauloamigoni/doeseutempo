const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;


    const ongs = await connection('ongs').where('id', ong_id).select('*');
    const enderecos = await connection('enderecos').where('ong_id', ong_id).select('*');
    return response.json({ongs, enderecos});
 
  }
  
}