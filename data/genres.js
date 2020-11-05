const genres = {
  jazz: [
    {
      id: 1,
      name: 'Freddie Hubbard',
      description: 'Frederick Dewayne Hubbard (April 7, 1938 – December 29, 2008) was an American jazz trumpeter. He played bebop, hard bop, and post-bop styles from the early 1960s onwards. His unmistakable and influential tone contributed to new perspectives for modern jazz and bebop.',
      songs:[
        'Mirrors',
        'Red Clay',
        'Little Sunflower'
      ]
    },
    {
      id: 2,
      name: 'Jim Hall',
      description: 'James Stanley Hall (December 4, 1930 – December 10, 2013) was an American jazz guitarist, composer and arranger.',
      songs:[
        'Dream Gypsy',
        'Romain',
        'Careful'
      ]
    },
    {
      id: 3,
      name: 'The Blackbyrds',
      description: 'The Blackbyrds are an American rhythm and blues and jazz-funk fusion group, formed in Washington, D.C., in 1973 and reformed in 2012 by Keith Killgo.',
      songs:[
        'Rock Creek Park',
        'April Showers',
        'Dreaming About you'
      ]
    },
    {
      id: 4,
      name: 'Miles Davis',
      description: "Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music. Davis adopted a variety of musical directions in a five-decade career that kept him at the forefront of many major stylistic developments in jazz.",
      songs:[
        'Solar',
        'So what',
        'Concierto de Aranjuez'
      ]
    }
  ],
  rock: [
    {
      id: 5,
      name: 'Led Zepplin',
      description: 'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With their heavy, guitar-driven sound, they are regularly cited as one of the progenitors of heavy metal, although their style drew from a variety of influences, including blues and folk music.',
      songs:[
        'Stairway to Heaven',
        'Kashmir',
        'Black Dog'
      ]
    },
    {
      id: 6,
      name: 'Red Hot Chilli Peppers',
      description: 'Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock. The band consists of vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. With over 80 million records sold worldwide, Red Hot Chili Peppers are one of the best-selling bands of all time. They are the most successful band in the history of alternative rock, with the records for most number-one singles (13), most cumulative weeks at number one (85) and most top-ten songs (25) on the Billboard Alternative Songs chart. They have won six Grammy Awards, and in 2012 were inducted into the Rock and Roll Hall of Fame.',
      songs:[
        'Otherside',
        'Californication',
        'Under the Bridge'
      ]
    },
    {
      id: 7,
      name: 'Linkin Park',
      description: 'Linkin Park is an American rock band from Agoura Hills, California. The band\'s current lineup comprises vocalist/rhythm guitarist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington are former members of the band. Categorized as alternative rock, Linkin Park\'s earlier music spanned a fusion of heavy metal and hip hop, while they later transitioned into more electronica and pop influenced music.',
      songs:[
        'Crawling',
        'Leave out all the rest',
        'Points of Authority'
      ]
    },
    {
      id: 8,
      name: 'The Beatles (The Fab Four)',
      description: 'The Beatles were an English rock band formed in Liverpool in 1960. The group, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as the most influential band of all time. They were integral to the development of 1960s counterculture and popular music\'s recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era\'s youth and sociocultural movements.',
      songs:[
        'Hey Jude',
        'Let it Be',
        'Elanor Rigby'
      ]
    },
    {
      id: 9,
      name: 'The Rolling Stones',
      description: 'The Rolling Stones are an English rock band formed in London in 1962. As a diverging act to the popular pop rock of the early 1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock. The band\'s first stable line-up consisted of bandleader Brian Jones (guitar, harmonica, keyboards), Mick Jagger (lead vocals, harmonica), Keith Richards (guitar, vocals), Bill Wyman (bass guitar), Charlie Watts (drums), and Ian Stewart (piano), the last of whom was removed from the official line-up in 1963, but continued to work with the band as a contracted musician until his death in 1985. The band\'s primary songwriters, the partnership of Jagger and Richards, assumed leadership after Andrew Loog Oldham became the group\'s manager. Jones left the band less than a month before his death in 1969, having already been replaced by Mick Taylor, who in turn left in 1974 and was replaced in 1975 by Ronnie Wood, who has since remained. Since Wyman\'s departure in 1993, Darryl Jones has served as bassist. The Stones have not had an official keyboardist since Stewart\'s departure in 1963, but have employed several musicians in that role, including Jack Nitzsche (1965–71), Nicky Hopkins (1967–82), Billy Preston (1971–81), Ian McLagan (1978–81), and Chuck Leavell (1982–present)',
      songs:[
        '(I can\'t get no) Satisfaction',
        'Paint it Black',
        'Jumpin\' Jack Flash'
      ]
    }
  ],
  hip_hop: [
    {
      id: 10,
      name: 'Eminem',
      description: 'Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (/ˌɛmɪˈnɛm/; often stylized as EMINƎM), is an American rapper, songwriter, and record producer. Credited with popularizing hip hop in Middle America, Eminem\'s global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music. While much of his transgressive work during the early 2000s made him hugely controversial, he came to be a representation of popular angst and the American underclass. He has been influential for many artists of various genres.',
      songs:[
        'Sing for the Moment',
        'Without Me',
        'Mockingbird'
      ]
    },
    {
      id: 11,
      name: 'Nas',
      description: 'Nasir bin Olu Dara Jones (/nɑːˈsɪər/; born September 14, 1973), better known by his stage name Nas (/nɑːz/), is an American rapper, songwriter, and entrepreneur. Rooted in the New York rap scene with his street poetry, he is regarded as one of the greatest rappers of all time. The son of jazz musician Olu Dara, Nas has released twelve studio albums since 1994, with seven of them certified platinum and multi-platinum in the US.',
      songs:[
        'NY State of Mind',
        'If I ruled the World',
        'Halftime'
      ]
    },
    {
      id: 12,
      name: '(The Notorious B.I.G) Biggie Smalls',
      description: 'Christopher George Latore Wallace (May 21, 1972 – March 9, 1997), better known by his stage names The Notorious B.I.G., Biggie Smalls, or simply Biggie, was an American rapper and songwriter. Rooted in the New York rap scene and gangsta rap traditions, he is considered one of the greatest rappers of all time. The Notorious B.I.G. became known for his distinctive laidback lyrical delivery, offsetting the lyrics\' often grim content and his own intimidating appearance. His music was often semi-autobiographical, telling of hardship and criminality, but also of debauchery and celebration.',
      songs:[
        'Kick in the Door',
        'Hypnotise',
        'Who Shot Ya?'
      ]
    }
  ],
  dub_step: [
    {
      id: 13,
      name: 'Excision',
      description: 'Jeff Abel (born 29 April 1986), better known by his stage name Excision, is a Canadian producer and disc jockey. He is the founder of Rottun Recordings and Subsidia Records. Active since 2006, his first release, "Warning", was in 2007. He released an annual "Shambhala" mix album in the third quarter of each year until 2016, where he started his own music festival (Lost Lands) the following year, and releases annual mixes. A producer of dubstep, drum and bass, trap and breakbeat, Excision is known for his dark, bass-heavy sounds created using bass and drums, the aggressiveness of metal, and hip-hop vibes. He is also known for his tours with immense sound systems and huge visual productions.',
      songs:[
        'Throwin Elbows',
        'Vault',
        'Codename X'
      ]
    },
    {
      id: 14,
      name: 'Chee',
      description: 'Following several years of lateral experimentation in sound design, South African producer CHEE’s unique hybrid sound erupted into the international domain in 2016 with the release of his Shrodinger EP on Dutch label Underslung and several self-releases. His sonic innovation quickly caught the attention of prime heads in electronica, with tracks featured on leading Youtube portals such as Inspector Dubplate and with Noisia featuring Chee and side project IT HZ tracks on their radio show. With growing hype around his fresh approach and uncompromising bass experimentation with a heavy dancefloor edge, labels started to take a deeper interest.',
      songs:[
        'Vultures',
        'Wallflower',
        'Pipsqueak'
      ]
    },
    {
      id: 15,
      name: 'Subtronics',
      description: 'Jesse Kardon, better known by his alias Subtronics, is an American dubstep and riddim DJ and producer from Philadelphia, Pennsylvania. He is known for his song "Griztronics", a collaboration with Michigan-based electronic music artist GRiZ that peaked on Billboard\'s Hot Dance/Electronic Songs at the No. 9 position in late 2019. Kardon peaked at No. 10 on Billboard\'s Next Big Sound chart in September 2019.',
      songs:[
        'Professor Chaos',
        'MAD',
        'Warp Drive'
      ]
    }
  ]
}

export default genres
