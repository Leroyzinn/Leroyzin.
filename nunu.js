case 'contato':

loli.sendMessage(from, {text: ` 

`}, {quoted: contato})

break




case = 'contatopv'

bymonarge=`

`
loli.sendMessage(sender, {text: bymonarge}, {quoted: contato})




break




case 'play': {
try {
if(!q) return reply('Cade o nome?')

anu = await fetchJson(`TUA API`)

const tituloPlay = '*Título:* '
const canalPlay = '*Canal:* '
teks = `
${tituloPlay} ${anu.resultado.título}
${canalPlay} ${anu.resultado.canal}
`
//values = [`playaudio ${q}`,`playvideo ${q}`]
selectableCount = 1
//light.sendMessage(from, { poll: { teks, values, selectableCount }})
light.sendPoll(from, teks, [`audio ${q}`,`video ${q}`])
}catch(e) {
reply(e)
}
}
break






case 'netflix':
  if(contaId === undefined && !isGroup) return reply(login)
const netflix = require('./loli/mais/netflix.json')
if (netflix.length === 0) {
    destiny.sendMessage(from, 'Desculpe, não há mais contas disponíveis no momento.');
  } else {
    const randomIndex1 = Math.floor(Math.random() * netflix.length);
    const conet = netflix[randomIndex1];
    netflix.splice(randomIndex1, 1);
    fs.writeFileSync('./datab/contas/netflix.json', JSON.stringify(netflix, null, 2));
    destiny.sendMessage(from, { image: { url: 'https://telegra.ph/file/ea66a4b0e47f3bcccebfd.jpg' }, caption: `
    > Lembre-se: teste a conta para ver se tem acesso ou não, algumas contas não têm mais acesso válido, mas você pode solicita proprietário para uma base de uma nova conta, boa sorte.
    proprietário: https://wa.me/558592492932
    
    > Estoque: ${netflix.length} contas restantes
    
    > Login: ${conet.login}
    
    > Senha: ${conet.senha}
    
    *CREDITOS*: Mamede Carlos
    `, mentions: [sender] }, { quoted: info });
  }
break