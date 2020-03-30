const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async index(request, response) {

  


    // const ongs = await connection.withRecursive('enderecos', (qb) => {
    //       qb.select('*').from('ongs')
    //     }).select('*').from('enderecos')

    //     for (row of ongs) {
    //       console.log(`${row['id']}`);

    //     }

        // const ongs = await connection.column('name', {email: 'email', whatsapp: 'whatsapp'}, 'id').select().from('ongs');


    const ongs = await connection.with('enderecos', (qb) => {
        qb.select('*').from('ongs')
      }).select('*').from('enderecos')


    //  const ongs = await connection('ongs').select('id', 'name', 'email', 'whatsapp', 'description')
    //  .then(function(result) {

    //   var ende = [];
    //     result.map((x, i) => {
         
    //       connection('enderecos').select("endereco", "uf").where('ong_id', '=', x.id)
    //       .then((rows) => {
    //           for (row of rows) {
    //               ende.push('endereco',row['endereco']);
    //               console.log(`${row['endereco']} ${row['uf']}`);
    //           }
    //       })
    //       .catch((err) => { console.log( err); throw err });

    //     })
       
  
    //   });
    

    return response.json(ongs);
  },





  async create(request,response) {

    const { name, email, whatsapp, description, enderecos } = request.body;
    const id = generateUniqueId();

    await connection('ongs').insert({
      id, name, email, whatsapp, description
    }).then(
        function (){
              if(enderecos){
                enderecos.map(async function( end ) {

                  await connection('enderecos').insert({ 
                                  endereco: end.endereco, 
                                  numero: end.numero,
                                  bairro: end.bairro,
                                  cep: end.cep,
                                  cidade: end.cidade,
                                  uf: end.uf,
                                  complemento: end.complemento,
                                  ong_id: id
                          });
                 
              }); 
            }

        }
    );

    return response.json({id});
  }
}