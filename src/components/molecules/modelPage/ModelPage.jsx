import React, { useMemo, useState } from 'react'
import Cards from '../card/Card'
import Modal from '../modal/Modal'
import Backdrop from '@/components/atoms/backdrop/Backdrop'

export default function ModelPage({ data }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const sortedData = useMemo(() => {
    if (!Array.isArray(data)) {
      console.error('directorData is not an array :', data)
      return []
    }

    return [...data].sort((a, b) => a.fields?.order - b.fields?.order)
  }, [data])

  const handleClickOpenCard = projectIndex => {
    setIsOpen(true)
    setSelectedProject(sortedData[projectIndex])
  }
  const handleClickCloseCard = () => {
    setSelectedProject(null)
    setIsOpen(false)
  }

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleClickCloseCard()
    }
  }

  return (
    <main className="model">
      <section className="containerCards">
        {sortedData.map((card, index) => {
          const previewImageUrl = card?.fields?.poster?.fields?.file?.url
            ? `https:${card.fields?.poster?.fields?.file?.url}`
            : ''

          return (
            <Cards
              key={index}
              playbackId={card.fields?.coverVideo?.playbackId}
              srcImg={previewImageUrl}
              alt="toto"
              label={card.fields.title}
              subtitle={card.fields.desc}
              onClick={() => handleClickOpenCard(index)}
            />
          )
        })}
      </section>
      {isOpen && selectedProject && (
        <>
          <Backdrop onCancel={handleBackdropClick} />
          <Modal playbackId={selectedProject?.fields?.video?.playbackId} />
        </>
      )}
    </main>
  )
}
