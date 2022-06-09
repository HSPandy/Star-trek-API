const express = require('express')
const app = express()
const cors = require(cors)
const PORT = 8000

app.use(cors())

const aliens = {
    'humans': {
        'speciesName' : 'Humans',
        'homeworld' : 'Earth',
        'location' : 'Alpha Quadrant',
        'features' : 'Rounded ear, hair on head and face (sometimes)',
        'interestingFact' : 'Founded the United Federation of Planets after first contact with the Vulcans',
        'notableExamples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln"
    },
    'vulcans': {
        'speciesName' : 'Vulcans',
        'homeworld' : 'Vulancs',
        'features' : 'Pointed ear, upward-curving eyebrows',
        'interestingFact' : 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan nameed Surak',
        'notableExamples' : "Spock, T'Pol, Sarek"
    },
    'klingons': {
        'speciesName' : 'Klingons',
        'homeworld' : "Qo'nos",
        'features' : 'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact' : 'Highly skilled in weapons and battle, their facial ridges were lost as a result of a virus in 2154, but were subsequently restored by 2269.',
        'notableExamples' : "Worf, Kor, Kang"
    },
    'romulans': {
        'speciesName' : 'Romulans',
        'homeworld' : "Romulus",
        'features' : 'Pointed ears, upward-curving eyebrows, green tinge to the skin, diagonal smooth forehead ridges (somtimes)',
        'interestingFact' : 'Share a common ancestory with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.',
        'notableExamples' : "Pardek, Tal'aura, Narissa"
    },
    'borg' : {
        'speciesName' : '(The) Borg',
        'homeworld' : 'unknown (Delta Quadrant)',
        'features' : 'Pale skin, numerous interior and exterior biological modifications',
        'interestingFact' : 'No single genetic lineage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" individual. DO NOT APPROACH unless under specific diplomatic orders from Starfleet command.',
        'notableExamples' : "Borg Queen, Seven of Nine, Locutus"
    },
    'gorn' : {
        'speciesName' : 'Gorn',
        'homeworld' : 'unknown (Alpha Quadrant)',
        'features' : 'Scaly green skin, large, iridescent eyes, powerful build, sharp teeth',
        'interestingFact' : 'Extremely militaristic and driven to conquer, but also possess advanced scientific knowledge allowing for superior bio-weapons.',
        'notableExamples' : "Gorn Captain"
    },
    'trill' : {
        'speciesName' : 'Trill',
        'homeworld' : 'Trill',
        'features' : 'Outward appearance similar to humans, aside from district dark pigment marks running symemetrically down both sides of the face and body',
        'interestingFact' : 'Some Trill are willing hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.',
        'notableExamples' : "Jadzia Dax, Ezri Dax, Curzon Dax"
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (request, response) => {
   const aliensName = request.params.alienName.toLocaleLowerCase()
   if(aliens[aliensName]){
       response.json()
   } else {
       response.json(aliens['humans'])
   }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})