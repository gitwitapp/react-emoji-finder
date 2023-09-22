import React, { useState } from 'react'

import './tailwind-config.js'

export default function App() {
  const emojis = [
    { emoji: '😀', description: 'Happy face' },
    { emoji: '😂', description: 'Laughing face' },
    { emoji: '😍', description: 'Heart eyes face' },
    { emoji: '🤩', description: 'Star-struck face' },
    { emoji: '😎', description: 'Cool face' },
    { emoji: '🥳', description: 'Party face' },
    { emoji: '🤔', description: 'Thinking face' },
    { emoji: '😊', description: 'Smiling face' },
    { emoji: '🙌', description: 'Raised hands' },
    { emoji: '🎉', description: 'Party popper' },
    { emoji: '🔥', description: 'Fire' },
    { emoji: '💯', description: 'Hundred points' },
    { emoji: '👍', description: 'Thumbs up' },
    { emoji: '🌟', description: 'Star' },
    { emoji: '🎈', description: 'Balloon' },
    { emoji: '💖', description: 'Sparkling heart' }
  ]
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredEmojis = emojis.filter((emoji) => {
    return emoji.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="How are you feeling today?"
        className="p-2 mb-4 mx-auto block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-6 gap-2">
        {filteredEmojis.map((emoji, index) => (
          <div key={index} className="p-4 bg-gray-200 text-4xl text-center">
            {emoji.emoji}
          </div>
        ))}
      </div>
    </div>
  )
}