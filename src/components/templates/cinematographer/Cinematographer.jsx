import ModelPage from '@/components/molecules/modelPage/ModelPage'
import client from '@/utils/contentful'
import React, { useEffect, useState } from 'react'

export default function Cinematographer() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'cinematographer',
        })

        if (response.items.length > 0) {
          const datas = response.items
          setData(datas)
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error)
      }
    }

    fetchData()
  }, [])

  return data && <ModelPage data={data} />
}
