const { Configuration, OpenAIApi, OpenAI } = require('openai');

genpersona: async function(req, res) {
    const value = await sendPersonaApicall(req.body);

    const unsplashimages = [
      ["creative women",  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3161&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["casual proffesional men", 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["young proffesional men", 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["casual proffesional women", 'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["happy women", 'https://images.unsplash.com/photo-1627900352514-7f8bbb3f5edb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["young women", 'https://images.unsplash.com/photo-1534269381359-1960882a3938?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["women just graduated", 'https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["men just graduated",'https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["women working from home", 'https://images.unsplash.com/photo-1522199899308-2eef382e2158?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["women entrepeneur", 'https://images.unsplash.com/photo-1573496528816-a104a722b3db?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["men digital nomad", 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      ["women calling", 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    ];
    const imagesMap = new Map(unsplashimages);
    var newJson = JSON.parse(value);
    let unsplashImg = imagesMap.get(newJson.selectedImage)
    console.log('unsplash image ' + unsplashImg)

    newJson.selectedImage = unsplashImg;
    
    res.json({
      value: newJson
    });
  },

  async function sendPersonaApicall(input) {
    console.log('Started \'sendapicall\'');
    let personaMessages = [
      {'role': 'system', 'content': 'You are a marketing user persona generator. After you have created a persona, you can select one of the following images: "creative women","casual proffesional men","young proffesional men","casual proffesional women","happy women","young women","women just graduated","men just graduated","women working from home","women entrepeneur","men digital nomad","women calling".'}
    ];
    
    const openai = new OpenAI({
      organization: '',
      apiKey: '',
    });
  
    personaMessages.push({"role": "user", "content":  `What would a person with that role think of the following situation: '${input.problem}'.`});
    personaMessages.push({"role": "user", "content":  `Info about persona: ${input.hasCar ? 'has a car' : ''} ${input.hasHouse ? ', is a home owner' : ''} ${input.isOfficeWorker ? ', is an office worker': ''}.`});
    if (input.saveMoney || input.saveTime || input.saveStress) {
      personaMessages.push({"role": "user", "content":  `Persona goals are: ${input.saveMoney ? 'to save money' : ''} ${input.saveTime ? ', to save time' : ''} ${input.saveStress ? ', to have less stress': ''}.`});
    }
    // console.log(personaMessages);
  
    const completion = await openai.chat.completions.create({
      messages: personaMessages,
      model: 'gpt-4o-2024-08-06',
      max_tokens: 280,
      response_format: {
        // See /docs/guides/structured-outputs
        type: 'json_schema',
        json_schema: {
          name: 'persona_schema',
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              job: {
                type: 'string'
              },
              responsabilities: {
                type: 'string',
              },
              responseToSituation: {
                type: 'string',
                description: 'There a 2 types of respones: 1. The situation is a painful problem 2. The situation is insignificant, it would be a nice to have but not a must.'
              },
              selectedImage: {
                type: 'string'
              },
              personaDescription: {
                type: 'string',
                description: 'Painting a picture of their lifestyle and a general description of their household '
              },
            },
            additionalProperties: false
          }
        }
      }
    });
  
    const output = completion.choices[0].message.content;
  
    console.log(output);
  
    console.log('\'sendapicall\' total message:');
    console.log(personaMessages);
    console.log('********** end of message');
  
    return completion.choices[0].message.content;
  }