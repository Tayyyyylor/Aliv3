'use client'
import client from '@/utils/contentful'
import { useEffect, useState } from 'react'

export default function useContentful(entry) {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = client.getEntries({
          content_type: entry,
        })
        setData((await response).items)
        console.log('response', response)
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des données Contentful :',
          error
        )
      }
    }
    fetchData()
  }, [entry])

  return data
}
