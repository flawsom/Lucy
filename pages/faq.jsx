import React, { useState } from 'react'
import Head from 'next/head'
const faqData = [
  {
    question: 'What is Lucy?',
    answer:
      'Lucy is a torrent site that allows users to download and share copyrighted content such as movies, music, software, and more.',
  },
  {
    question: 'How does Lucy work?',
    answer:
      'Users can search for their desired content on Lucy and download it using a BitTorrent client. Lucy operates on a peer-to-peer network, meaning that users download files from other users who have already downloaded them',
  },
  {
    question: 'How can I protect my privacy while using Lucy?',
    answer:
      'To protect your privacy while using Lucy, consider using a VPN (Virtual Private Network) to hide your IP address and encrypt your internet connection. This will help prevent your online activities from being tracked.',
  },
  {
    question: "What if I can't find the content I'm looking for on Lucy?",
    answer:
      "Lucy is a user-driven platform, and the availability of content depends on what other users have uploaded. If you can't find what you're looking for, it may not be available on Lucy.",
  },
  {
    question: 'Is it safe to download from Lucy?',
    answer:
      "We allow only verified torrents to be uploaded on our site.Yet there are no absolutes when it comes to protection .User should always scan/test whatever they download and don't take anything for granted. Mistakes often happen as the uploaders are also humans, or someone could just simply want to trick us. From our side, as a site, we try our best to keep you protected but that does NOT mean you should let your guards down.",
  },
  {
    question: 'Is there any rule to maintain  the ratio ?',
    answer:
      "No ,currently we don't have any rule to maintain the ratio .But the users are still advised to maintain their ratio instead of Hit and Run .",
  },
  {
    question: 'What is Hit and Run ?',
    answer:
      'Hit and Run is a term used to describe a user who downloads a torrent and then does not seed it back for other users to download. This is considered bad etiquette and is frowned upon by the community.',
  },
  {
    question: 'What is the difference between a seed and a leech?',
    answer:
      ' A "Seed" is a user who has a complete copy of the file being shared and is actively sharing it with others while "Leech" is a user who is downloading the file but is not sharing it with others.',
  },
]

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState([])

  const toggleAnswer = index => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index))
    } else {
      setOpenIndices([...openIndices, index])
    }
  }

  return (
    <div className='max-lg:ml-[10%]  min-[1700px]:ml-[-9%] min-[1900px]:ml-[-15%] min-[2000px]:ml-[-20%] min-[2300px]:ml-[-27%]'>
      <Head>
        <title>Faq | Lucy</title>
      </Head>
      <h1 className='mb-10 text-center text-2xl font-bold text-app-dark-blue dark:text-white '>
        HELP CENTER
      </h1>
      <div className=' w-[80vw]'>
        <div className='grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 '>
          {faqData.map((item, index) => {
            return (
              <div
                key={index * 2}
                className={`hover_effect-1 ${
                  openIndices.includes(index) ? 'max-h-64' : 'max-h-16'
                } cursor-pointer overflow-hidden rounded-lg bg-[#171E31] px-4 py-5 shadow-sm shadow-slate-800 transition duration-[0.5s] ease-in-out `}
                onClick={() => {
                  toggleAnswer(index)
                }}>
                <h3 className='text-xl font-light text-white '>
                  {item.question}
                </h3>
                <div
                  key={index}
                  className={`${
                    openIndices.includes(index) ? 'opacity-1  ' : 'opacity-0'
                  } mt-6 text-gray-500 transition duration-300 ease-in-out`}>
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQ
