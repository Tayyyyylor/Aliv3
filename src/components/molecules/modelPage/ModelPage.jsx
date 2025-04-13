import React, { useMemo, useState } from 'react'
import Cards from '../card/Card'
import Modal from '../modal/Modal'
import Backdrop from '@/components/atoms/backdrop/Backdrop'

export default function ModelPage({ data }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  console.log('data', data)

  const sortedData = useMemo(() => {
    if (!Array.isArray(data)) {
      console.error('directorData is not an array :', data)
      return []
    }

    return [...data].sort((a, b) => a.fields?.order - b.fields?.order)
  }, [data])

  const handleClickOpenCard = projectIndex => {
    setIsOpen(true)
    setSelectedProject(data[projectIndex])
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

  console.log('isOpen', isOpen)
  console.log('selectedProject', selectedProject)

  return (
    <main className="model">
      <section className="containerCards">
        {sortedData.map((card, index) => (
          <Cards
            key={index}
            src={card.fields?.coverVideo?.[0]?.original_secure_url}
            srcImg={card.fields?.coverImg?.[0]?.secure_url}
            alt="toto"
            label={card.fields.title}
            subtitle={card.fields.desc}
            onClick={() => handleClickOpenCard(index)}
          />
        ))}
        {isOpen && selectedProject && (
          <>
            <Backdrop onCancel={handleBackdropClick} />
            <Modal
              onClick={handleClickCloseCard}
              src={selectedProject.fields?.coverVideo?.[0]?.original_secure_url}
            />
          </>
        )}
      </section>
    </main>
  )
}
